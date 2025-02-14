import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import modelSrc1 from '../assets/models/GD_Comp1.glb'; // Project 1 Model
import modelSrc2 from '../assets/models/GD_Comp2.glb'; // Project 2 Model
import skyboxImage from '../assets/images/AdobeStock_bg.png';
import '../styles/3DBanner.css';

const ThreeDBanner = () => {
  // Project data with separate models, titles, and descriptions
  const projects = [
    { id: 'left', path: '/project1details', title: 'Project 1', description: 'This is a placeholder description for Project 1.', modelSrc: modelSrc1 },
    { id: 'right', path: '/project2details', title: 'Project 2', description: 'This is a placeholder description for Project 2.', modelSrc: modelSrc2 }
  ];

  const [expanded, setExpanded] = useState(null);

  // Open modal for the selected project
  const openModal = (containerId) => {
    setExpanded(containerId);
  };

  // Close modal and reset state
  const closeModal = () => {
    setExpanded(null);
  };

  // Navigate to the next project
  const navigateToNext = (e) => {
    e.stopPropagation();
    const currentIndex = projects.findIndex((p) => p.id === expanded);
    if (currentIndex !== -1 && currentIndex < projects.length - 1) {
      setExpanded(projects[currentIndex + 1].id);
    }
  };

  // Navigate to the previous project
  const navigateToPrev = (e) => {
    e.stopPropagation();
    const currentIndex = projects.findIndex((p) => p.id === expanded);
    if (currentIndex > 0) {
      setExpanded(projects[currentIndex - 1].id);
    }
  };

  return (
    <>
      <div className="container">
        {projects.map((project) => (
          <div key={project.id} className={`banner-container-${project.id}`}>
            <div className="model-wrapper">
              <div className="model-container">
                <model-viewer
                  src={project.modelSrc}
                  skybox-image={skyboxImage}
                  camera-controls
                  touch-action="pan-y"
                  style={{ width: '100%', height: '100%' }}
                ></model-viewer>
              </div>
              {/* Overlay controls */}
              <div className="overlay-controls">
                <Link to={project.path} className="project-title">
                  <h3>{project.title}</h3>
                </Link>
                <button className="expand-button" onClick={() => openModal(project.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M4 4h6V2H2v8h2V4zm16 0v6h2V2H14v2h6zM4 20v-6H2v8h8v-2H4zm16 0h-6v2h8v-8h-2v6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay for Full-Screen Mode */}
      {expanded && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Project Title (Clickable) and Description in Top Left */}
            <div className="modal-header">
              <Link to={projects.find((p) => p.id === expanded)?.path} className="modal-title">
                <h2>{projects.find((p) => p.id === expanded)?.title}</h2>
              </Link>
              <p>{projects.find((p) => p.id === expanded)?.description}</p>
            </div>

            {/* Close Button in Top Right */}
            <button className="modal-close" onClick={closeModal}>
              <p>X</p>
            </button>

            {/* Previous Button (only show if not on the first project) */}
            {projects.findIndex((p) => p.id === expanded) > 0 && (
              <button className="modal-prev" onClick={navigateToPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Next Button (only show if not on the last project) */}
            {projects.findIndex((p) => p.id === expanded) < projects.length - 1 && (
              <button className="modal-next" onClick={navigateToNext}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            {/* Full-Screen Model Viewer */}
            <div className="modal-model-container">
              <model-viewer
                src={projects.find((p) => p.id === expanded)?.modelSrc}
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
