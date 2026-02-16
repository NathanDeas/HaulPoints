import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header({headerActionRef}) {
  const [MenuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div ref = {headerActionRef} className="header-container">
      <div className='desktop-header-content-wrapper'>
        <img src='./HaulPointsLogo-White.png' className='logo'/>
        <nav className='nav-buttons'>
          <span className="nav-link">About</span>
          <span className="nav-link">Partners</span>
          <span className="nav-link">FAQ</span>
          <span className="nav-link">Contact</span>
          <NavLink className="nav-link" to="/ddashboard">dashboard</NavLink>
          <NavLink className="nav-link to-login" to="/login">Login</NavLink>
        </nav>
      </div>



      <div className='mobile-header-content-wrapper'>
        <img src='./HaulPointsLogo-White.png' className='logo'/>
        <div className='nav-menu'>
          <button className='burger-menu' onClick={handleClick}>
            <img className='burger-menu-icon' src="./icons/menu-icon.svg" alt="burger menu icon" />
          </button>
          <div className={`menu-buttons ${MenuOpen ? 'show': ''}`}>
            <NavLink className="nav-link to-login" to="/login">Login</NavLink>
            <span className="nav-link">About</span>
            <span className="nav-link">Partners</span>
            <span className="nav-link">FAQ</span>
            <span className="nav-link">Contact</span>
            <NavLink className="nav-link" to="/ddashboard">dashboard</NavLink>
          </div>


        </div>

      </div>
    </div>

    );
}

export default Header;