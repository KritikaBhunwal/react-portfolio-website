import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import "../styles/career.css";

const CareerCard = ({
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
      className={`careercard ${desktopReverse ? "reverse-desktop" : ""} ${
        tabletReverse ? "reverse-tablet" : ""
      }`}
    >
      <div className="careercardImage">
        <Link to={link} onClick={scrollToTop} style={{ textDecoration: "none" }}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="careercardText">
        <Link
          to={link}
          onClick={scrollToTop}
          className="careercard-title-link"
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

CareerCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  desktopReverse: PropTypes.bool,
  tabletReverse: PropTypes.bool,
};

export default CareerCard;
