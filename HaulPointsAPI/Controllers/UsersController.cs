using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Data;
using HaulPointsAPI.Models;

namespace HaulPointsAPI.Controllers {
    [ApiController]
    [route("api/[controller]")]

    public class UsersController : ControllerBase {
        private readonly HaulPointsDbContext _context;
        public UsersController(HaulPointsDbContext context)
        {
            _context = context;
        }
        // GET: api/Users Get all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUser([FromRoute] int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/Users Create a new user
        [HttpPost]
        public async Task<ActionResult<Users>> CreateUser(Users user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        }
    }
}