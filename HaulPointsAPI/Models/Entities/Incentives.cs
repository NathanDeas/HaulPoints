using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public class Incentive
    {
        //Primary Key
        public int IncentiveID {get; set;}

        public string Name {get; set;}

        //Forign Key
        public int? OrganizationID {get; set;}
        //Navigation Property
        public Organization? Organization {get; set;}

        public string Category {get; set;}

        public decimal TargetValue {get; set;}
        
        public int PointsAwarded {get; set;}

        public DateTime StartDate {get; set;}

        public DateTime? EndDate {get; set;}

        public bool Active {get; set;}

        public DateTime CreatedAt {get; set;}
    }
}