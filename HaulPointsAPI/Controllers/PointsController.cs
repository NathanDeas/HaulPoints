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
        [HttpGet("driver/{userId}/balance")]
        public async Task<IActionResult> GetBalance(int userId)
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

        [HttpPost("driver/{userId}/addpoints")]
        public async Task<IActionResult> AddPoints(int userId, int amount)
        {
            var (Result, Balance) = await _service.AddPoints(userId, amount);
            if(Result == PointService.ModifyPointsResult.DriverNotFound) {
                return NotFound(new {success = false, message = "Driver not found"});
            }
            if(Result == PointService.ModifyPointsResult.NotDriver) {
                return BadRequest(new {success = false, message = "User is not a driver"});
            }
            if(Result == PointService.ModifyPointsResult.InvalidAmount) {
                return BadRequest(new {success = false, message = "Invalid amount"});
            }
            if(Result == PointService.ModifyPointsResult.InsufficientFunds) {
                return BadRequest(new {success = false, message = "Insufficient funds"});
            }
            return Ok(new {success = true, balance = Balance});
        }

        [HttpPost("driver/{userId}/deductpoints")]
        public async Task<IActionResult> DeductPoints(int userId, int amount)
        {
            var (Result, Balance) = await _service.DeductPoints(userId, amount);
            if(Result == PointService.ModifyPointsResult.DriverNotFound) {
                return NotFound(new {success = false, message = "Driver not found"});
            }
            if(Result == PointService.ModifyPointsResult.NotDriver) {
                return BadRequest(new {success = false, message = "User is not a driver"});
            }
            if(Result == PointService.ModifyPointsResult.InvalidAmount) {
                return BadRequest(new {success = false, message = "Invalid amount"});
            }
            if(Result == PointService.ModifyPointsResult.InsufficientFunds) {
                return BadRequest(new {success = false, message = "Insufficient funds"});
            }
            return Ok(new {success = true, balance = Balance});
        }
     }
}