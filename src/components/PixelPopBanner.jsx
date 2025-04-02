// PixelPopBanner.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pixelPopBanner.css";
import PropTypes from "prop-types";

function PixelPopBanner({
  heading = "PixelPop Studio", // default heading
  showButton = true,
  showParagraph = true,
}) {
  // State for cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Effect to track mouse movement and update cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pixelpop-banner">
      <h1 className="banner-title">{heading}</h1>

      <img
        src="/pps-image-console.png"
        alt="Gaming Console"
        className="banner-console"
      />

      {showParagraph && (
        <p className="game-prompt">
          Relive the Nostalgia of Old School Arcade Games
        </p>
      )}

      {showButton && (
        <Link to="/uiux/javascript-games">
          <button className="play-button">Play Now</button>
        </Link>
      )}

      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </div>
  );
}

PixelPopBanner.propTypes = {
  heading: PropTypes.string,
  showButton: PropTypes.bool,
  showParagraph: PropTypes.bool,
};

export default PixelPopBanner;
