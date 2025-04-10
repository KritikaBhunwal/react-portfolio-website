import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CareerIndex from "./pages/career/ProjectsJourney";
import About from "./pages/about/About";

// Subpages under career
import UIUXIndex from "./pages/career/uiux/UIUX";
import Hellow from "./pages/career/uiux/Hellow"; // New subpage for UIUXIndex
import Portfolio from "./pages/career/uiux/Portfolio"; // New subpage for UIUXIndex
import FrontEndIndex from "./pages/career/front-end/JavaScriptGames";
import GraphicsIndex from "./pages/career/graphics/Graphics";
import FashionIndex from "./pages/career/fashion/Fashion";

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
        <Route path="/career/uiux/UIUX" element={<UIUXIndex />} />
        <Route path="/career/fashion/Fashion" element={<FashionIndex />} />
        <Route path="/career/graphics/Graphics" element={<GraphicsIndex />} />
        <Route path="/career/front-end/JavaScriptGames" element={<FrontEndIndex />} />
        
        {/* Nested routes for UI/UX projects */}
        <Route path="/career/uiux">
          <Route index element={<UIUXIndex />} />
          {/* The Hellow subpage will be rendered within the Outlet in UIUXIndex */}
          <Route path="Hellow" element={<Hellow />} />
          <Route path="Portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
