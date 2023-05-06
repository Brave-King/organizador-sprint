/*
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/geeks">Geeks</a>
        </li>
        <li>
          <a href="/acerca-de">Acerca de</a>
        </li>
        <li>
          <a href="/actividades">Actividades</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/eventos">Eventos</a>
        </li>
        <li>
          <a href="/faqs">FAQs</a>
        </li>
        <li>
          <a href="/ingresar">Ingresar</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/
import React, { useState } from 'react';
/*
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
*/
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <ul className={isActive ? 'active' : null}>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/geeks">Geeks</a>
        </li>
        <li>
          <a href="/about">Acerca de</a>
        </li>
        <li>
          <a href="/actividades">Actividades</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/eventos">Eventos</a>
        </li>
        <li>
          <a href="/faqs">FAQs</a>
        </li>
        <li>
          <a href="/Contact">Contactanos</a>
        </li>
        <li>
          <a href="/Newsletter">Newsletter</a>
        </li>
        <li>
          <a href="/signin">Ingresar</a>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;