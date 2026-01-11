import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import RegisterForm from "../components/RegisterForm.jsx";


function RegisterPage () {
    let navigate = useNavigate();
    // Redirects to login page after successful registration
    const handleRedirect = () => {
        navigate("/login");
    }
    return (
        <AuthLayout>
            <RegisterForm redirectToLogin = {handleRedirect} />
        </AuthLayout>
    );
}

export default RegisterPage