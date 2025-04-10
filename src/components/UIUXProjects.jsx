import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/UIUXProjects.css";
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiFigma, 
  SiCanva 
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

const UIUXProjects = () => {
  const projects = [
    {
      id: 2,
      category: "App Design",
      categoryLink: "/career/uiux/Hellow.jsx",
      projectTitle: "Hellow : Prioritize People over Platform",
      projectDescription:
        "An innovative asynchronous messaging app idea that redefines communication across different time-zones.",
      projectLink: "/pages/career/uiux/Hellow",
      projectImage: "/ProjectCardHellow.png",
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-2" />,
        <SiAdobeillustrator key="illustrator-2" />,
        <FaSearch key="research-2" />
      ],
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
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-1" />,
        <SiAdobeillustrator key="illustrator-1" />,
        <SiFigma key="figma-1" />
      ],
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
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-4" />,
        <SiAdobeillustrator key="illustrator-4" />,
        <SiFigma key="figma-4" />
      ],
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
      softwareIcons: [
        <SiFigma key="figma-6" />,
        <FaSearch key="research-6" />,
        <SiCanva key="canva-6" />
      ],
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
      softwareIcons: [
        <SiFigma key="figma-5" />,
        <FaSearch key="research-5" />
      ],
    },
    {
      id: 3,
      category: "UI/UX Re-Design",
      categoryLink: "/uiux",
      projectTitle: "Suzanne Collins : My First Website Redesign Case Study",
      projectDescription:
        "My first ever UX/UI Case Study done in school to reimagine the Suzanne Collins website with a user-centered approach and present the books in the most intuitive manner.",
      projectLink:
        "https://www.behance.net/gallery/201546007/UX-UI-Case-Study-for-Suzanne-Collins-Website",
      projectImage: "/ProjectCardPlaceholder.png",
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-3" />,
        <FaSearch key="research-3" />,
        <AiFillApple key="apple-3" />
      ],
    },
  ];

  return (
    // Outer container: position relative for absolute positioning of the swipe arrows
    <div className="featured-projects" style={{ position: "relative" }}>
      {/* Bottom left swipe indicator */}
      <div
        style={{
          position: "absolute",
          left: "10px",
          bottom: "10px",
          fontSize: "2.5rem",
          color: "#2d2d2d5a",
          zIndex: 1000,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        ←
      </div>

      {/* Bottom right swipe indicator */}
      <div
        style={{
          position: "absolute",
          right: "10px",
          bottom: "10px",
          fontSize: "2.5rem",
          color: "#2d2d2d5a",
          zIndex: 1000,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        →
      </div>

      {/* Projects carousel */}
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
            softwareIcons={project.softwareIcons} // Pass the icons array to ProjectCard
          />
        ))}
      </div>
    </div>
  );
};

export default UIUXProjects;
