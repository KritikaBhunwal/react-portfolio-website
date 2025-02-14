import React from "react";
import { motion } from "framer-motion";
import { FaFigma, FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects } from "react-icons/si";
import "../styles/skills.css";

const technicalSkills = ["Digital Design", "Programming", "Content Creation", "Research & Presentation"];
const interpersonalSkills = ["Creative Thinking", "Problem Solving", "Leadership", "Collaboration", "Networking & Marketing"];
const softwareSkills = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Illustrator", icon: <SiAdobeillustrator /> },
  { name: "After Effects", icon: <SiAdobeaftereffects /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

const Skills = () => {
  return (
    <div className="skills-container">
      {/* Technical Skills */}
      {/* <motion.div className="skills-section"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Technical Skills</h2>
        <div className="skills-list">
          {technicalSkills.map((skill, index) => (
            <motion.div key={index} className="skill-card"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      {/* Interpersonal Skills */}
      {/* <motion.div className="skills-section"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Interpersonal Skills</h2>
        <div className="skills-list">
          {interpersonalSkills.map((skill, index) => (
            <motion.div key={index} className="skill-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      {/* Software Proficiency */}
      <motion.div className="skills-section"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* <h2>Software Proficiency</h2> */}
        <div className="software-grid">
          {softwareSkills.map((software, index) => (
            <motion.div key={index} className="software-card"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {software.icon}
              <p>{software.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
