import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/UIUXProjects.css";

const UIUXProjects = () => {
  const projects = [
    {
      id: 1,
      category: "App Development",
      categoryLink: "/UIUX",
      projectTitle: "Hellow : Asynchronous Way of Messaging",
      projectDescription: "Imagine diving into a complete website overhaul! This project focused on reimagining the Suzanne Collins website with a fresh, user-centered approach.",
      projectLink: "/projects/hellow",
    },
    {
      id: 2,
      category: "Web Development",
      categoryLink: "/UIUX",
      projectTitle: "JavaScript Games : Pixel-Pop Studio",
      projectDescription: "Imagine diving into a complete website overhaul! This project focused on reimagining the Suzanne Collins website with a fresh, user-centered approach.",
      projectLink: "/pages/uiux/JavaScriptGames",
    },
    {
      id: 3,
      category: "UI/UX Design",
      categoryLink: "/UIUX",
      projectTitle: "Plant Easy : App Concept",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "/projects/plant-easy",
    },
    {
      id: 4,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Furry Tales Pet : Redesign Challenge",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "/projects/furry-tales-pet",
    },
    {
      id: 5,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Suzanne Collins Website Case Study",
      projectDescription: "Imagine diving into a complete website overhaul! This project focused on reimagining the Suzanne Collins website with a fresh, user-centered approach.",
      projectLink: "/projects/suzanne-collins",
    },
    {
      id: 6,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Moja Coffee Website Improvement",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "/projects/moja-coffee",
    },
    {
      id: 7,
      category: "UI/UX Design",
      categoryLink: "/UIUX",
      projectTitle: "Portfolio Website Design",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "/projects/portfolio-website",
    },
  ];

  return (
    <div className="featured-projects">
      <div className="featured-projects-carousel" role="region" aria-label="Featured Projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            categoryLink={project.categoryLink}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectLink={project.projectLink}
          />
        ))}
      </div>
      <div className="swipe-indicator"></div>
    </div>
  );
};

export default UIUXProjects;
