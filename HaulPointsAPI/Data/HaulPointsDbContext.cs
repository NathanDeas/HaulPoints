using Microsoft.EntityFrameworkCore;
using HaulPointsAPI.Models.Entities;
using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Data
{
    public class HaulPointsDbContext : DbContext
    {
        public HaulPointsDbContext(DbContextOptions<HaulPointsDbContext> options) : base(options)
        {
        
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Apply all configurations of type  from the current assembly
            modelBuilder.ApplyConfigurationsFromAssembly(System.Reflection.Assembly.GetExecutingAssembly()); 
            // Call the base method to ensure any configurations from the base class are applied
            base.OnModelCreating(modelBuilder); 
        }


        public DbSet<User> Users { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<Point> Points { get; set; }
    }
}