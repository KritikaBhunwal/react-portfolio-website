import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Example .glb models & skybox image – replace with your own as needed
import modelSrc1 from "/GD_Comp1.glb";
import modelSrc2 from "/GD_Comp2.glb";
import skyboxImage from "/AdobeStock_bg.jpeg";
import "../styles/ThreeDBanner.css";

/**
 * Example "projects" array – each item has:
 *   - id: unique ID
 *   - path: link (internal or external)
 *   - title, description
 *   - modelSrc: path to a .glb or .gltf file
 */
const projects = [
  {
    id: "left",
    path: "/career/fashion/Fashion", // internal route
    title: "Fashion Styling",
    description: "Styling is picking the right outfit for the right occasion",
    modelSrc: modelSrc1,
  },
  {
    id: "right",
    path: "https://adobeaero.app.link/LEmWcqYJNNb", // external link
    title: "3D Composition",
    description: "3D Composition using Adobe Aero and Adobe Dimension",
    modelSrc: modelSrc2,
  },
];

const ThreeDBanner = () => {
  const [expanded, setExpanded] = useState(null); // which project is open in overlay
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detect if screen is mobile ( < 768px )
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Open / close modal overlay
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

  // Helper: link internally or externally
  const renderProjectLink = (project, children) => {
    if (project.path.startsWith("http")) {
      // external link
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
    // internal route
    return (
      <Link to={project.path} className="project-title">
        {children}
      </Link>
    );
  };

  const currentProject = projects.find((p) => p.id === expanded);

  // Renders either the "mobile" or "desktop" layout
  const renderProjects = () => {
    if (isMobile) {
      // ----- MOBILE LAYOUT -----
      const project = projects[currentIndex];
      return (
        <div className="banner-container-mobile" key={project.id}>
          <div className="model-wrapper" onClick={() => openModal(project.id)}>
            <div className="model-container">
              {/* Simple 3D preview (no camera-controls) */}
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

            {/* Expand button (fully visible on mobile) */}
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

          {/* Mobile "carousel" controls */}
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
      // ----- DESKTOP LAYOUT -----
      return projects.map((project) => (
        <div key={project.id} className={`banner-container-${project.id}`}>
          <div className="model-wrapper" onClick={() => openModal(project.id)}>
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

            {/* Expand button on hover (desktop) */}
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
      {/* Render either mobile carousel or desktop banners */}
      <div className="container">{renderProjects()}</div>

      {/* FULL-VIEW OVERLAY (like ProcreateDump) */}
      {expanded && currentProject && (
        <div
          className="full-view-overlay"
          onClick={closeModal}
        >
          {/* Stop propagation so clicks in content don't close overlay */}
          <div className="full-view-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>

            {/* Prev Button (if not the first project) */}
            {projects.findIndex((p) => p.id === expanded) > 0 && (
              <button className="prev-btn" onClick={navigateToPrev}>
                ❮
              </button>
            )}
            {/* Next Button (if not the last project) */}
            {projects.findIndex((p) => p.id === expanded) <
              projects.length - 1 && (
              <button className="next-btn" onClick={navigateToNext}>
                ❯
              </button>
            )}

            {/* Full 3D view => camera controls */}
            <div
              className="model-container"
              style={{
                width: "100%",
                height: "70%", // 70% of the modal height => leaves 30% for details
              }}
            >
              <model-viewer
                src={currentProject.modelSrc}
                skybox-image={skyboxImage}
                camera-controls
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* 
              Project details + prompt to interact. 
              This uses the "modal-info" area, center-aligned, 
              to display the currentProject's title, description, 
              and an "interaction" hint.
            */}
            <div className="modal-info">
              <h2>{currentProject.title}</h2>
              <p>{currentProject.description}</p>
              <p className="interaction-hint">
                Interact with the model: click, scroll, and drag!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDBanner;
