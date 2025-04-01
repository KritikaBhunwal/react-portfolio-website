// PixelPopBannerNoButton.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/pixelPopBannerNoButton.css";

function PixelPopBannerNoButton({
  heading = "PixelPop Studio",
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
    <div className="pixelpop-nobanner">
      {/* Custom heading */}
      <h1 className="nobanner-title">{heading}</h1>

      {/* Console Image with upDown motion */}
      <img
        src="/pps-image-console.png"
        alt="Gaming Console"
        className="nobanner-console"
      />

      {/* Paragraph text if desired */}
      {showParagraph && (
        <p className="playgame-prompt">
          Relive the Nostalgia of Old School Arcade Games
        </p>
      )}

      {/* No button in this component! */}

      {/* Custom Cursor with a subtle pulse */}
      <div
        className="playcustom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </div>
  );
}

PixelPopBannerNoButton.propTypes = {
  heading: PropTypes.string,
  showParagraph: PropTypes.bool,
};

export default PixelPopBannerNoButton;
