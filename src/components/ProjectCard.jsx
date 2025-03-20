import React from "react";
import { Link } from "react-router-dom";
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma } from "react-icons/si";
import "../styles/projectCard.css";
import ProjectCardImage from "../assets/images/ProjectCardSuzanne.png";

const ProjectCard = ({
  // Category pill text and link
  category = "UX/UI Design",
  // Updated link to match the router path
  categoryLink = "/uiux",
  // Project image and link (default image from assets)
  projectImage = ProjectCardImage,
  projectLink = "/project",
  // Project title and description
  projectTitle = "Project Case Study for Website Redesign",
  projectDescription = "A complete website redesign focused on modern usability and sleek aesthetics.",
  // Software icons with links (React Icons will render at 28px)
  software = [
    { name: "Photoshop", icon: <SiAdobephotoshop />, link: "#" },
    { name: "Illustrator", icon: <SiAdobeillustrator />, link: "#" },
    { name: "Figma", icon: <SiFigma />, link: "#" },
  ],
}) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        {/* Top Row: Category pill on left, Software icons on right */}
        <div className="project-top-row">
          <div className="project-category">
            <Link to={categoryLink}>{category}</Link>
          </div>
          <div className="software-icons">
            {software.map((sw, index) => (
              <a key={index} href={sw.link} className="software-icon" title={sw.name}>
                {React.cloneElement(sw.icon, { size: 24 })}
              </a>
            ))}
          </div>
        </div>

        {/* Image Container */}
        <div className="project-image-wrapper">
          <Link to={projectLink} className="project-image-container">
            <img
              src={projectImage}
              alt={projectTitle}
              className="project-image"
            />
          </Link>
        </div>

        {/* Project Details */}
        <div className="project-details">
          <h2 className="project-title">{projectTitle}</h2>
          <p className="project-description">{projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
