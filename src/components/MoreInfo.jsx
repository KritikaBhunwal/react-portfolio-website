import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg"; // adjust the relative path as needed
import "../styles/MoreInfo.css";

const MoreInfo = ({
  iconSize = 50, // default icon size in pixels
  textSize = 20, // default text size in pixels
  text = "click here to know more about me!",
  gap = 30     // extra space between the icon and the rotating text
}) => {
  // Calculate radius based on half the icon size plus the gap
  const radius = iconSize  + gap;
  // Set the viewBox size to fit the icon and the extra gap on all sides
  const viewBoxSize = iconSize + gap * 2;
  // Calculate the center coordinate of the circle within the viewBox
  const centerCoord = iconSize / 2 + gap;
  // Construct the circular path for the rotating text
  const d = `M${centerCoord},${centerCoord} m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`;

  return (
    <div className="more-info-button">
      <Link to="/about">
        <div className="icon-wrapper" style={{ width: iconSize, height: iconSize }}>
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
            <text fontSize={textSize} fill="#3d3d3d">
              <textPath href="#circlePath">{text}</textPath>
            </text>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default MoreInfo;
