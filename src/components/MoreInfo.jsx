import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg"; // Adjust the relative path as needed
import "../styles/MoreInfo.css";
import PropTypes from "prop-types";

const MoreInfo = ({
  iconSize = 50, // Default icon size in pixels
  textSize,      // Now optional: if not provided, will be computed
  text = "Click here to know more about me!",
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

  return (
    <div className="more-info-button">
      <Link to="/about">
        <div
          className="icon-wrapper"
          style={{ width: iconSize, height: iconSize }}
        >
          <img
            src={logo}
            alt="More Info"
            className="logo"
            style={{ width: "100%", height: "100%" }}
          />
          <svg
            className="rotating-text-svg"
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          >
            <defs>
              <path id="circlePath" d={d} />
            </defs>
            <text fontSize={computedTextSize} fill="#2d2d2d">
              <textPath href="#circlePath">{text}</textPath>
            </text>
          </svg>
        </div>
      </Link>
    </div>
  );
};

MoreInfo.propTypes = {
  iconSize: PropTypes.number,
  textSize: PropTypes.number, // truly optional
  text: PropTypes.string,
  gap: PropTypes.number,
};

export default MoreInfo;
