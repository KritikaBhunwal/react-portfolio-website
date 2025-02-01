// src/routes.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import UIUXIndex from "./pages/UIUX/UIUX"; // Main UI/UX page (with subpages inside the folder)
import GraphicsIndex from "./pages/Graphics/Graphics"; // Main Graphics page (with subpages)
import Fashion from "./pages/Fashion";
import About from "./pages/About";

// Import global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uiux/*" element={<UIUXIndex />} />
        <Route path="/graphics/*" element={<GraphicsIndex />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
