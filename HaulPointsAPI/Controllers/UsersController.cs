using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Data;
using HaulPointsAPI.Models;
using HaulPointsAPI.Services;
using System;


namespace HaulPointsAPI.Controllers {
    [ApiController]
    [Route("api/[controller]")]

    public class UsersController : ControllerBase {

        private readonly UserService _service;
        private readonly HaulPointsDbContext _context; 

        public UsersController(UserService service, HaulPointsDbContext context)
        {
            _service = service;
            _context = context;
        }

        // Get all users endpoint
        //just for testing purposes
        [HttpGet("getusers")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDTO rUser)
        {
            var user = await _service.RegisterService(rUser);
            if (user == UserService.RegistrationResult.Success)
            {
                return Ok("User registered successfully");
            }
            else if (user == UserService.RegistrationResult.UsernameExists)
            {
                return Conflict("Username already exists");
            }
            else // EmailExists
            {
                return Conflict("Email already exists");
            }
        }

        // Login endpoint
        [HttpGet("login")]
        public async Task<ActionResult> Login(string username, string password)
        {
            var result = await _service.LoginService(username, password);
            if (result == UserService.LoginResult.Success)
            {
                return Ok("Login successful");
            }
            else if (result == UserService.LoginResult.UserNotFound)
            {
                return NotFound("User not found");
            }
            else // InvalidPassword
            {
                return Unauthorized("Invalid password");
            }
        }
    }
}