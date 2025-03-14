import React, { useEffect } from 'react';
import AboutContent from '../components/AboutContent.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import InterpersonalSkills from '../components/InterpersonalSkills.jsx';
import TechnicalSkills from '../components/TechnicalSkills.jsx';
import WorkTogether from '../components/WorkTogether.jsx';

import '../styles/about.css';

const About = () => {
  useEffect(() => {
    const banner = document.querySelector('.image-banner');

    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      banner.style.setProperty('--x', `${x}px`);
      banner.style.setProperty('--y', `${y}px`);
    };

    banner.addEventListener('mousemove', handleMouseMove);

    return () => banner.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="about-container">
      {/* Banner Section */}
      <div className="image-banner">
        <img src="/src/assets/images/AboutBannerBase.png" alt="Base Banner" className="base-image" />
        <img src="/src/assets/images/AboutBannerTop.png" alt="Top Banner" className="top-image" />
      </div>
      <AboutContent />

      {/* Skills & Work Together Sections */}
      <SectionHeading title="Technical Skills" />
      <TechnicalSkills />

      <SectionHeading title="Interpersonal Skills" />
      <InterpersonalSkills />

      <WorkTogether />
    </div>
  );
};

export default About;
