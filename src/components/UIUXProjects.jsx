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
      projectDescription: "Explore the innovative asynchronous messaging app that redefines communication.",
      projectLink: "/uiux/hellow",
    },
    {
      id: 2,
      category: "Web Development",
      categoryLink: "/UIUX",
      projectTitle: "90's Arcade JavaScript Games : Pixel-Pop Studio",
      projectDescription: "Dive into the world of interactive JavaScript games with Pixel-Pop Studio.",
      projectLink: "/uiux/JavaScript-Games",
    },
    {
      id: 3,
      category: "UI/UX Design",
      categoryLink: "/UIUX",
      projectTitle: "Plant Easy : App Concept based on UX And UI Principles",
      projectDescription: "Discover the app concept designed to make plant care effortless and enjoyable.",
      projectLink: "https://www.figma.com/proto/69l5xZOXjWkdHJ8xZPlQA7/PlantEasy?node-id=84-391&p=f&t=UPs1ZUn9L95Tcf8v-1&scaling=scale-down&content-scaling=fixed&page-id=84%3A151&starting-point-node-id=84%3A391",
    },
    {
      id: 4,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Furry Tales Pet : Redesign Challenge",
      projectDescription: "A redesign challenge focused on enhancing the user experience for pet lovers.",
      projectLink: "https://tinalin.ca/projects/furry-tales",
    },
    {
      id: 5,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Suzanne Collins Website Case Study",
      projectDescription: "A case study on reimagining the Suzanne Collins website with a user-centered approach.",
      projectLink: "https://www.behance.net/gallery/201546007/UX-UI-Case-Study-for-Suzanne-Collins-Website",
    },
    {
      id: 6,
      category: "UI/UX Re-Design",
      categoryLink: "/UIUX",
      projectTitle: "Moja Coffee Website Improvement",
      projectDescription: "Improving the Moja Coffee website to deliver a seamless user experience.",
      projectLink: "https://www.canva.com/design/DAGXnrHiApc/_4qem8hThelU5xX150fjgw/edit?utm_content=DAGXnrHiApc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 7,
      category: "UI/UX Design",
      categoryLink: "/UIUX",
      projectTitle: "Portfolio Website Design",
      projectDescription: "Designing a portfolio website to showcase creative projects and skills.",
      projectLink: "https://www.figma.com/proto/QwIMymTyToy9PF7Yd1JsbC/Portfolio-Website-KritikaBhunwal?node-id=142-1590&t=3HebtMemoXxP33NU-1",
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
