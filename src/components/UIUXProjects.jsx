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
      projectLink: "https://www.behance.net/gallery/201548569/Hellow-An-Asynchronous-App-for-Messaging",
    },
    {
      id: 2,
      category: "Web Development",
      categoryLink: "/UIUX",
      projectTitle: "JavaScript Games : Pixel-Pop Studio",
      projectDescription: "Imagine diving into a complete website overhaul! This project focused on reimagining the Suzanne Collins website with a fresh, user-centered approach.",
      projectLink: "https://www.figma.com/design/zk68g3A1tAjijn0ZlRo8Ti/Pixel-Pop-Studio-KritikaBhunwal?node-id=0-1&t=JVupyI9bgmW7MZHc-1",
    },
    {
      id: 3,
      category: "UI/UX Design",
      categoryLink: "/UIUX",
      projectTitle: "Plant Easy : App Concept",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "https://www.figma.com/design/69l5xZOXjWkdHJ8xZPlQA7/PlantEasy?node-id=0-1&t=yPfoLrZl3NlzTx0I-1",
    },
    {
      id: 4,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Furry Tales Pet : Redesign Challenge",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "https://tinalin.ca/projects/furry-tales",
    },
    {
      id: 5,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Suzanne Collins Website Case Study",
      projectDescription: "Imagine diving into a complete website overhaul! This project focused on reimagining the Suzanne Collins website with a fresh, user-centered approach.",
      projectLink: "https://www.behance.net/gallery/201546007/UX-UI-Case-Study-for-Suzanne-Collins-Website",
    },
    {
      id: 6,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Moja Coffee Website Improvement",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "https://www.figma.com/design/SOQLNNI9nielaIHVBaTOR8/Moja-Coffee-KritikaBhunwal?t=GWqVJFa0aq1gLCWw-1",
    },
    {
      id: 7,
      category: "UI/UX Design",
      categoryLink: "/UIUX",
      projectTitle: "Portfolio Website Design",
      projectDescription: "Step into the world of intuitive digital interfaces! This project was all about designing seamless user experiences for modern digital products.",
      projectLink: "https://www.figma.com/design/QwIMymTyToy9PF7Yd1JsbC/Portfolio-Website-KritikaBhunwal?node-id=0-1&t=zOSdrGcuMbjhzSPB-1",
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
