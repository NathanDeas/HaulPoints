using HaulPointsAPI.Data;
using HaulPointsAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


namespace HaulPointsAPI.Services
{
    public class UserService
    {
        // Database context for accessing user data
        private readonly HaulPointsDbContext _context;
        // Password hasher for secure password storage
        private readonly IPasswordHasher<User> _passwordHasher;

        // Result enums for registration and login outcomes
        public enum RegistrationResult
        {
            Success,
            UsernameExists,
            EmailExists
        }

        // Result enums for login outcomes
        public enum LoginResult
        {
            Success,
            UserNotFound,
            InvalidPassword
        }

        // Constructor to initialize the service with database context and password hasher
        public UserService(HaulPointsDbContext context, IPasswordHasher<User> passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        // Method to register a new user
        public async Task<RegistrationResult> RegisterService(RegisterUserDTO rUser)
        {
            // Check if username or email already exists
            if (await _context.Users.AnyAsync(u => u.Username == rUser.Username.ToLower()))
            {
                return RegistrationResult.UsernameExists;
            }
            if (await _context.Users.AnyAsync(u => u.Email == rUser.Email))
            {
                return RegistrationResult.EmailExists;
            }
            // Create new user instance
            var user = new User
            {
                // Normalize username to lowercase
                Username = rUser.Username.ToLower(),
                Email = rUser.Email,
                Role = "Driver",
                CreatedAt = DateTime.UtcNow
            };
            // Hash the password
            user.PasswordHash = _passwordHasher.HashPassword(user, rUser.Password);
            // Save user to the database
            _context.Users.Add(user);
            // Save changes asynchronously
            await _context.SaveChangesAsync();

            // Return success result
            return RegistrationResult.Success;
        }
        // Method to authenticate a user during login
        public async Task<LoginResult> LoginService(string username, string password)
        { 

            var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == username.ToLower());
            if (user == null)
            {
                return LoginResult.UserNotFound;
            }
            // Verify the provided password against the stored hash
            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
            
            if (result == PasswordVerificationResult.Success)
            {
                return LoginResult.Success;
            }
            else
            {
                return LoginResult.InvalidPassword;
            }
        }
    }
}