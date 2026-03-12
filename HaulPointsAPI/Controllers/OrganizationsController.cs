using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Data;
using HaulPointsAPI.Models.Entities;
using HaulPointsAPI.Services;
using HaulPointsAPI.Models.DTOs;



namespace HaulPointsAPI.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class OrganizationController : ControllerBase {
        private readonly HaulPointsDbContext _context; 
        private readonly OrganizationService _service; 
        public OrganizationController(HaulPointsDbContext context, OrganizationService service)
        {
            _context = context;
            _service = service;
        }
        [HttpGet("getorganizations")]
        public async Task<IActionResult> GetOrganizations()
        {
            var organizations = await _service.GetOrgs();
            return Ok(organizations);
        }
        [HttpPost("addOrganization")]
        public async Task<IActionResult> AddOrganization(NewOrgDTO nOrg)
        {
            var newOrganization = await _service.AddOrganization(nOrg);
            if(newOrganization.Result == newOrgResult.Failed)
            {
                return BadRequest(new{Result = newOrganization.Result});
            }
            if(newOrganization.Result == newOrgResult.Exists)
            {
                return Conflict(new {Result = newOrganization.Result});
            }
            return Created("", new {Result = newOrganization.Result, Info = newOrganization.Org});
        }
    }

}