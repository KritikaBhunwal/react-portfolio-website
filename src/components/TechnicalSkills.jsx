import React from "react";
import { motion } from "framer-motion";

import { 
  FaFigma, 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaPaintBrush, 
  // FaApple 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiAdobeillustrator,
  SiAdobeindesign, 
  SiAdobeaftereffects, 
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaudition 
} from "react-icons/si";

import "../styles/technicalskills.css";

const softwareSkills = [
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Illustrator", icon: <SiAdobeillustrator /> },
  { name: "InDesign", icon: <SiAdobeindesign /> },
  { name: "After Effects", icon: <SiAdobeaftereffects /> },
  { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
  { name: "Audition", icon: <SiAdobeaudition /> },
  { name: "Procreate", icon: <FaPaintBrush /> },
  // { name: "Keynote", icon: <FaApple /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> }
];

const TechnicalSkills = () => {
  return (
    <div className="skills-section technical-skills-section">
      <div className="software-grid">
        {softwareSkills.map((software, index) => (
          <motion.a
            key={index}
            href="#"
            className="software-card"
            transition={{ duration: 0.01 }}
          >
            <div className="software-icon">{software.icon}</div>
            <p>{software.name}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
