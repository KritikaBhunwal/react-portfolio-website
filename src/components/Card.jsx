import React from "react";
import "../styles/card.css";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card-container">
      <div className="cardImage">
        <img src={image} alt={title} width="100%" loading="lazy" />
      </div>
      <div className="cardText">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>
          <ion-icon name="book"></ion-icon> Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
