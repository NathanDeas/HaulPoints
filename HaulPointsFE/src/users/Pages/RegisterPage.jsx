import { NavLink } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import RegisterForm from "../components/RegisterForm.jsx";


function RegisterPage () {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
}

export default RegisterPage