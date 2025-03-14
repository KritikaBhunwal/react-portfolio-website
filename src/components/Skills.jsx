import React from "react";
import { motion } from "framer-motion";
import { 
  FaFigma, 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaPaintBrush, 
  FaApple 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiAdobeillustrator, 
  SiAdobeaftereffects, 
  SiAdobephotoshop 
} from "react-icons/si";
import "../styles/skills.css";

const softwareSkills = [
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Illustrator", icon: <SiAdobeillustrator /> },
  { name: "After Effects", icon: <SiAdobeaftereffects /> },
  { name: "Procreate", icon: <FaPaintBrush /> },
  { name: "Keynote", icon: <FaApple /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> }
];

const interpersonalSkills = [
  "Communication",
  "Research",
  "Presentation",
  "Leadership",
  "Teamwork",
  "Empathy",
  "Adaptability",
  "Creative Thinking",
  "Problem Solving",
  "Growth Mindset"
];

const Skills = () => {
  return (
    <div className="skills-container">
      {/* Software Skills Section */}
      <div className="skills-section">
        {/* <h2>Software Proficiency</h2> */}
        <div className="software-grid">
          {softwareSkills.map((software, index) => (
            <motion.a
              key={index}
              href="#"
              className="software-card"
              // whileHover={{ scale: 1.1, color: "#9990BB" }}
              transition={{ duration: 0.3 }}
            >
              <div className="software-icon">{software.icon}</div>
              <p>{software.name}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Interpersonal Skills Section */}
      <div className="skills-section">
        {/* <h2>Interpersonal Skills</h2> */}
        <div className="interpersonal-skills">
          {interpersonalSkills.map((skill, index) => (
            <span key={index} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
