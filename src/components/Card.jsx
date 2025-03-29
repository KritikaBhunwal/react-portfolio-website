import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "../styles/career.css";
import PropTypes from "prop-types";

const Card = ({
  title,
  description,
  image,
  link,
  desktopReverse,
  tabletReverse,
}) => {
  const scrollToTop = () => window.scrollTo(0, 0);

  const cleanDescription = DOMPurify.sanitize(description);

  return (
    <div
      className={`card ${desktopReverse ? "reverse-desktop" : ""} ${
        tabletReverse ? "reverse-tablet" : ""
      }`}
    >
      <div className="cardImage">
        <Link
          to={link}
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
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
        <p>{parse(cleanDescription)}</p>
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
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  desktopReverse: PropTypes.bool,
  tabletReverse: PropTypes.bool,
};

export default Card;
