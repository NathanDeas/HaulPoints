using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Models;

namespace HaulPointsAPI.Data
{
    public class HaulPointsDbContext : DbContext
    {
        public HaulPointsDbContext(DbContextOptions<HaulPointsDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Organization> Organizations { get; set; }
    }
}