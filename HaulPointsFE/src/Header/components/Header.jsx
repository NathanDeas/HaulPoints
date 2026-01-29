import {react} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import { useInView } from 'react-intersection-observer';

function Header({headerActionRef}) {

  return (
    <div ref = {headerActionRef} className="header-container">
      <div className='header-content-wrapper'>
        <img src='./HaulPointsLogo-White.png' className='logo'></img>
        <nav className='nav-buttons'>
          <span className="nav-link">About</span>
          <span className="nav-link">Partners</span>
          <span className="nav-link">FAQ</span>
          <span className="nav-link">Contact</span>
          <NavLink className="nav-link to-login" to="/login">Login</NavLink>
        </nav>
      </div>
    </div>

    );
}

export default Header;