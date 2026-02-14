import "../css/banner.css"
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";


function Banner() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const coinref = useRef(null)
    useEffect(() => {
        for (let i = 0; i < 8; i++) {
            const token = document.createElement("img")
            token.src = "/HaulPointsToken.png"
            token.className = "coin-background"
            token.alt = "Animated Haul Points Token"
            token.style.left = `${getRandomInt(0, 100)}%`
            token.style.width = `${getRandomInt(15, 50)}px`
            token.style.animationDuration = `${getRandomInt(20, 30)}s`
            token.style.animationDelay = `${getRandomInt(3, 10)}s`
            coinref.current.appendChild(token);
        }
    },[]);
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
            <div className="falling-coins" ref={coinref}>

            </div>
        </div>
    )
}
export default Banner