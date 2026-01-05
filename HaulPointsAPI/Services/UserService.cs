using HaulPointsAPI.Data;
using HaulPointsAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
// using Microsoft.AspNetCore.Authorization; 
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;


namespace HaulPointsAPI.Services
{
    public class UserService
    {
        // Database context for accessing user data
        private readonly HaulPointsDbContext _context;
        // Password hasher for secure password storage
        private readonly IPasswordHasher<User> _passwordHasher;

        private readonly IConfiguration _configuration;

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
        public UserService(HaulPointsDbContext context, IPasswordHasher<User> passwordHasher, IConfiguration configuration)
        {
            
            _configuration = configuration;
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
        public async Task<userLoginResponseDTO> LoginService(string username, string password)
        { 

            var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == username.ToLower());

            if (user == null) // User not found
            {
                return new userLoginResponseDTO
                {
                    Token = string.Empty,
                    response = LoginResult.UserNotFound.ToString()
                };
            }
            // Verify the provided password against the stored hash
            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
            
            if (result == PasswordVerificationResult.Success) // Password is correct
            {
                // Generate JWT token upon successful login
                var claims = new[]         
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Role, user.Role)
                };
                var securityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
                var signCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                // Create the JWT token
                var token = new JwtSecurityToken(
                    issuer : "http://localhost:5223",
                    audience : "HaulPointsAPI",
                    claims : claims,
                    expires : DateTime.UtcNow.AddMinutes(15),
                    signingCredentials : signCredentials
                );
                // Serialize the token to a string
                var userToken = new JwtSecurityTokenHandler().WriteToken(token); 
                // Return the token in the response DTO
                return new userLoginResponseDTO
                {
                    Token = userToken,
                    response = LoginResult.Success.ToString()
                };
            }

            else // Invalid password
            {
                return new userLoginResponseDTO
                {
                    Token = string.Empty,
                    response = LoginResult.InvalidPassword.ToString()
                };
            }
        }
    }
}