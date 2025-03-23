import React from "react";
import "../styles/projectContent.css";

const ProjectContent = ({ title, description, highlights, icons = [] }) => {
  return (
    <div className="project-content-container">
      <div className="description-section">
        {/* Left Section: Title, Description, Icons */}
        <div className="left-description">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>

          {/* Icons Section - Render only if icons exist */}
          {icons.length > 0 && (
            <div className="icon-section">
              {icons.map((icon, index) => (
                <div className="icon-card" key={index}>
                  {icon.icon}
                  <span>{icon.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Highlights */}
        <div className="right-highlights">
          <h3 className="highlights-title">Highlights</h3>
          <ul className="highlights-list">
            {highlights.map((item, index) => (
              <li key={index}>
                <strong>{item.bulletPointOne}:</strong> {item.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
