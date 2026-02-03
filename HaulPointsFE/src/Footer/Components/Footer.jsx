import '../css/Footer.css'

function Footer() 
{
 return(
    <div className='footer-container'>
        <div className='footer-content-wrapper'>
            <div className='footer-content'>
                <div className='footer-tag'>
                    <h2>Start Earning More Today</h2>
                    <button>Sign Up Now</button>
                </div>
                <nav className='footer-nav-links'>
                    <span>Home</span>
                    <span>Parntners</span>
                    <span>Contact</span>
                    <span>Frequently Asked Questions</span>
                    <span>About</span>
                    <span>Login</span>

                </nav>
                </div> 
            <img src='./HaulPointsLogo-White.png' className='footer-logo'/>
        </div>
    </div>
 )
}

export default Footer