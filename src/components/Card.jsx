import React from "react";
import "../styles/career.css";

const Card = ({ title, description, image, link, desktopReverse, tabletReverse }) => {
  return (
    <div 
      className={`card ${desktopReverse ? "reverse-desktop" : ""} ${tabletReverse ? "reverse-tablet" : ""}`}
    >
      <div className="cardImage">
        <img src={image} alt={title} />
      </div>
      <div className="cardText">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className="cta-button">Explore</a>
      </div>
    </div>
  );
};

export default Card;
