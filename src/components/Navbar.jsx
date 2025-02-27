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
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="rotating-logo" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="menu-horizontal">
          <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>
          <NavLink to="/uiux" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>UI/UX</NavLink>
          <NavLink to="/graphics" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>GRAPHICS</NavLink>
          <NavLink to="/fashion" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>FASHION</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ABOUT</NavLink>
        </div>

        {/* Hamburger / Close Icon */}
        <div className={`hamburger-icon ${mobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {/* Close Icon */}
          <div className="close-icon" onClick={closeMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/uiux" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>UI/UX</NavLink>
          <NavLink to="/graphics" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Graphics</NavLink>
          <NavLink to="/fashion" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Fashion</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
