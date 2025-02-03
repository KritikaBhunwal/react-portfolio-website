// src/components/SpecsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../styles/SpecsSection.css';

const SpecsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set up the Intersection Observer to trigger the animation when the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`specs-section ${isVisible ? 'active' : ''}`}>
      <div className="specs-text">
        <h2>Our Performance</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sapien eget
          libero pretium laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur in dui quis nulla auctor malesuada. Cras consequat lacus
          nec eros tempor, non laoreet lorem suscipit. Sed hendrerit, arcu quis vestibulum consequat,
          massa sapien ultrices risus, ut interdum risus orci in neque. Phasellus quis eros sed nisi
          convallis vehicula. Integer consequat, nisl ac varius viverra, massa metus tempor mauris,
          sed lobortis tortor sem ut nisl. Sed at mauris nec dolor malesuada efficitur.
        </p>
      </div>
      <div className="specs-circles">
        <div className="circle circle-one">
          <span>40+ Clients</span>
        </div>
        <div className="circle circle-two">
          <span>100+ Projects</span>
        </div>
        <div className="circle circle-three">
          <span>7+ Years Expertise</span>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
