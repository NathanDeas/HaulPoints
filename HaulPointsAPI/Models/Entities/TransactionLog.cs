using HaulPointsAPI.Configurations;

namespace HaulPointsAPI.Models.Entities
{
    public enum PointChangeReasonEnum
    {
        IncentiveEarned,
        PointsRedemption,
        AdminChange,
        LeftOrganization
    }
    public class Transaction
    {
        // Primary Key
        public int TransactionID { get; set; }

        // Forign Key
        public int UserID { get; set; }
        // Navigation Property
        public User User { get; set; }

        // Only plan to use for filtering, No navigation needed for now
        public int OrganizationID { get; set; }

        public int? IncentiveID { get; set; }

        public int? RewardID { get; set; }

        public int PointChange { get; set; }

        public PointChangeReasonEnum Reason { get; set; }

        public string? Description { get; set; }

        public DateTime TimeStamp { get; set; }
    }
}