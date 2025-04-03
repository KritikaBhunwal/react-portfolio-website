import React from "react";
import ProjectContent from "./ProjectContent";
import SectionHeading from "./SectionHeading";
// Using react-icons for demonstration; adjust imports based on your project setup
import { FaReact, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const JavaScriptGamesContent = () => {
  const title = "JavaScript Games – UI/UX Project";
  const description = `This project showcases interactive JavaScript games developed using React. 
  It revamps classic arcade games with modern technologies and engaging UI/UX design, delivering a fun, responsive, and nostalgic gaming experience.`;

  const highlights = [
    {
      bulletPointOne: "Classic Arcade Revamp",
      detail: "Recreated timeless arcade games using modern JavaScript and React."
    },
    {
      bulletPointOne: "Engaging UI/UX",
      detail: "Designed intuitive interfaces with nostalgic flair to enhance user experience."
    },
    {
      bulletPointOne: "Gamification",
      detail: "Integrated gamification elements to boost engagement and interactivity."
    },
    {
      bulletPointOne: "Responsive Design",
      detail: "Ensured compatibility across various devices with a responsive layout."
    }
  ];

  const icons = [
    { icon: <FaReact size={30} />, name: "React.js" },
    { icon: <FaCss3Alt size={30} />, name: "CSS" },
    { icon: <FaJsSquare size={30} />, name: "JavaScript" },
    { icon: <SiFigma size={30} />, name: "Figma" }
  ];

  return (
    <div className="projectContentText" style={{ margin: "0rem -6rem" }}>
      <SectionHeading title="Project Info"></SectionHeading>
      <ProjectContent
        title={title}
        description={description}
        highlights={highlights}
        icons={icons}
      />
    </div>
  );
};

export default JavaScriptGamesContent;
