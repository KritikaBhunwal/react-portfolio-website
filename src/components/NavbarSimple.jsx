// src/components/NavbarSimple.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../utils/constants.jsx";
import "../styles/navbarSimple.css";
const NavbarSimple = () => {
  return (
    <nav className="navbar-simple">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/uiux"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            UI/UX
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/graphics"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Graphics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fashion"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Fashion
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSimple;
