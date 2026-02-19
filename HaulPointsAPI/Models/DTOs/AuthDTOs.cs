namespace HaulPointsAPI.Models.DTOs
{
    public class RegisterUserDTO
    {
        public string Username {get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class LoginUserDTO
    {
        public string Username {get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class UserLoginResponseDTO
    {
        public string Token { get; set; } = string.Empty;
        public string Response { get; set; } = string.Empty;
    }
}