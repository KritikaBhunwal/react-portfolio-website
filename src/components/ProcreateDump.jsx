import React, { useState } from "react";
import "../styles/ProcreateDump.css";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Manually imported ProcreateDump1.jpg to ProcreateDump50.jpg
import ProcreateDump1 from "/ProcreateDump1.jpg";
import ProcreateDump2 from "/ProcreateDump2.jpg";
import ProcreateDump3 from "/ProcreateDump3.jpg";
import ProcreateDump4 from "/ProcreateDump4.jpg";
import ProcreateDump5 from "/ProcreateDump5.jpg";
import ProcreateDump6 from "/ProcreateDump6.jpg";
import ProcreateDump7 from "/ProcreateDump7.jpg";
import ProcreateDump8 from "/ProcreateDump8.jpg";
import ProcreateDump9 from "/ProcreateDump9.jpg";
import ProcreateDump10 from "/ProcreateDump10.jpg";
import ProcreateDump11 from "/ProcreateDump11.jpg";
import ProcreateDump12 from "/ProcreateDump12.jpg";
import ProcreateDump13 from "/ProcreateDump13.jpg";
import ProcreateDump14 from "/ProcreateDump14.jpg";
import ProcreateDump15 from "/ProcreateDump15.jpg";
import ProcreateDump16 from "/ProcreateDump16.jpg";
import ProcreateDump17 from "/ProcreateDump17.jpg";
import ProcreateDump18 from "/ProcreateDump18.jpg";
import ProcreateDump19 from "/ProcreateDump19.jpg";
import ProcreateDump20 from "/ProcreateDump20.jpg";
import ProcreateDump21 from "/ProcreateDump21.jpg";
import ProcreateDump22 from "/ProcreateDump22.jpg";
import ProcreateDump23 from "/ProcreateDump23.jpg";
import ProcreateDump24 from "/ProcreateDump24.jpg";
import ProcreateDump25 from "/ProcreateDump25.jpg";
import ProcreateDump26 from "/ProcreateDump26.jpg";
import ProcreateDump27 from "/ProcreateDump27.jpg";
import ProcreateDump28 from "/ProcreateDump28.jpg";
import ProcreateDump29 from "/ProcreateDump29.jpg";
import ProcreateDump30 from "/ProcreateDump30.jpg";
import ProcreateDump31 from "/ProcreateDump31.jpg";
import ProcreateDump32 from "/ProcreateDump32.jpg";
import ProcreateDump33 from "/ProcreateDump33.jpg";
import ProcreateDump34 from "/ProcreateDump34.jpg";
import ProcreateDump35 from "/ProcreateDump35.jpg";
import ProcreateDump36 from "/ProcreateDump36.jpg";
import ProcreateDump37 from "/ProcreateDump37.jpg";
import ProcreateDump38 from "/ProcreateDump38.jpg";
import ProcreateDump39 from "/ProcreateDump39.jpg";
import ProcreateDump40 from "/ProcreateDump40.jpg";
import ProcreateDump41 from "/ProcreateDump41.jpg";
import ProcreateDump42 from "/ProcreateDump42.jpg";
import ProcreateDump43 from "/ProcreateDump43.jpg";
import ProcreateDump44 from "/ProcreateDump44.jpg";
import ProcreateDump45 from "/ProcreateDump45.jpg";
import ProcreateDump46 from "/ProcreateDump46.jpg";
import ProcreateDump47 from "/ProcreateDump47.jpg";
import ProcreateDump48 from "/ProcreateDump48.jpg";
import ProcreateDump49 from "/ProcreateDump49.jpg";
import ProcreateDump50 from "/ProcreateDump50.jpg";
// Extend up to ProcreateDump50...

const images = [
  ProcreateDump1, ProcreateDump2, ProcreateDump3, ProcreateDump4, ProcreateDump5, ProcreateDump6, ProcreateDump7, ProcreateDump8, ProcreateDump9, ProcreateDump10,
  ProcreateDump11, ProcreateDump12, ProcreateDump13, ProcreateDump14, ProcreateDump15, ProcreateDump16, ProcreateDump17, ProcreateDump18, ProcreateDump19, ProcreateDump20,
  ProcreateDump21, ProcreateDump22, ProcreateDump23, ProcreateDump24, ProcreateDump25, ProcreateDump26, ProcreateDump27, ProcreateDump28, ProcreateDump29, ProcreateDump30,
  ProcreateDump31, ProcreateDump32, ProcreateDump33, ProcreateDump34, ProcreateDump35,
  ProcreateDump36, ProcreateDump37, ProcreateDump38, ProcreateDump39, ProcreateDump40,
  ProcreateDump41, ProcreateDump42, ProcreateDump43, ProcreateDump44, ProcreateDump45,
  ProcreateDump46, ProcreateDump47, ProcreateDump48, ProcreateDump49, ProcreateDump50,
  // Add remaining images up to 50...
];

const ProcreateDump = () => {
  const [view, setView] = useState("marquee"); // "marquee", "masonry", "fullView"
  const [fullViewIndex, setFullViewIndex] = useState(null);

  const openFullView = (index) => {
    setFullViewIndex(index);
    setView("fullView");
  };

  const closeFullView = () => {
    setFullViewIndex(null);
    setView("masonry");
  };

  return (
    <div className="procreate-dump">
      {/* Marquee Section (Initial View) */}
      {view === "marquee" && (
        <div className="marquee-container">
          <div className="marquee">
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} alt={`Artwork ${index + 1}`} className="marquee-image"
                onClick={() => setView("masonry")} />
            ))}
          </div>
        </div>
      )}

      {/* Expanded Masonry View */}
      {view === "masonry" && (
        <div className="expanded-view">
          <button className="close-masonry" onClick={() => setView("marquee")}>✖</button>
          <div className="masonry-gallery">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Artwork ${index + 1}`} className="masonry-image"
                onClick={() => openFullView(index)} />
            ))}
          </div>
        </div>
      )}

      {/* Full-Screen Image Viewer */}
      {view === "fullView" && fullViewIndex !== null && (
        <div className="full-view-overlay">
          <button className="close-btn" onClick={closeFullView}>✖</button>
          <button className="prev-btn" onClick={() => setFullViewIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}>❮</button>
          <img src={images[fullViewIndex]} alt={`Artwork ${fullViewIndex + 1}`} className="full-view-image" />
          <button className="next-btn" onClick={() => setFullViewIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}>❯</button>
        </div>
      )}
    </div>
  );
};

export default ProcreateDump;
