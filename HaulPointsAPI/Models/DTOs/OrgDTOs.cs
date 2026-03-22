namespace HaulPointsAPI.Models.DTOs {
    public class NewOrgDTO 
    {
        public string Name {get; set;} = string.Empty;
        public string Description {get; set;} = string.Empty;
        public string? LogoUrl {get; set;}
    }
}