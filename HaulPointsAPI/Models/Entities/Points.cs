using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HaulPointsAPI.Models.Entities
{
    [Table("Points")]
    public class Point
    {
        [Key]
        public int UserId { get; set; }
        // Navigation property to the User entity
        public User User { get; set; }

        public int Balance { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}