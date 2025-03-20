import React from "react";
import "../styles/projectContent.css";

const ProjectContent = ({ title, description, highlights }) => {
  const defaultTitle = "Styling Project for E-commerce";
  const defaultDescription =
    "In my role as an online stylist, I curated fresh and trendy fashion looks for online e-commerce websites like Black is Pink and Baggout. I curated ensembles keeping in mind the diverse occasions, budgets, and individual styles.";

  // Updated default highlights with bulletPointOne instead of label
  const defaultHighlights = [
    {
      bulletPointOne: "Innovative Aesthetics",
      detail: "Fresh, trend-forward design elements that capture attention.",
    },
    {
      bulletPointOne: "Customer-Centric",
      detail: "Tailored looks that resonate with diverse style preferences.",
    },
    {
      bulletPointOne: "Seamless Integration",
      detail: "Effortless pairing of accessories and statement pieces.",
    },
    {
      bulletPointOne: "Versatile Styling",
      detail:
        "Outfits that transition perfectly from casual to formal settings.",
    },
    {
      bulletPointOne: "Sustainable Choices",
      detail: "Eco-friendly options that don’t compromise on style.",
    },
  ];

  const usedHighlights = highlights || defaultHighlights;

  return (
    <div className="project-content-container">
      <div className="description-section" style={{ marginRight: "2rem" }}>
        <div className="left-description">
          <h2 className="section-title">{title || defaultTitle}</h2>
          <p>{description || defaultDescription}</p>
        </div>
        <div className="right-highlights" style={{ marginRight: "2rem" }}>
          <h2
            className="section-title"
            style={{ color: "#3d3d3d", fontSize: "1.5rem" }}
          >
            Highlights
          </h2>
          <ul>
            {usedHighlights.map((item, index) => (
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
