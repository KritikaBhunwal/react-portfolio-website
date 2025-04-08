import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="rotating-logo" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="menu-horizontal">
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            HOME
          </NavLink>

          {/* UI/UX Dropdown */}
          <div className="nav-dropdown">
            <NavLink
              to="/career"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              PROJECTS
            </NavLink>
            <div className="dropdown-menu">
              <NavLink to="/career/uiux/UIUX" onClick={closeMobileMenu} className="dropdown-item">
                UI/UX Design
              </NavLink>
            <div className="dropdown-menu">
              <NavLink to="/career/uiux/Hellow" onClick={closeMobileMenu} className="dropdown-item">
                Hellow
              </NavLink>
              <NavLink to="/career/uiux/SmokingGun" onClick={closeMobileMenu} className="dropdown-item">
                Smoking Gun
              </NavLink>
            </div>
              <NavLink to="/career/graphics/Graphics" onClick={closeMobileMenu} className="dropdown-item">
                Graphic Design
              </NavLink>
              <NavLink to="/career/front-end/JavaScriptGames" onClick={closeMobileMenu} className="dropdown-item">
                Front-End Development
              </NavLink>
              <NavLink to="/career/fashion/Fashion" onClick={closeMobileMenu} className="dropdown-item">
                Fashion Design
              </NavLink>
            </div>
          </div>

          <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            ABOUT
          </NavLink>
        </div>

        {/* Hamburger Toggle */}
        <button
          className={`hamburger-icon ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <NavLink to="/" onClick={closeMobileMenu} className="nav-link">Home</NavLink>
          <NavLink to="/career" onClick={closeMobileMenu} className="nav-link">Career</NavLink>
          <NavLink to="/career/uiux/javascript-games" onClick={closeMobileMenu} className="dropdown-link">UI/UX Design</NavLink>
          <NavLink to="/career/graphics/Graphics" onClick={closeMobileMenu} className="dropdown-link">Graphic Design</NavLink>
          <NavLink to="/career/front-end/JavaScriptGames" onClick={closeMobileMenu} className="dropdown-link">Front-End Development</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className="nav-link">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
