import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import modelSrc1 from "../assets/models/GD_Comp1.glb"; // Fashion Styling Model
import modelSrc2 from "../assets/models/GD_Comp2.glb"; // 3D Composition Model
import skyboxImage from "../assets/images/AdobeStock_bg.jpeg";
import "../styles/ThreeDBanner.css";

const projects = [
  {
    id: "left",
    path: "/Fashion",
    title: "Fashion Styling",
    description: "Styling is picking the right outfit for the right occasion",
    modelSrc: modelSrc1,
  },  
  {
    id: "right",
    path: "https://adobeaero.app.link/LEmWcqYJNNb",
    title: "3D Composition",
    description: "3D Composition using Adobe Aero and Adobe Dimension",
    modelSrc: modelSrc2,
  },
];

const ThreeDBanner = () => {
  const [expanded, setExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update mobile flag on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Modal open/close
  const openModal = (projectId) => setExpanded(projectId);
  const closeModal = () => setExpanded(null);

  // Desktop modal navigation
  const navigateToNext = (e) => {
    e.stopPropagation();
    const idx = projects.findIndex((p) => p.id === expanded);
    if (idx !== -1 && idx < projects.length - 1) {
      setExpanded(projects[idx + 1].id);
    }
  };

  const navigateToPrev = (e) => {
    e.stopPropagation();
    const idx = projects.findIndex((p) => p.id === expanded);
    if (idx > 0) {
      setExpanded(projects[idx - 1].id);
    }
  };

  // Mobile carousel navigation
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  // Render a link based on internal vs. external path
  const renderProjectLink = (project, children) => {
    if (project.path.startsWith("http")) {
      return (
        <a
          href={project.path}
          target="_blank"
          rel="noopener noreferrer"
          className="project-title"
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={project.path} className="project-title">
        {children}
      </Link>
    );
  };

  // Get current project for modal display
  const currentProject = projects.find((p) => p.id === expanded);

  // Render projects based on viewport
  const renderProjects = () => {
    if (isMobile) {
      const project = projects[currentIndex];
      return (
        <div className="banner-container-mobile" key={project.id}>
          <div className="model-wrapper">
            <div className="model-container">
              <model-viewer
                src={project.modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                touch-action="pan-y"
                style={{ width: "100%", height: "100%" }}
              ></model-viewer>
            </div>
            {/* Overlay showing title and description */}
            <div className="overlay-controls">
              {renderProjectLink(
                project,
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              )}
            </div>
            {/* Expand button (visible only on hover) */}
            <button
              className="expand-button"
              onClick={() => openModal(project.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M4 4h6V2H2v8h2V4zm16 0v6h2V2H14v2h6zM4 20v-6H2v8h8v-2H4zm16 0h-6v2h8v-8h-2v6z"
                />
              </svg>
            </button>
          </div>
          <div className="carousel-controls">
            <button onClick={goToPrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="currentColor" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button onClick={goToNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="currentColor" d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      );
    } else {
      return projects.map((project) => (
        <div key={project.id} className={`banner-container-${project.id}`}>
          <div className="model-wrapper">
            <div className="model-container">
              <model-viewer
                src={project.modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                touch-action="pan-y"
                style={{ width: "100%", height: "100%" }}
              ></model-viewer>
            </div>
            <div className="overlay-controls">
              {renderProjectLink(
                project,
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              )}
            </div>
            <button
              className="expand-button"
              onClick={() => openModal(project.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M4 4h6V2H2v8h2V4zm16 0v6h2V2H14v2h6zM4 20v-6H2v8h8v-2H4zm16 0h-6v2h8v-8h-2v6z"
                />
              </svg>
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <>
      <div className="container">{renderProjects()}</div>
      {expanded && currentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              {renderProjectLink(
                currentProject,
                <h2>{currentProject.title}</h2>
              )}
              <p>{currentProject.description}</p>
            </div>
            <button className="modal-close" onClick={closeModal}>
              <p>X</p>
            </button>
            {projects.findIndex((p) => p.id === expanded) > 0 && (
              <button className="modal-prev" onClick={navigateToPrev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="currentColor" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            {projects.findIndex((p) => p.id === expanded) <
              projects.length - 1 && (
              <button className="modal-next" onClick={navigateToNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="currentColor" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
            <div className="modal-model-container" style={{ position: "relative" }}>
              <model-viewer
                src={currentProject.modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                disable-zoom
                touch-action="pan-y"
                style={{ width: "100%", height: "100%" }}
              ></model-viewer>
              <div className="model-overlay"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDBanner;
