using HaulPointsAPI.Data;
using HaulPointsAPI.Models.Entities;
using HaulPointsAPI.Models.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HaulPointsAPI.Services
{
    public class PointService
    {
        private readonly HaulPointsDbContext _context;
        public PointService(HaulPointsDbContext context)
        {
            _context = context;
        }
        public enum BalanceResult {
            Success,
            DriverNotFound,
            NotDriver
        }

        public enum ModifyPointsResult {
            Success,
            InsufficientFunds,
            InvalidAmount,
            DriverNotFound,
            NotDriver
        }

        // Method to create a points record for a user if it doesn't exist
        public async Task<Point> CreatePointsRecord(int userId)
        {
            var points = new Point
            {
                UserId = userId,
                Balance = 0,
                UpdatedAt = DateTime.UtcNow
            };
            _context.Points.Add(points);
            await _context.SaveChangesAsync();
            return points;
        }

        // Method to get the balance of points for a user
        public async Task<(BalanceResult Result, int? Balance)> GetBalance(int userId) {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Id == userId);
            if(user == null) {
                return(Result: BalanceResult.DriverNotFound, Balance: null);
            }
            // Only drivers have points, so if the user is not a driver, return NotDriver
            if(user.Role != RoleEnum.Driver) {
                return(Result: BalanceResult.NotDriver, Balance: null);
            }
            var points = await _context.Points.SingleOrDefaultAsync(p => p.UserId == userId);
            // If the points record doesn't exist, create it with a balance of 0
            if(points == null)
            {
                points = await CreatePointsRecord(userId);
            }
            return(Result: BalanceResult.Success, Balance: points.Balance);
        }

        // Method to add points to a user's balance
        public async Task<(ModifyPointsResult Result, int? Balance)> AddPoints(int userId, int amount)
        {
            // Validate the amount to prevent overflow and ensure it's positive
            if(amount > 100000 || amount <= 0) {
                return(Result: ModifyPointsResult.InvalidAmount, Balance: null);
            }
            
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Id == userId);
            // Check if the user exists
            if(user == null) {
                return(Result: ModifyPointsResult.DriverNotFound, Balance: null);
            }
            // Only drivers have points, so if the user is not a driver, return NotDriver
            if(user.Role != RoleEnum.Driver) {
                return(Result: ModifyPointsResult.NotDriver, Balance: null);
            }


            var points = await _context.Points.SingleOrDefaultAsync(p => p.UserId == userId);

            // If the points record doesn't exist, create it with a balance of 0 before adding points
            if(points == null)
            {
                points = await CreatePointsRecord(userId);
            }

            // Check for potential overflow before adding points
            if(points.Balance > int.MaxValue - amount) {
                return(Result: ModifyPointsResult.InvalidAmount, Balance: null);
            }
            // Add points and update the balance
            points.Balance += amount;
            // Update the timestamp for when the points were last modified
            points.UpdatedAt = DateTime.UtcNow;
            // Save changes to the database
            await _context.SaveChangesAsync();
            // Return the new balance after adding points
            return(Result: ModifyPointsResult.Success, Balance: points.Balance);
        }

        // Method to deduct points from a user's balance
        public async Task<(ModifyPointsResult Result, int? Balance)> DeductPoints(int userId, int amount)
        {
            // Validate the amount to prevent overflow and ensure it's positive
            if(amount > 100000 || amount <= 0) {
                return(Result: ModifyPointsResult.InvalidAmount, Balance: null);
            }
            
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Id == userId);
            // Check if the user exists
            if(user == null) {
                return(Result: ModifyPointsResult.DriverNotFound, Balance: null);
            }
            // Only drivers have points, so if the user is not a driver, return NotDriver
            if(user.Role != RoleEnum.Driver) {
                return(Result: ModifyPointsResult.NotDriver, Balance: null);
            }

            var points = await _context.Points.SingleOrDefaultAsync(p => p.UserId == userId);

            // If the points record doesn't exist, create it with a balance of 0 before adding points
            if(points == null)
            {
                points = await CreatePointsRecord(userId);
                return(Result: ModifyPointsResult.InsufficientFunds, Balance: points.Balance);
            }

            // Check for negative balance after deduction to prevent overdraft
            if(amount > points.Balance) {
                return(Result: ModifyPointsResult.InsufficientFunds, Balance: points.Balance);
            }
            // Deduct points and update the balance
            points.Balance -= amount;
            // Update the timestamp for when the points were last modified
            points.UpdatedAt = DateTime.UtcNow;
            // Save changes to the database
            await _context.SaveChangesAsync();
            // Return the new balance after deducting points
            return(Result: ModifyPointsResult.Success, Balance: points.Balance);
        }
    }
}