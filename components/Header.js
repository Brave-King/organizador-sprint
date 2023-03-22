import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    
    <div className="header">
      <img src={logo} alt="Hecho en México" className="logo" />
      <h2 class="logo-text">Hecho en México</h2>
    </div>
  );
}

export default Header;
