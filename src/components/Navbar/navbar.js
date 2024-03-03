import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import Logo  from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  const navigate = useNavigate();

  return (
    <nav className='NavbarItem'>
         <img src={Logo} alt='logo' className='navbar-logo'/>        
          <div className='toggleNavbar' onClick={toggleNav}>
           {active ? <X className='icon' /> : <Menu className='icon' />}
          </div> 
        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/' className='nav-links'>Home</Link>
          </li>
          <div class="dropdown">
            <span>Service &#9662;</span>
            <div class="dropdown-content">
              <a href="./service" className='nav-links'>Tours</a>
              <a href="./hotel" className='nav-links'>Hotels</a>
              <a href="./booking" className='nav-links'>Booking</a>
              <a href="./activities" className='nav-links'>Activities</a>
              <a href="./service3" className='nav-links'>Flight</a>
            </div>
          </div>
          <li>
            <Link to='/destination' className='nav-links'>Destination</Link>
          </li>
          <li>
            <Link to='/blog' className='nav-links'>Blog</Link>
          </li>
          <li>
            <Link to='/dashboard' className='nav-links'>Dashboard</Link>
          </li>
          <li>
            <Link to='/about' className='nav-links'>About</Link>
          </li>
          <li>
            <Link to='/contact' className='nav-links'>Contact</Link>
          </li>
          <button className='nav-links-mobile' onClick={() => navigate("./signup")}>Signup</button>
       </ul>
       
    </nav>
  )
}

export default Navbar;