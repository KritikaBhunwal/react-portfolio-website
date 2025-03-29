import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
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
              to="/uiux"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              UI/UX
            </NavLink>
            <div className="dropdown-menu">
              <NavLink
                to="/uiux/javascript-games"
                onClick={closeMobileMenu}
                className="dropdown-item"
              >
                JavaScript Games
              </NavLink>
              <NavLink
                to="/uiux/hellow"
                onClick={closeMobileMenu}
                className="dropdown-item"
              >
                Hellow
              </NavLink>
              <NavLink
                to="/uiux/smoking-gun"
                onClick={closeMobileMenu}
                className="dropdown-item"
              >
                Smoking Gun
              </NavLink>
            </div>
          </div>

          {/* GRAPHICS Dropdown */}
          <div className="nav-dropdown">
            <NavLink
              to="/graphics"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              GRAPHICS
            </NavLink>
            <div className="dropdown-menu">
              <NavLink
                to="/graphics/logo-design"
                onClick={closeMobileMenu}
                className="dropdown-item"
              >
                Logo Design
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/fashion"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            FASHION
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ABOUT
          </NavLink>
        </div>

        {/* Hamburger Icon */}
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
          <button
            className="close-icon"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink to="/uiux" onClick={closeMobileMenu} className="nav-link">
            UI/UX
          </NavLink>
          <NavLink
            to="/uiux/javascript-games"
            onClick={closeMobileMenu}
            className="dropdown-link"
          >
            JavaScript Games
          </NavLink>
          <NavLink
            to="/uiux/hellow"
            onClick={closeMobileMenu}
            className="dropdown-link"
          >
            Hellow
          </NavLink>
          <NavLink
            to="/uiux/smoking-gun"
            onClick={closeMobileMenu}
            className="dropdown-link"
          >
            Smoking Gun
          </NavLink>
          <NavLink
            to="/graphics"
            onClick={closeMobileMenu}
            className="nav-link"
          >
            Graphics
          </NavLink>
          <NavLink
            to="/graphics/logo-design"
            onClick={closeMobileMenu}
            className="dropdown-link"
          >
            Logo Design
          </NavLink>
          <NavLink to="/fashion" onClick={closeMobileMenu} className="nav-link">
            Fashion
          </NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className="nav-link">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
