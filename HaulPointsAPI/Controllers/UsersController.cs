using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Data;
using HaulPointsAPI.Models;
using HaulPointsAPI.Services;
using System;
using Microsoft.AspNetCore.Authorization;


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
        [Authorize(Roles = "Admin")]
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
                return Ok(new {success = true, message = "Success! Redirecting to Login Page"} );
            }
            else if (user == UserService.RegistrationResult.UsernameExists)
            {
                return Ok(new {success = false, message = "Username Already Exists"});
            }
            else // EmailExists
            {
                return Ok(new {success = false, message = "Email already exists"});
            }
        }

        // Login endpoint
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserDTO dto)
        {
            var result = await _service.LoginService(dto.Username, dto.Password);
            if (result.response == UserService.LoginResult.Success.ToString())
            {
                return Ok(result);
            }
            else if (result.response == UserService.LoginResult.UserNotFound.ToString())
            {
                return NotFound("Username not found");
            }
            else // InvalidPassword
            {
                return Unauthorized("Invalid password");
            }
        }
    }
}