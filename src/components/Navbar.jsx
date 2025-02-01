// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the top left */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-menu">
          {/* Horizontal menu for Desktop/Tablet */}
          <div className="menu-horizontal">
            <NavLink 
              to="/" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
            <NavLink 
              to="/uiux" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              UI/UX
            </NavLink>
            <NavLink 
              to="/graphics" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Graphics
            </NavLink>
            <NavLink 
              to="/fashion" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Fashion
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
          </div>
          {/* Hamburger icon for Mobile */}
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu sliding panel */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <NavLink 
            to="/" 
            onClick={closeMobileMenu} 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/uiux" 
            onClick={closeMobileMenu} 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            UI/UX
          </NavLink>
          <NavLink 
            to="/graphics" 
            onClick={closeMobileMenu} 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Graphics
          </NavLink>
          <NavLink 
            to="/fashion" 
            onClick={closeMobileMenu} 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Fashion
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMobileMenu} 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
