using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public class Point
    {
        //Primary/Forign Key
        public int UserId { get; set; } 

        //Navigation Property
        public User? User { get; set; }

        public int Balance { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}