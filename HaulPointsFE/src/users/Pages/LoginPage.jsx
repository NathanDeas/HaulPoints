import { useNavigate } from 'react-router-dom';
import LoginForm from "../components/LoginForm.jsx";
import AuthLayout from "../components/AuthLayout.jsx";


function LoginPage() {
  let navigate = useNavigate();

  // Handles token storage and navigation based on user role
  const handleToken = (token) => {
    if (!token) {
      console.error("No token received");
      return;
    }
    localStorage.setItem("token", token);
    let claims;

    // Decode JWT token to extract claims
    try {
      claims = JSON.parse(atob(token.split('.')[1]));
    } catch {
      console.error("Invalid Token");
      navigate("/login");
      return;
    }

    // Get user role from claims
    const role = claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    // Navigate based on user role
    if (role == "Driver") {
      navigate("/ddashboard");
    }
    else if (role == "Admin") {
      navigate("/adashboard");
    }
    else {
      navigate("/");
    }
  }
  return (
    <AuthLayout> 
      <LoginForm userInfo={handleToken}/>
    </AuthLayout>
  );
}

export default LoginPage;