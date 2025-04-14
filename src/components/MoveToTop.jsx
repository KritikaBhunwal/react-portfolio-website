import React from "react";
import logo from "/logo.svg"; // Adjust the relative path as needed
import "../styles/moveToTop.css";
import PropTypes from "prop-types";

const ScrollToTop = ({
  iconSize = 50, // Default icon size in pixels
  textSize,      // Optional: if not provided, will be computed
  text = "Click here to scroll to the top of the page!",
  gap = 28,      // Extra space between the icon and the rotating text
}) => {
  // Calculate radius based on the icon size and gap
  const radius = iconSize + gap;
  // Set the viewBox size to fit the icon and the extra gap on all sides
  const viewBoxSize = iconSize + gap * 2;
  // Calculate the center coordinate within the viewBox
  const centerCoord = iconSize / 2 + gap;
  // Construct the circular path for the rotating text
  const d = `M${centerCoord},${centerCoord} m-${radius},0 a${radius},${radius} 0 1,1 ${
    radius * 2
  },0 a${radius},${radius} 0 1,1 -${radius * 2},0`;

  // If no textSize is provided, default it based on the icon size (e.g., half)
  const computedTextSize = textSize || iconSize / 2;

  // Function to smoothly scroll to the top of the page
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="moveToTop-button"
      onClick={handleScrollTop}
      style={{ cursor: "pointer" }}
    >
      <div className="icon-wrapper" style={{ width: iconSize, height: iconSize }}>
        <img
          src={logo}
          alt="Scroll To Top"
          className="logo"
          style={{ width: "100%", height: "100%", filter: "invert(1)" }}
        />
        <svg
          className="rotating-text-svg"
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        >
          <defs>
            {/* Use a unique path id for this instance */}
            <path id="circlePathScrollToTop" d={d} />
          </defs>
          <text fontSize={computedTextSize} fill="#2d2d2d">
            <textPath href="#circlePathScrollToTop">{text}</textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

ScrollToTop.propTypes = {
  iconSize: PropTypes.number,
  textSize: PropTypes.number,
  text: PropTypes.string,
  gap: PropTypes.number,
};

export default ScrollToTop;
