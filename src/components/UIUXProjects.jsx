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
      id: 1,
      category: "Web Design",
      // categoryLink: "/uiux",
      projectTitle: (
        <a href="/career/uiux/portfolio" style={{ textDecoration: "none", color: "inherit" }}>
          Kritika Bhunwal : Portfolio Website
        </a>
      ),
      projectDescription:
        "Showcasing the process followed for designing and development of my portfolio website from initial ideation to final design and deployment.",
      projectLink:
        "/career/uiux/portfolio",
      projectImage: "/ProjectCardPortfolio.png",
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-1" />,
        <SiAdobeillustrator key="illustrator-1" />,
        <SiFigma key="figma-1" />
      ],
        },
        {
      id: 2,
      category: "App Design",
      // categoryLink: "/career/uiux/Hellow.jsx",
      projectTitle: (
        <a href="/career/uiux/hellow" style={{ textDecoration: "none", color: "inherit" }}>
          Hellow : Prioritize People over Platform
        </a>
      ),
      projectDescription:
        "An innovative asynchronous messaging app idea that redefines communication among loved ones living across different time-zones.",
      projectLink: "/career/uiux/hellow",
      projectImage: "/ProjectCardHellow.png",
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-2" />,
        <SiAdobeillustrator key="illustrator-2" />,
        <FaSearch key="research-2" />
      ],
    },
    {
      id: 4,
      category: "UI/UX Design",
      // categoryLink: "/uiux",
      projectTitle: (
        <a href="/career/uiux/portfolio" style={{ textDecoration: "none", color: "inherit" }}>
          Plant Easy : Figma Prototype
        </a>
      ),
      projectDescription:
        "Discover an app concept designed in Figma in 3 hours to solve the problem of deforestation, so that you can plant trees remotely!",
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
      category: "User Testing",
      // categoryLink: "/uiux",
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
      category: "UI/UX Research",
      // categoryLink: "/uiux",
      projectTitle: "Furry Tales Pet : Website Redesign Challenge",
      projectDescription:
        "A 2-Day redesign challenge participation as a group of four that focused on enhancing the user experience.",
      projectLink: "https://tinalin.ca/projects/furry-tales",
      projectImage: "/ProjectCardFurry.png",
      softwareIcons: [
        <SiFigma key="figma-5" />,
        <FaSearch key="research-5" />
      ],
    },
        {
          id: "10",
          category: "Information Architecture",
          projectTitle: (
            <a
              href="https://www.figma.com/proto/69l5xZOXjWkdHJ8xZPlQA7/PlantEasy?node-id=84-391&p=f&t=UPs1ZUn9L95Tcf8v-1&scaling=scale-down&content-scaling=fixed&page-id=84%3A151&starting-point-node-id=84%3A391"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Volunteer on the Go : Information Architecture
            </a>
          ),
          projectDescription: "Checkout on Canva, my first ever Information Architecture Website Design Process showcase presentation. Here I show the process I followed to create a website for a non-profit organization that connects volunteers with local organizations in need of help.",
          projectLink:
            "https://www.figma.com/proto/69l5xZOXjWkdHJ8xZPlQA7/PlantEasy?node-id=84-391&p=f&t=UPs1ZUn9L95Tcf8v-1&scaling=scale-down&content-scaling=fixed&page-id=84%3A151&starting-point-node-id=84%3A391",
          projectImage: "/ProjectCardPlaceholder.png",
          softwareIcons: [<SiCanva key="canva-6" />, <FaSearch key="research-2" />],
        },
        {
          id: "12",
          category: "UI/UX Design",
          projectTitle: (
            <a
              href="https://docs.google.com/presentation/d/1CoPMHxDY-hIW0-w9dOL0T4tLs1zAkQRNpdit5GE5VXQ/edit?usp=sharing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Foodie Junction : Website Design
            </a>
          ),
          projectDescription: "An effort to bring all foodies together through a website - Foodie Junction, where you can find the places to eat out and reserve your table ahead of time. This project was done in a group of 3 as part of our UI/UX Design course. Checkout the google presentation to see the process we followed.",
          projectLink:
            "https://docs.google.com/presentation/d/1CoPMHxDY-hIW0-w9dOL0T4tLs1zAkQRNpdit5GE5VXQ/edit?usp=sharing",
          projectImage: "/ProjectCardPlaceholder.png",
          softwareIcons: [
            <SiAdobephotoshop key="photoshop-4" />,
            <FaSearch key="research-4" />,
            <SiFigma key="figma-4" />
          ],
        },
        {
          id: "9",
          category: "UI/UX Design",
          projectTitle: (
            <a
              href="https://www.canva.com/design/DAGIciY27_Y/gtVRbEh9RAnIkuRfF8YVPg/view?utm_content=DAGIciY27_Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68ff1b515a"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Smoking Gun Inc : UI/UX Improvements
            </a>
          ),
          projectDescription: "Implementing UI/UX Principles to find the scope of improvement on the website and redesign it for Smoking Gun Interactive Gaming Studio to improve the effectiveness of their content, increase game downloads and traction across their channels.",
          projectLink:
            "https://www.canva.com/design/DAGIciY27_Y/gtVRbEh9RAnIkuRfF8YVPg/view?utm_content=DAGIciY27_Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68ff1b515a",
          projectImage: "/ProjectCardPlaceholder.png",
          softwareIcons: [<SiCanva key="canva-6" />, <FaSearch key="research-2" />],
        },
    {
      id: 3,
      category: "UI/UX Re-Design",
      // categoryLink: "/uiux",
      projectTitle: "Suzanne Collins : My First Website Redesign Case Study",
      projectDescription:
        "My first ever UX/UI Case Study done in school to reimagine the Suzanne Collins website with a user-centered approach and present the books in the most intuitive manner. Check out the case study on Behance to see how I approached the project.",
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
    <div className="uiuxfeatured-projects" style={{ position: "relative" }}>
      {/* Bottom left swipe indicator */}
      {/* <div
        style={{
          position: "absolute",
          left: "20px",
          bottom: "10px",
          fontSize: "2rem",
          color: "#3d3d3d5a",
          zIndex: 1000,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        ←
      </div> */}

      {/* Bottom right swipe indicator */}
      {/* <div
        style={{
          position: "absolute",
          right: "20px",
          bottom: "10px",
          fontSize: "2rem",
          color: "#3d3d3d5a",
          zIndex: 1000,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        →
      </div> */}

      {/* Projects carousel */}
      <div
        className="uiuxfeatured-projects-carousel"
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
