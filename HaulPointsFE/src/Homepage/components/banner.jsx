import "../css/banner.css"
import { NavLink } from "react-router-dom";


function Banner() {
    function getRandomInt(min, max) {
        // const getRandomIntegerInclusive = (min, max) => {
        // Ensure min and max are treated as integers
        min = Math.ceil(min);
        max = Math.floor(max);
        // The formula for an inclusive range: Math.floor(Math.random() * (max - min + 1)) + min
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    function getfallingTokenStyle()
    {
        return {
            left: `${getRandomInt(0, 100)}%`,
            width: `${getRandomInt(15, 50)}px`,
            animationDuration: `${getRandomInt(5, 8)}s`,
            animationDelay: `${getRandomInt(0, 5)}s`
        }
    };
    return (
        <div className="hero-banner-container">
            <div className="hero-text">
                <h1>Rewarding the Drivers Who Keep America Moving</h1>
                <h2>Earn points for the work you already do.</h2>
                <h3>Get started today</h3>
                <NavLink className="hero-banner-register" to="/register">Sign Up Here</NavLink>
            </div>
            <div className="token-image">
                <img className="coin-front" src="/HaulPointsToken.png"/>
            </div>
            <div classname="falling-coins">
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
                <img className="coin-background" style= {getfallingTokenStyle()} src="/HaulPointsToken.png"/>
            </div>
        </div>
    )
}
export default Banner