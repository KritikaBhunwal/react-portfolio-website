import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CareerIndex from "./pages/career/Career";
import About from "./pages/about/About";


import UIUXIndex from "./pages/career/uiux/UIUX";
import FrontEndIndex from "./pages/career/front-end/JavaScriptGames";
import GraphicsIndex from "./pages/career/graphics/Graphics";
import Fashion from "./pages/career/fashion/Fashion";

import Hellow from "./pages/career/uiux/Hellow";
// import SmokingGun from "./pages/uiux/SmokingGun";
// import LogoDesign from "./pages/graphics/LogoDesign";

// Shared layout
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Top-level pages */}
        <Route path="/" element={<Home />} />
        <Route path="career" element={<CareerIndex />} />
        <Route path="/about" element={<About />} />

        {/* Standalone subpages */}
        <Route path="/hellow" element={<Hellow />} />
        {/* <Route path="/uiux/smoking-gun" element={<SmokingGun />} /> */}
        {/* <Route path="/graphics/logo-design" element={<LogoDesign />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
