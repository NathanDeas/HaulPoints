import {react} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <div className="header-container">
      <img src='./HaulPointsLogo-BlackText.png' className='logo'></img>
      <nav className='nav-buttons'>
        <span className="nav-link">About</span>
        <span className="nav-link">Partners</span>
        <span className="nav-link">FAQ</span>
        <span className="nav-link">Contact</span>
        <NavLink className="link-to-login" to="/login">Login</NavLink>
      </nav>
    </div>

    );
}

export default Header;