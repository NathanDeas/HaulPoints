import { useState } from "react";
import "../css/SharedFormStyle.css"
import { NavLink } from 'react-router-dom';
import { RegisterUser } from "../api/UsersApi";




function RegisterForm ({redirectToLogin}) {
        const [Username, setUsername] = useState("");
        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");
        const [UsernameErrorMessage, setUsernameErrorMessage] = useState([]);
        const [PasswordErrorMessage, setPasswordErrorMessage] = useState([]);
        const [EmailErrorMessage, setEmailErrorMessage] = useState("");
        const [ViewPassword, setViewPassword] = useState(false);
        const [Loading, setLoading] = useState(false);
        const [Message, setMessage] = useState("");


        {/* Input validation Functions for Username, Email, and Password */}
        function verifyUsername(uName) {
            const errorArray = [];
            if(uName.length < 6) {
                errorArray.push("At least 6 characters")
            }
            if(!/^[a-zA-Z0-9._-]+$/.test(uName))
            {
                errorArray.push("Allowed Special Character . _ -");
            }
            if(!/[a-zA-Z]/.test(uName))
            {
                errorArray.push("Must contain a letter");
            }
            if(/\s/.test(uName)) {
                errorArray.push("Cannot contain spaces")
            }
            setUsernameErrorMessage(errorArray)
            return (errorArray.length == 0)
        }
        function verifyEmail(email) {
            if (!/^\S+@\S+\.\S+$/.test(email))
            {
                setEmailErrorMessage("Please enter valid email address")
                return false;
            }
            else {
                setEmailErrorMessage("");
                return true;
            }
        }
        function verifyPassword(pass) {
            const errorArray = [];
            if (pass.length < 8) {
                errorArray.push("At least 8 characters")
            }

            if (!/[0-9]/.test(pass))
            {
                errorArray.push("At least one number")
            }

            if(!/[A-Z]/.test(pass)) {
                errorArray.push("At least one UPPERCASE letter")
            }

            if(!/[a-z]/.test(pass)) {
                errorArray.push("At least one lowercase letter")
            }
            if(/\s/.test(pass)) {
                errorArray.push("Cannot contain spaces")
            }
            if (!/[#?!@$%^&*-]/.test(pass)) {
                errorArray.push("At least one special character")
            }
            setPasswordErrorMessage(errorArray)
            return (errorArray.length == 0) 

        }
        // Simulates a delay for loading state demonstration, REMOVE IN PRODUCTION
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        {/* Handle form submission and trigger validation */}
        const  HandleLogin = async (e) => {
            e.preventDefault();
            setLoading(true);
            await sleep(2000);
            const passwordResult = verifyPassword(Password);
            const emailResult = verifyEmail(Email);
            const usernameResult = verifyUsername(Username);
            if (!passwordResult || !usernameResult || !emailResult)  {
                setLoading(false)
                return;
            }

            const registerInfo = {
                username: Username,
                password: Password,
                email: Email
            }
            try {
                setLoading(true)
                const response = await RegisterUser(registerInfo)
                setMessage(response.message)
                // return if successful registration
                // Otherwise user typed existing username/email
                if (response.success){
                    await sleep(2000); // Simulate network delay for loading state demonstration, REMOVE IN PRODUCTION
                    redirectToLogin();
                    
                }
                setLoading(false);
            } catch { // Unexpected error
                setMessage("ERROR: unable to complete request at this time")
                setLoading(false);
            }
        }


    return (<>
        <div className="form-container">
            <h1>Register Driver Account</h1>
            <form onSubmit={HandleLogin}>
                <input value={Username} onChange={(e) => setUsername(e.target.value)} 
                    name="username" 
                    type="text" 
                    placeholder="Username"
                    required
                    />

                <div className="validation-container">
                    {UsernameErrorMessage && (UsernameErrorMessage.map(errors => <p key={errors} className="error-list">- {errors}</p>))}
                </div>

                <input value={Email} onChange={(e) => setEmail(e.target.value)} 
                    name="email" 
                    type="email" 
                    placeholder="Email@example.com" 
                    required
                />

                <div className="validation-container">
                    {EmailErrorMessage && <p className="e-error">{EmailErrorMessage}</p>}
                </div>
                <div className="password-field">
                    <input value={Password} onChange={ (e) => setPassword(e.target.value) }
                        name="password" 
                        type={ViewPassword ? "text" : "password"}
                        placeholder="Password" 
                        required
                    />
                    <button onClick={() => setViewPassword(!ViewPassword)} 
                        type="button" 
                        className="show-button"
                        >
                        {ViewPassword && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="#b3b3b3" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
                            </svg>
                        )}

                        {!ViewPassword && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 640 640">
                                <path fill="#b3b3b3" d="M73 39.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6-.1 34l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1c-47.1-43.7-111.8-80.6-192.6-80.6c-56.8 0-105.6 18.2-146 44.2zm163.5 163.6C260 185.9 288.9 176 320 176c79.5 0 144 64.5 144 144c0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7c-13.7-51.2-66.4-81.6-117.6-67.9c-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zm120.8 256.4c-11.9 3.2-24.4 4.9-37.3 4.9c-79.5 0-144-64.5-144-144c0-12.9 1.7-25.4 4.9-37.3l-79.5-79.5C68.8 240 46.4 279 34.5 307.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1c47.1 43.7 111.8 80.6 192.6 80.6c37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"/>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="validation-container">
                    {PasswordErrorMessage && (PasswordErrorMessage.map(errors => <p key={errors} className="error-list">- {errors}</p>))}
                </div>
                <div className="validation-container">
                    {Message && <p className="e-error">{Message}</p>}
                </div>

                <button className="form-button" type="submit" value="submit" disabled={Loading}>
                    {Loading ? 
                    <svg className="auth-load" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path 
                            d="M13.5 8.5A.5.5 0 0 1 13 8c0-2.757-2.243-5-5-5S3 5.243 3 8a.5.5 0 0 1-1 0c0-3.309 2.691-6 6-6s6 2.691 6 6a.5.5 0 0 1-.5.5"
                            stroke="hsl(0, 0%, 95%)"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    </svg>

                    : 
                    "Sign Up Now!"}
                </button>
                <div className="form-divider"><hr/><p>Already have an account?</p><hr/></div>
                <NavLink className="form-button form-button-secondary" to="/login">Login Here</NavLink>
            </form>

        </div>
    </>)
}

export default RegisterForm



