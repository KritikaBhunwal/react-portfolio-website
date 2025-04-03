import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import modelSrc1 from "/GD_Comp1.glb"; // Fashion Styling
import modelSrc2 from "/GD_Comp2.glb"; // 3D Composition
import skyboxImage from "/AdobeStock_bg.jpeg";
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
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  // Internal vs. external link
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

  const currentProject = projects.find((p) => p.id === expanded);

  // Render either mobile carousel or side-by-side (desktop)
  const renderProjects = () => {
    if (isMobile) {
      // MOBILE
      const project = projects[currentIndex];
      return (
        <div className="banner-container-mobile" key={project.id}>
          <div
            className="model-wrapper"
            // Entire area is clickable => open modal
            onClick={() => openModal(project.id)}
          >
            <div className="model-container">
              {/* No camera-controls => no scroll hijacking */}
              <model-viewer
                src={project.modelSrc}
                skybox-image={skyboxImage}
                style={{ width: "100%", height: "100%" }}
              />
              <div className="model-overlay" />
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

            {/* 
              We keep the expand button for visual emphasis
              but also attach an onClick that stops event propagation 
              if you want to handle it separately.
            */}
            <button
              className="expand-button"
              onClick={(e) => {
                e.stopPropagation();
                openModal(project.id);
              }}
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
      // DESKTOP
      return projects.map((project) => (
        <div key={project.id} className={`banner-container-${project.id}`}>
          <div
            className="model-wrapper"
            // Entire area is clickable => open modal
            onClick={() => openModal(project.id)}
          >
            <div className="model-container">
              <model-viewer
                src={project.modelSrc}
                skybox-image={skyboxImage}
                style={{ width: "100%", height: "100%" }}
              />
              <div className="model-overlay" />
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

            {/* Expand button shown on hover; stops event propagation */}
            <button
              className="expand-button"
              onClick={(e) => {
                e.stopPropagation();
                openModal(project.id);
              }}
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
            <div
              className="modal-model-container"
              style={{ position: "relative" }}
            >
              {/* In the modal, we enable camera-controls for 3D interactivity */}
              <model-viewer
                src={currentProject.modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                style={{ width: "100%", height: "100%" }}
              />
              <div className="model-overlay" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDBanner;
