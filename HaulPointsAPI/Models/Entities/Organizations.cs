using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public class Organization
    {

        public int Id { get; set; }

        public string Name {get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string? LogoUrl { get; set; }
        
        public DateOnly CreatedAt { get; set; }

        public ICollection<User> Users { get; set; } = new List<User>();
    }
}