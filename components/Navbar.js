/* import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <input type="checkbox" id="menu" className="switch-input" checked={isMenuOpen} onChange={handleMenuClick} />
      <ul id="menu_1" className={`topmenu_1 ${isMenuOpen ? 'open' : ''}`}>
        <li className="switch"><label onClick={handleMenuClick} htmlFor="menu"></label></li>
        <li className="topmenu_1"><a href="#index.html">Inicio</a></li>
        <li className="topmenu_1"><a href="#index.html">Vinculo 2</a></li>
        <li className="topmenu_1"><a href="#index.html">Vinculo 3</a></li>
        <li className="topmenu_1"><a href="#index.html">Contacto</a></li>
      </ul>
      <hr />
    </>
  );
};

export default Navbar;
