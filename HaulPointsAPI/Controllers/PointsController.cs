using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Data;
using HaulPointsAPI.Models.Entities;
using HaulPointsAPI.Services;


namespace HaulPointsAPI.Controllers {
    [ApiController]
    [Route("api/[controller]")]
     public class PointsController : ControllerBase {
        private readonly HaulPointsDbContext _context; 
        private readonly PointService _service; 

        public PointsController(HaulPointsDbContext context, PointService service)
        {
            _context = context;
            _service = service;
        }
        [HttpGet("balance")]
        public async Task<IActionResult> Balance(int userId)
        {
            var (Result, Balance) = await _service.GetBalance(userId);
            if(Result == PointService.BalanceResult.DriverNotFound) {
                return NotFound(new {success = false, message = "Driver not found"});
            }
            if(Result == PointService.BalanceResult.NotDriver) {
                return BadRequest(new {success = false, message = "User is not a driver"});
            }
            return Ok(new {success = true, balance = Balance});
        }

     }
}