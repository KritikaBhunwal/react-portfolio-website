import React from "react";
import { motion } from "framer-motion";
import "../styles/stats.css"; // adjust path if needed

const StatsCircles = () => {
  // We've doubled the diameters from the original code
  // so they overlap more and reflect your request.
  const circlesData = [
    {
        label: "7+ Years",
        diameter: 200, // doubled from 140
        direction: "bottom",
        // Third corner (rough equilateral arrangement)
        style: {
          left: "135px",
          top: "260px",
          // Put this circle on top
          zIndex: 2
        }
      },
    {
      label: "30+ Clients",
      diameter: 240, // doubled from 180
      direction: "left",
      // Place circle at first corner of equilateral triangle (offset applied)
      style: {
        left: "22px",
        top: "16px",
        zIndex: 1
      }
    },
    {
      label: "1500+ Creatives",
      diameter: 320, // doubled from 250 (largest circle)
      direction: "right",
      // Second corner
      style: {
        left: "300px",
        top: "28px",
        zIndex: 1
      }
    }
  ];

  // Dynamically set initial animation based on direction
  const getInitialVariant = (direction) => {
    switch (direction) {
      case "left":
        return { x: 100, opacity: 0 };
      case "right":
        return { x: -100, opacity: 0 };
      case "bottom":
        return { y: -100, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  const animateVariant = { x: 0, y: 0, opacity: 1 };
  const transitionConfig = { duration: 1.4, ease: "easeOut" };

  return (
    <div className="stats-circles-wrapper">
      <div className="stats-circles-container">
        {circlesData.map((circle, index) => (
          <motion.div
            key={index}
            className="stats-circle"
            style={{
              ...circle.style,
              width: circle.diameter,
              height: circle.diameter
            }}
            initial={getInitialVariant(circle.direction)}
            whileInView={animateVariant}
            transition={transitionConfig}
            // Ensures the animation triggers when scrolled into view
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="stats-circle-text">{circle.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsCircles;
