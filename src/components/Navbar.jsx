import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // isNavbarVisible controls whether the navbar has the "hidden" class.
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const hideTimerRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // For mobile or small tablets, always show the navbar.
  //     if (window.innerWidth <= 768 || window.scrollY <= 300) {
  //       setNavbarVisible(true);
  //       if (hideTimerRef.current) {
  //         clearTimeout(hideTimerRef.current);
  //       }
  //       return;
  //     }

  //     // Clear any existing timer.
  //     if (hideTimerRef.current) {
  //       clearTimeout(hideTimerRef.current);
  //     }

  //     // Make sure the navbar is visible during scrolling.
  //     setNavbarVisible(true);

  //     // Start a 2-second timer to hide the navbar if no scroll occurs.
  //     hideTimerRef.current = setTimeout(() => {
  //       setNavbarVisible(false);
  //     }, 1000);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (hideTimerRef.current) {
  //       clearTimeout(hideTimerRef.current);
  //     }
  //   };
  // }, []);

  return (
    // Conditionally add the "hidden" class based on isNavbarVisible.
    <nav className={`navbar ${isNavbarVisible ? "" : "hidden"}`} role="navigation" aria-label="Main Navigation">
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
              JOURNEY
            </NavLink>
            <div className="dropdown-menu">
              <NavLink to="/career/uiux/UIUX" onClick={closeMobileMenu} className="dropdown-item">
                UI/UX Design
              </NavLink>
              {/* Nested submenu example (currently commented out) */}
              {/* <div className="dropdown-submenu">
                <NavLink to="/career/uiux/Hellow" onClick={closeMobileMenu} className="dropdown-subitem">
                  Hellow
                </NavLink>
                <NavLink to="/career/uiux/Portfolio" onClick={closeMobileMenu} className="dropdown-subitem">
                  Portfolio
                </NavLink>
              </div> */}
              <NavLink to="/career/graphics/Graphics" onClick={closeMobileMenu} className="dropdown-item">
                Graphic Design
              </NavLink>
              <NavLink to="/career/fashion/Fashion" onClick={closeMobileMenu} className="dropdown-item">
                Fashion Design
              </NavLink>
              {/* <NavLink to="/career/front-end/JavaScriptGames" onClick={closeMobileMenu} className="dropdown-item">
                React Games
              </NavLink> */}
            </div>
          </div>

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
          <NavLink to="/" onClick={closeMobileMenu} className="nav-link">HOME</NavLink>
          <NavLink to="/career" onClick={closeMobileMenu} className="nav-link">JOURNEY</NavLink>
          <NavLink to="/career/uiux/UIUX" onClick={closeMobileMenu} className="dropdown-link">UI/UX DESIGN</NavLink>
          <NavLink to="/career/uiux/Portfolio" onClick={closeMobileMenu} className="dropdown-sublink">1. Portfolio</NavLink>
          <NavLink to="/career/uiux/Hellow" onClick={closeMobileMenu} className="dropdown-sublink">2. Hellow</NavLink>
          <NavLink to="/career/front-end/JavaScriptGames" onClick={closeMobileMenu} className="dropdown-sublink">3. React Games</NavLink>
          <NavLink to="/career/graphics/Graphics" onClick={closeMobileMenu} className="dropdown-link">GRAPHIC DESIGN</NavLink>
          <NavLink to="/career/fashion/Fashion" onClick={closeMobileMenu} className="dropdown-link">FASHION DESIGN</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className="nav-link">ABOUT</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
