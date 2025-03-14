import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import BusinessIntro from "./BusinessIntro.jsx";
import "../styles/aboutContent.css";

const AboutContent = () => {
  return (
    <div className="about-content">
      {/* Left Column - Artist & Designer Info */}
      <div className="about-left">
        <SectionHeading title="As an Artist" />
        <p className="artist-text">
          I enjoy creating illustrations through different mediums exploring uniquely identified themes, translating the inner monologue through a vibrant set of colours, emotions and forms, encompassing illustrative details and delicacies for my audience on digital and tactile canvas. I like to enjoy a variety of music while I explore the palette.
        </p>
        <SectionHeading title="As a Designer" />
        <p className="designer-text">
          I take pride in understanding and envisioning the Brand’s story and provide my level best knowledge to incorporate solutions for the current business requirements towards sustainable progress as a collective. It’s always a proud moment to see brands flourishing through the contribution made by the community while working towards a distinctive goal.
        </p>
      </div>

      {/* Right Column - Business Values & Accordion */}
      <div className="about-right">
        <SectionHeading title="Business Values" />
        <BusinessIntro />
      </div>
    </div>
  );
};

export default AboutContent;
