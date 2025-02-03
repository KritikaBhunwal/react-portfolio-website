// src/components/ThreeDBanner.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import modelSrc from '../assets/models/GD_Comp2.glb';
import skyboxImage from '../assets/images/AdobeStock_bg.png';
import '../styles/3DBanner.css';

const ThreeDBanner = () => {
  // 'left' or 'right' indicates which banner is expanded; null means none
  const [expanded, setExpanded] = useState(null);

  // Open modal for the specified model
  const openModal = (container) => {
    setExpanded(container);
  };

  // Close modal
  const closeModal = () => {
    setExpanded(null);
  };

  // Navigate to the next model
  const navigateToNext = (e) => {
    e.stopPropagation();
    if (expanded === 'left') {
      openModal('right'); // Move from Project 1 (Left) to Project 2 (Right)
    }
  };

  // Navigate to the previous model
  const navigateToPrev = (e) => {
    e.stopPropagation();
    if (expanded === 'right') {
      openModal('left'); // Move from Project 2 (Right) to Project 1 (Left)
    }
  };

  return (
    <>
      <div className="container">
        {/* Left Banner Container */}
        <div className="banner-container-left">
          <div className="model-wrapper">
            <div className="model-container">
              <model-viewer
                src={modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                touch-action="pan-y"
                style={{ width: '100%', height: '100%' }}
              ></model-viewer>
            </div>
            {/* Overlay controls appear on hover */}
            <div className="overlay-controls">
              <Link to="/project1details" className="project-title">
                <h3>Project 1</h3>
              </Link>
              <button className="expand-button" onClick={() => openModal('left')}>
                {/* Expand icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M4 4h6V2H2v8h2V4zm16 0v6h2V2H14v2h6zM4 20v-6H2v8h8v-2H4zm16 0h-6v2h8v-8h-2v6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Banner Container */}
        <div className="banner-container-right">
          <div className="model-wrapper">
            <div className="model-container">
              <model-viewer
                src={modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                touch-action="pan-y"
                style={{ width: '100%', height: '100%' }}
              ></model-viewer>
            </div>
            <div className="overlay-controls">
              <Link to="/project2details" className="project-title">
                <h3>Project 2</h3>
              </Link>
              <button className="expand-button" onClick={() => openModal('right')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M4 4h6V2H2v8h2V4zm16 0v6h2V2H14v2h6zM4 20v-6H2v8h8v-2H4zm16 0h-6v2h8v-8h-2v6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay for Full-Screen Mode */}
      {expanded && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button at top right */}
            <button className="modal-close" onClick={closeModal}>
              <p>X</p>
            </button>
            {/* Previous Button at left center */}
            <button className="modal-prev" onClick={navigateToPrev}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {/* Next Button at right center */}
            <button className="modal-next" onClick={navigateToNext}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M9 18l6-6-6-6" />
              </svg>
            </button>
            {/* Full-screen model-viewer */}
            <div className="modal-model-container">
              <model-viewer
                src={modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                touch-action="pan-y"
                style={{ width: '100%', height: '100%' }}
              ></model-viewer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDBanner;
