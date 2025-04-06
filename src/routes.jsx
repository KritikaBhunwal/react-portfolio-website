import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CareerIndex from "./pages/career/Career";
import About from "./pages/about/About";


import UIUXIndex from "./pages/career/uiux/UIUX";
import FrontEndIndex from "./pages/career/front-end/JavaScriptGames";
import GraphicsIndex from "./pages/career/graphics/Graphics";
import FashionIndex from "./pages/career/fashion/Fashion";

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
        <Route path="/career" element={<CareerIndex />} />
        <Route path="/about" element={<About />} />

        {/* Subpages under career */}
        <Route path="/career/fashion/Fashion" element={<FashionIndex />} />
        <Route path="/career/graphics/Graphics" element={<GraphicsIndex />} />
        <Route path="/career/front-end/JavaScriptGames" element={<FrontEndIndex />} />
        <Route path="/career/uiux/UIUX" element={<UIUXIndex />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
