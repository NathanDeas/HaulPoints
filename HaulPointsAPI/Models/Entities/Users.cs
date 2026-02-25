using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public enum RoleEnum 
    { 
        Driver, 
        Admin, 
        SuperAdmin 
    }

    public class User
    {
        public int Id { get; set; }

        public string Username {get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PasswordHash { get; set; } = string.Empty;
        
        public RoleEnum Role { get; set; } = RoleEnum.Driver;
        
        // Nullable foreign key
        public int? OrganizationId {get; set; }

        // Navigation property
        public Organization? Organization { get; set; }

        public DateTime CreatedAt { get; set; }

        public bool Active { get; set; } = false;

        public Point? Point { get; set; }
    }
}