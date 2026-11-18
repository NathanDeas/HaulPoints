using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public class Reward
    {
        // Primary Key
        public int RewardID {get; set;}

        // Forign Key
        public int? OrganizationID {get; set;}
        // Navigation Property
        public Organization? Organization {get; set;}

        public required string Name {get; set;}

        public required string Category {get; set;}

        public string? Description {get; set;}

        public string? ProductImage {get; set;}

        public int PointCost {get; set;}

        public bool Active {get; set;}

        public DateTime CreatedAt {get; set;}
    }
}