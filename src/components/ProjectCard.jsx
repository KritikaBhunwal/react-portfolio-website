import React from "react";
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma } from "react-icons/si";
import "../styles/projectCard.css";
import ProjectCardImage from "../assets/images/ProjectCardSuzanne.png";

const ProjectCard = ({
  // Category pill text and link
  category = "UX/UI Design",
  categoryLink = "/ux-ui",
  // Project image and link (default image from assets)
  projectImage = ProjectCardImage,
  projectLink = "/project",
  // Project title and description
  projectTitle = "Project Case Study for Website Redesign",
  projectDescription = "A complete website redesign focused on modern usability and sleek aesthetics.",
  // Software icons with links (React Icons will render at 28px)
  software = [
    { name: "Photoshop", icon: <SiAdobephotoshop />, link: "/software/photoshop" },
    { name: "Illustrator", icon: <SiAdobeillustrator />, link: "/software/illustrator" },
    { name: "Figma", icon: <SiFigma />, link: "/software/figma" },
  ],
}) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        {/* Top Row: Category pill on left, Software icons on right */}
        <div className="project-top-row">
          <div className="project-category">
            <a href={categoryLink}>{category}</a>
          </div>
          <div className="software-icons">
            {software.map((sw, index) => (
              <a key={index} href={sw.link} className="software-icon">
                {React.cloneElement(sw.icon, { size: 28 })}
              </a>
            ))}
          </div>
        </div>

        {/* Image Container */}
        <div className="project-image-wrapper">
          <div
            className="project-image-container"
            onClick={() => window.location.href = projectLink}
          >
            <img src={projectImage} alt={projectTitle} className="project-image" />
          </div>
        </div>

        {/* Project Details */}
        <div className="project-details">
          <h2 className="project-title">{projectTitle}</h2>
          <p className="project-description">{projectDescription}</p>
          {/* <a href={projectLink} className="view-button">View Project</a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
