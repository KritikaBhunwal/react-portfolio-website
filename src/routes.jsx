// src/routes.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import UIUXIndex from "./pages/uiux/UIUX"; // Main UI/UX page (with subpages inside the folder)
import GraphicsIndex from "./pages/graphics/Graphics"; // Main Graphics page (with subpages)
import Fashion from "./pages/fashion/Fashion";
import About from "./pages/about/About";

// Import global components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uiux/*" element={<UIUXIndex />} />
        <Route path="/graphics/*" element={<GraphicsIndex />} />
        <Route path="/fashion/*" element={<Fashion />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
