import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/featuredProjects.css";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      category: "UX/UI Design",
      categoryLink: "/ux-ui",
      projectTitle: "UX/UI Project 1",
      projectDescription: "Innovative redesign for modern user experience.",
    },
    {
      id: 2,
      category: "UX/UI Design",
      categoryLink: "/ux-ui",
      projectTitle: "UX/UI Project 2",
      projectDescription: "Seamless interface design for digital products.",
    },
    {
      id: 3,
      category: "Graphic Design",
      categoryLink: "/graphic-design",
      projectTitle: "Graphic Design Project 1",
      projectDescription: "Creative visual identity for brand recognition.",
    },
    {
      id: 4,
      category: "Graphic Design",
      categoryLink: "/graphic-design",
      projectTitle: "Graphic Design Project 2",
      projectDescription: "Bold poster designs for event promotions.",
    },
    {
      id: 5,
      category: "Fashion Design",
      categoryLink: "/fashion-design",
      projectTitle: "Fashion Design Project",
      projectDescription: "Elegant collection showcasing modern silhouettes.",
    },
  ];

  return (
    <div className="featured-projects">
      {/* <h2 className="section-title">Featured Projects</h2> */}
      <div className="featured-projects-carousel">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            categoryLink={project.categoryLink}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectLink="/project"  // same demo link for all cards
          />
        ))}
      </div>
      <div className="swipe-indicator">
        <span>&larr; Swipe &rarr;</span>
      </div>
    </div>
  );
};

export default FeaturedProjects;
