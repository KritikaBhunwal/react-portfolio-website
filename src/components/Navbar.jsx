import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";  // For the profile icon

const Navbar = () => {
  // State to handle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="text-white font-bold text-2xl">
        <Link to="/">MyPortfolio</Link>
      </div>

      {/* Mobile hamburger menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          {menuOpen ? "X" : "☰"} {/* Toggle hamburger menu */}
        </button>
      </div>

      {/* Menu in desktop view */}
      <div className={`lg:flex space-x-8 ${menuOpen ? "block" : "hidden"} lg:block`}>
        {/* Menu options */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-8">
          <Link to="/ui-ux" className="text-white py-2 px-4 rounded-md bg-[#587d6d] hover:bg-[#3a5f4d]">
            UI/UX
          </Link>
          <Link to="/graphics" className="text-white py-2 px-4 rounded-md bg-[#587d6d] hover:bg-[#3a5f4d]">
            Graphics
          </Link>
          <Link to="/fashion" className="text-white py-2 px-4 rounded-md bg-[#587d6d] hover:bg-[#3a5f4d]">
            Fashion
          </Link>
        </div>

        {/* Profile icon on the right */}
        <div className="flex items-center">
          <Link to="/profile">
            <FaUserCircle className="text-white text-3xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
