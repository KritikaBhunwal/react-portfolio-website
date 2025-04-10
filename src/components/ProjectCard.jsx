import React from "react";
import PropTypes from "prop-types";
import "../styles/ProjectCard.css"; // Ensure this file exists and path is correct

const ProjectCard = ({
  category,
  categoryLink,
  projectTitle,
  projectDescription,
  projectLink,
  projectImage,
  softwareIcons, // Array of icon elements
}) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <div className="project-image-container">
          <img className="project-image" src={projectImage} alt={projectTitle} />
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-top-row">
          <div className="project-category">
            <a href={categoryLink}>{category}</a>
          </div>
          <div className="software-icons">
            {softwareIcons &&
              softwareIcons.map((icon, index) => (
                <span key={index} className="project-software-icon">
                  {icon}
                </span>
              ))}
          </div>
        </div>
        <div className="project-details">
          <h3 className="project-title">{projectTitle}</h3>
          <p className="project-description">{projectDescription}</p>
          <a href={projectLink} className="project-link">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  category: PropTypes.string.isRequired,
  categoryLink: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  softwareIcons: PropTypes.arrayOf(PropTypes.node),
};

export default ProjectCard;
