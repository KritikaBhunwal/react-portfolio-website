import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UIUX from './pages/uiux/UIUX';
import Graphics from './pages/graphics/Graphics';
import Fashion from './pages/Fashion';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-ux" element={<UIUX />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
