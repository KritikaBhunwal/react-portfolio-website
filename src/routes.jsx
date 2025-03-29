import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
// import UIUXIndex from "./pages/uiux/UIUX";
// import JavaScriptGames from "./pages/uiux/JavaScriptGames";
// import Hellow from "./pages/uiux/Hellow";
// import SmokingGun from "./pages/uiux/SmokingGun";
// import GraphicsIndex from "./pages/graphics/Graphics";
// import LogoDesign from "./pages/graphics/LogoDesign";
// import Fashion from "./pages/fashion/Fashion";
// import About from "./pages/about/About";

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
        {/* <Route path="/uiux" element={<UIUXIndex />} />
        <Route path="/graphics" element={<GraphicsIndex />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/about" element={<About />} /> */}

        {/* Standalone subpages */}
        {/* <Route path="/uiux/javascript-games" element={<JavaScriptGames />} />
        <Route path="/uiux/hellow" element={<Hellow />} />
        <Route path="/uiux/smoking-gun" element={<SmokingGun />} />
        <Route path="/graphics/logo-design" element={<LogoDesign />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
