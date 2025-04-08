import React from "react";
import { motion } from "framer-motion";

/* The same icon imports as before */
import { 
  FaFigma, 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaPaintBrush 
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

/** 
 * 1) Export a 'technicalSkillIcons' object so 
 *    other files can reuse these same icons. 
 */
export const technicalSkillIcons = {
  photoshop: <SiAdobephotoshop />,
  illustrator: <SiAdobeillustrator />,
  indesign: <SiAdobeindesign />,
  afterEffects: <SiAdobeaftereffects />,
  premierePro: <SiAdobepremierepro />,
  audition: <SiAdobeaudition />,
  procreate: <FaPaintBrush />,
  figma: <FaFigma />,
  html: <FaHtml5 />,
  css: <FaCss3 />,
  tailwind: <SiTailwindcss />,
  javascript: <FaJs />,
  react: <FaReact />
};

/* (optional) If you still want the 'softwareSkills' array, 
   keep it as is. Notice that now we reference the icons 
   from the exported object, so everything stays in sync. */
const softwareSkills = [
  { name: "Photoshop", icon: technicalSkillIcons.photoshop },
  { name: "Illustrator", icon: technicalSkillIcons.illustrator },
  { name: "InDesign", icon: technicalSkillIcons.indesign },
  { name: "After Effects", icon: technicalSkillIcons.afterEffects },
  { name: "Premiere Pro", icon: technicalSkillIcons.premierePro },
  { name: "Audition", icon: technicalSkillIcons.audition },
  { name: "Procreate", icon: technicalSkillIcons.procreate },
  { name: "Figma", icon: technicalSkillIcons.figma },
  { name: "HTML", icon: technicalSkillIcons.html },
  { name: "CSS", icon: technicalSkillIcons.css },
  { name: "Tailwind", icon: technicalSkillIcons.tailwind },
  { name: "JavaScript", icon: technicalSkillIcons.javascript },
  { name: "React", icon: technicalSkillIcons.react }
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
            whileHover={{ scale: 1.05 }}
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
