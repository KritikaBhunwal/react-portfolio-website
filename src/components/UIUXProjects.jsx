import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/UIUXProjects.css";

const UIUXProjects = () => {
  const projects = [

    {
      id: 2,
      category: "App Design",
      categoryLink: "/uiux",
      projectTitle: "Hellow : Prioritize People over Platform",
      projectDescription:
        "An innovative asynchronous messaging app idea that redefines communication across different time-zones.",
      projectLink: "/uiux/hellow",

      // Provide the normal (placeholder) image
      // projectImage: "/ProjectCardPlaceholder.png",
      projectImage: "/ProjectCardHellow.png",
      // projectHoverImage: "/ProjectCardPlaceholder.png",
    },
    {
      id: 3,
      category: "Web Development",
      categoryLink: "/uiux",
      projectTitle: "Pixel-Pop Studio : 90's Arcade JavaScript Games",
      projectDescription:
        "Game Mode On! Dive into the world of interactive revamp of 90's Arcade Games with our Pixel-Pop Gaming Studio.",
      projectLink: "/uiux/JavaScript-Games",

      // No hover image => no expansion on hover
      projectImage: "/ProjectCardGames.png",
    },
    {
      id: 1,
      category: "UI/UX Design",
      categoryLink: "/uiux",
      projectTitle: "Kritika Bhunwal : Portfolio Website Design",
      projectDescription:
        "Here I showcase the process that I followed for designing and developing my portfolio website from initial ideation to final design.",
      projectLink:
        "https://www.figma.com/proto/QwIMymTyToy9PF7Yd1JsbC/Portfolio-Website-KritikaBhunwal?node-id=144-1672&t=3HebtMemoXxP33NU-1",
      projectImage: "/ProjectCardPortfolio.png",
    },
    {
      id: 4,
      category: "UI/UX Design",
      categoryLink: "/uiux",
      projectTitle: "Plant Easy : UI/UX Based App Concept",
      projectDescription:
        "Discover an app concept design to solve the problem of deforestation, so that you can plant trees remotely!",
      projectLink:
        "https://www.figma.com/proto/69l5xZOXjWkdHJ8xZPlQA7/PlantEasy?node-id=84-391&p=f&t=UPs1ZUn9L95Tcf8v-1&scaling=scale-down&content-scaling=fixed&page-id=84%3A151&starting-point-node-id=84%3A391",

      projectImage: "/ProjectCardPlantEasy.png",
      // If you want a hover image, just add projectHoverImage here
      // projectHoverImage: "/AnotherHoverImage.png"
    },
    {
      id: 6,
      category: "UI/UX Re-Design",
      categoryLink: "/uiux",
      projectTitle: "Moja Coffee : Website Improvement Group Project",
      projectDescription:
        "Improving Moja Coffee website to create a smoother user experience using core UI/UX principles.",
      projectLink:
        "https://www.canva.com/design/DAGXnrHiApc/_4qem8hThelU5xX150fjgw/edit?utm_content=DAGXnrHiApc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      projectImage: "/ProjectCardCoffee.png",
    },
    {
      id: 5,
      category: "UI/UX Re-Design",
      categoryLink: "/uiux",
      projectTitle: "Furry Tales Pet : Website Redesign Challenge",
      projectDescription:
        "A redesign challenge we participated as a group of four in 2025, that focused on enhancing the user experience for pet lovers.",
      projectLink: "https://tinalin.ca/projects/furry-tales",
      projectImage: "/ProjectCardFurry.png",
    },
    // {
    //   id: 8,
    //   category: "QA and Design",
    //   categoryLink: "/uiux",
    //   projectTitle: "Planetarium Website : A Quality Assurance Group Project",
    //   projectDescription:
    //     "A project that I worked on as a QA Specialist and provided initial design ideas with QA insights.",
    //   projectLink:
    //     "#",
    //   projectImage: "/ProjectCardMoon.png",
    // },
    {
      id: 7,
      category: "UI/UX Re-Design",
      categoryLink: "/uiux",
      projectTitle: "Suzanne Collins : My First Website Redesign Case Study",
      projectDescription:
        "My first ever UX/UI Case Study done in school to reimagine the Suzanne Collins website with a user-centered approach and present the books in the most intuitive manner.",
      projectLink:
        "https://www.behance.net/gallery/201546007/UX-UI-Case-Study-for-Suzanne-Collins-Website",
      projectImage: "/ProjectCardPlaceholder.png",
    },
  ];

  return (
    <div className="featured-projects">
      <div
        className="featured-projects-carousel"
        role="region"
        aria-label="Featured Projects"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            categoryLink={project.categoryLink}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectLink={project.projectLink}
            projectImage={project.projectImage}
            projectHoverImage={project.projectHoverImage}
          />
        ))}
      </div>
      <div className="swipe-indicator"></div>
    </div>
  );
};

export default UIUXProjects;
