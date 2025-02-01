// src/components/Button.js

import React from "react";
import { COLORS } from "../utils/constants";

// Map the color names to our primary and secondary colors.
const colorMap = {
  slate: {
    primary: COLORS.PrimarySlate,
    secondary: COLORS.SecondarySlate,
  },
  purple: {
    primary: COLORS.PrimaryPurple,
    secondary: COLORS.SecondaryPurple,
  },
  yellow: {
    primary: COLORS.PrimaryYellow,
    secondary: COLORS.SecondaryYellow,
  },
};

const Button = ({ color = "slate", children, onClick, className = "" }) => {
  const btnColors = colorMap[color] || colorMap.slate;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded text-white ${className}`}
      style={{
        backgroundColor: btnColors.primary,
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = btnColors.secondary)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = btnColors.primary)
      }
    >
      {children}
    </button>
  );
};

export default Button;
