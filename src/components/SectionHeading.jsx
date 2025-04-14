import React from 'react';
import '../styles/sectionHeading.css';

const SectionHeading = ({ title = 'Section Title' }) => {
  return (
    <div className="section-heading-container">
      <h3 className="section-heading">{title}</h3>
      <div className="section-heading-line" />
    </div>
  );
};

export default SectionHeading;
