import React from 'react';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className='navbar-outer'>
      <div className='navbar-inner'>
        <div className='logo'>CRYPTO<span className='logo-color'>SCOPE</span></div>
        <div className='navbar-btns'>
        <button className='navbar-btn cyber-button'>Login</button>
        <button className='navbar-btn cyber-button'>Signup</button>

        </div>

      </div>
    
    </div>
  );
}

export default NavBar;