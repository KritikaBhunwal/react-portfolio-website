import React from "react";

const SimpleCard = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <a href={link}>
        <img src={image} alt={title} className="card-image" />
      </a>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-button">View Project</a>
      </div>
    </div>
  );
};

export default SimpleCard;
