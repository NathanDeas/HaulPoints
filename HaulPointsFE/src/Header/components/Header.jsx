import {react} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <div className='header-container'>
      <h1>HaulPoints</h1>
      <nav>
        <NavLink to="/Login">Login</NavLink>
      </nav>
    </div>

    );
}

export default Header;