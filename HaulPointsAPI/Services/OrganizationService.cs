using HaulPointsAPI.Data;
using HaulPointsAPI.Models.Entities;
using HaulPointsAPI.Models.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System;

namespace HaulPointsAPI.Services
{
    public enum newOrgResult 
    {
        Exists,
        Success,
        Failed
    }
    public enum AssignDriverToOrganizationResult {
        DriverNotFound,
        OrganizationNotFound,
        UserAlreadyInOrganization,
        Success
    }
    public class OrganizationService
    {
        private readonly HaulPointsDbContext _context;
        public OrganizationService(HaulPointsDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Organization>> GetOrgs()
        {
            var organizations = await _context.Organizations
                .OrderBy(o => o.Name)
                .ToListAsync();

            return organizations;
        }
        public async Task<(newOrgResult Result, Organization? Org)> AddOrganization(NewOrgDTO nOrg)
        {
            if (await _context.Organizations.AnyAsync(o => o.Name == nOrg.Name))
            {
                return(Result: newOrgResult.Exists, Org: null);
            }
            var org = new Organization {
                Name = nOrg.Name,
                Description = nOrg.Description,
                LogoUrl = nOrg.LogoUrl
            };

            _context.Organizations.Add(org);
            try {
                await _context.SaveChangesAsync();
            } catch (DbUpdateException)
            {
                return(Result: newOrgResult.Failed, Org: null);
            }
            return(Result: newOrgResult.Success, Org: org);
        }
        public async Task<AssignDriverToOrganizationResult> AddDriverToOrganization(int userId, int organizationId)
        {
            var driver = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if(driver == null)
            {
                return AssignDriverToOrganizationResult.DriverNotFound;
            }
            if(driver.OrganizationId != null) 
            {
                return AssignDriverToOrganizationResult.UserAlreadyInOrganization;
            }
            if(await _context.Organizations.FirstOrDefaultAsync(o => o.Id == organizationId) == null)
            {
                return AssignDriverToOrganizationResult.OrganizationNotFound;
            }
            driver.OrganizationId = organizationId;
            await _context.SaveChangesAsync();
            return AssignDriverToOrganizationResult.Success;
        }
    }
}