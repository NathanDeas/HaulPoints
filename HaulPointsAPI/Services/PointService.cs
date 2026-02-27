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
    }
}