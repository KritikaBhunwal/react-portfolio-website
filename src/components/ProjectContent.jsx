import React from 'react';
import '../styles/projectContent.css';

const ProjectContent = () => {
  const projectTitle = "Elevate Your Style: Premier Fashion Styling Project for E-commerce";
  
  return (
    <div className="project-content-container">
      <div className="description-section">
        <div className="left-description">
          <h2 className="section-title">{projectTitle}</h2>
          <p>
            In my role as an online stylist, I curated fashion looks for projects – Black is Pink and Baggout – to guide shoppers in making informed wardrobe choices. I crafted ensembles tailored to diverse occasions, budgets, and personalities.
          </p>
        </div>
        <div className="right-highlights">
          <h2 className="section-title">Highlights</h2>
          <ul>
            <li><strong>Versatility:</strong> Suitable for various events.</li>
            <li><strong>Budget Consideration:</strong> Cost-effective without compromising style.</li>
            <li><strong>Personalization:</strong> Tailored recommendations.</li>
            <li><strong>Trend Awareness:</strong> Modern, chic elements.</li>
            <li><strong>Accessory Coordination:</strong> Complementary accessories.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
