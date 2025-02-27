import React from "react";
import "../styles/skills.css";
import { motion } from "framer-motion";

const technicalSkills = [
  "Adobe Creative Suite", "Motion Graphics", "Storytelling", "Figma",
  "Canva", "Presentation Design", "Social Media Management",
  "Marketing and Communications", "Digital Content Creation",
  "Copywriting", "Information Architecture", "User Research",
  "Wireframing", "Prototyping", "User Flows", "UI Design",
  "UX Design", "User Testing", "Front-end Development", "VSCode", "HTML",
  "CSS", "JavaScript", "Tailwind", "React"
];


const interpersonalSkills = [
  "Teamwork", "Problem Solving", "Creative Thinking",
  "Decision Making", "Entrepreneurship", "Empathy",
  "Community Building"
];

const SkillsShowcase = () => {
  return (
    <div className="skills-container">
      {/* Interactive Heading */}
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Skill Pills */}
      <div className="skills-wrapper">
        {technicalSkills.map((skill, index) => (
          <motion.span
            key={index}
            className="skill-pill technical"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.0 }}
          >
            {skill}
          </motion.span>
        ))}
        {interpersonalSkills.map((skill, index) => (
          <motion.span
            key={index}
            className="skill-pill interpersonal"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (technicalSkills.length + index) * 0.0 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;
