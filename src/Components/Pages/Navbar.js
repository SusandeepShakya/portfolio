import {React, useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import { IconContext } from 'react-icons';

export const Navbar = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo'>
            <MdFingerprint className='navbar-icon' />
            My PortFolio
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes/>: <FaBars/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>About me</Link>
            </li>
            <li className='nav-item'>
              <Link to='/skill' className='nav-links'>Skills</Link>
            </li>
            <li className='nav-item'>
              <Link to='/exp' className='nav-links'>Experiences</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links'>Contact me</Link>
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
