using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public class Organization
    {
        // Primary Key
        public int OrganizationId { get; set; }

        public string Name {get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string? LogoUrl { get; set; }
        
        public DateTime CreatedAt { get; set; }

        // Navigation Properties 
        public ICollection<User> Users { get; set; } = new List<User>();
        public ICollection<Reward> Rewards { get; set; } = new List<Reward>();
        public ICollection<Incentive> Incentives { get; set; } = new List<Incentive>();
    }
}