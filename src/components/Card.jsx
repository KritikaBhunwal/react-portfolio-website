import React from "react";
import { Link } from "react-router-dom";
import "../styles/career.css";

const Card = ({ title, description, image, link, desktopReverse, tabletReverse }) => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div 
      className={`card ${desktopReverse ? "reverse-desktop" : ""} ${tabletReverse ? "reverse-tablet" : ""}`}
    >
      <div className="cardImage">
        <Link to={link} onClick={scrollToTop} style={{ textDecoration: "none" }}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="cardText">
        <Link
          to={link}
          onClick={scrollToTop}
          className="card-title-link"
          style={{ textDecoration: "none" }}
        >
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
        <Link
          to={link}
          onClick={scrollToTop}
          className="cta-button"
          style={{ textDecoration: "none" }}
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Card;
