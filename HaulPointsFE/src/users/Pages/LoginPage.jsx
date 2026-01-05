import "../css/LoginPage.css"
import { NavLink } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      <h1>HaulPoints</h1>
      <NavLink to="/">Home</NavLink>
      <h1>Login Page</h1>
      <p>Dont have an account yet <NavLink to="/register"> Register Here </NavLink></p>
    </div>
  );
}

export default LoginPage;