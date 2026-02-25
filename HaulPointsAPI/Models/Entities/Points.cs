using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public class Point
    {
        public int UserId { get; set; } 

        public required User User { get; set; }

        public int Balance { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}