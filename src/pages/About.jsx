import React from 'react';
import SubSectionHeading from '../components/SubSectionHeading.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import InterpersonalSkills from '../components/InterpersonalSkills.jsx';
import TechnicalSkills from '../components/TechnicalSkills.jsx';
import Testimonials from '../components/Testimonial.jsx';
import WorkTogether from '../components/WorkTogether.jsx';
import BusinessIntro from '../components/BusinessIntro.jsx';
import ImageBanner from '../components/ImageBanner.jsx';

import '../styles/about.css';

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-left">
        <SubSectionHeading title="As an Artist" />
        <p className="artist-text">
          I enjoy creating illustrations through different mediums exploring uniquely identified themes, translating the inner monologue through a vibrant set of colours, emotions and forms, encompassing illustrative details and delicacies for my audience on digital and tactile canvas. I like to enjoy a variety of music while I explore the palette.
        </p>
        <SubSectionHeading title="As a Designer" />
        <p className="designer-text">
          I take pride in understanding and envisioning the Brand’s story and provide my level best knowledge to incorporate solutions for the current business requirements towards sustainable progress as a collective. It’s always a proud moment to see brands flourishing through the contribution made by the community while working towards a distinctive goal.
        </p>
      </div>
      <div className="about-right">
        <SubSectionHeading title="Business Values" />
        <BusinessIntro />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <ImageBanner
        baseImage="/src/assets/images/AboutBannerBase.png"
        topImage="/src/assets/images/AboutBannerTop.png"
        baseAlt="Base Banner"
        topAlt="Top Banner"
      />
      <AboutContent />
      <SectionHeading title="Kind Words" />
      <Testimonials />
      <SectionHeading title="Technical Skills" />
      <TechnicalSkills />
      <SectionHeading title="Interpersonal Skills" />
      <InterpersonalSkills />
      <WorkTogether />
    </div>
  );
};

export default About;
