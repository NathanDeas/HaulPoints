import React, {useState} from "react";
import { LoginUser } from "../api/UsersApi";
import "../css/LoginForm.css"
import { NavLink } from 'react-router-dom';

function LoginForm({userInfo}) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");

    const HandleLogin = async (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        const loginInfo = {
            username: Username,
            password: Password
        }
        console.log(loginInfo);
        try{
            const response = await LoginUser(loginInfo);
            console.log(response)
            console.log(response.token)
            setMessage(response.response) 
            userInfo(response.token)
        }   

        catch(err) {
            setMessage(err.message);
            console.log(err.message)
        }
    } 


    return (
        <div className="form-container">
            <h1>Sign In</h1>
            <form onSubmit={HandleLogin}>
                <input value={Username} onChange={(e) => setUsername(e.target.value)} 
                name="username" type="text" placeholder="Username" required/>

                <input value={Password} onChange={(e) => setPassword(e.target.value)} 
                name="password" type="password" placeholder="Password" required/>
                {Message && <p className="response-message">{Message}</p>}
                <button className="form-button" type="submit" value="submit">Login</button>
            </form>

            <div className="form-divider"><hr/><p>Don't have an account yet?</p><hr/></div>
            <NavLink className="form-button" to="/register">Register Here</NavLink>
        </div>
    );
}

export default LoginForm;