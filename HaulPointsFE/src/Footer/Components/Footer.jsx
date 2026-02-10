import '../css/Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() 
{
 return(
    <div className='footer-container'>
        <div className='footer-content-wrapper'>
            <div className='footer-content'>
                <div className='footer-tag'>
                    <h2>Start Earning More Today</h2>
                    <NavLink className="register-link" to="/register">Sign Up Here</NavLink>
                </div>
                <nav className='footer-nav-links'>
                    <NavLink to="/">Home</NavLink>
                    <span>Parntners</span>
                    <span>Contact</span>
                    <span>Frequently Asked Questions</span>
                    <span>About</span>
                    <NavLink to="/login">Login</NavLink>

                </nav>
            </div> 
            <img src='./HaulPointsLogo-White.png' className='footer-logo'/>
        </div>
    </div>
 )
}

export default Footer