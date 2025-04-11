import React from "react";
import "../styles/allProjects.css";
// Import icons (as used in your projects data)
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiFigma, 
  SiCanva 
} from "react-icons/si";
import { FaReact, FaSearch } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      category: "Web Design",
      projectTitle: (
        <a
          href="/career/uiux/portfolio"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Kritika Bhunwal : Portfolio Website
        </a>
      ),
      projectDescription:
        "Showcasing portfolio website design process.",
      projectLink: "/career/uiux/portfolio",
      projectImage: "/ProjectCardPortfolio.png",
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-1" />,
        <SiAdobeillustrator key="illustrator-1" />,
        <SiFigma key="figma-1" />
      ],
    },
    {
      id: 7,
      category: "Web Development",
      projectTitle: (
        <a
          href="/career/front-end/JavaScriptGames"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Arcade Games Revamp : React Project
        </a>
      ),
      projectDescription:
        "Redesigning 90's Arcade games using React.",
      projectLink: "/career/front-end/JavaScriptGames",
      projectImage: "/ProjectCardGames.png",
      softwareIcons: [
        <SiAdobephotoshop key="photoshop-1" />,
        <SiAdobeillustrator key="illustrator-1" />,
        <FaReact key="react-1" />,
        <SiFigma key="figma-1" />
      ],
    },
    {
      id: 2,
      category: "App Design",
      projectTitle: (
        <a
          href="/career/uiux/hellow"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Hellow : Prioritize People over Platform
        </a>
      ),
      projectDescription:
        "An innovative asynchronous messaging app idea.",
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
      projectTitle: (
        <a
          href="/career/uiux/portfolio"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Plant Easy : Figma Prototype
        </a>
      ),
      projectDescription:
        "Deforestation app concept to promote remote planting.",
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
      projectTitle: "Moja Coffee : Website Improvement Group Project",
      projectDescription:
        "Improving Moja Coffee website using core UI/UX principles.",
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
      id: 8,
      category: "QA Testing",
      projectTitle: "The Solar System : QA Testing Project",
      projectDescription:
        "Researched and Designed the initial landing page and QA testing process.",
      projectLink: "https://www.figma.com/proto/aodpcYhkWYUwtttaCWH1ti/Solar-System-QA-Project?node-id=1-2&t=jEY0vR52TOmHOXnw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      projectImage: "/ProjectCardMoon.png",
      softwareIcons: [
        <SiFigma key="figma-5" />,
        <FaSearch key="research-5" />
      ],
    },
    {
      id: 5,
      category: "UI/UX Research",
      projectTitle: "Furry Tales Pet : Website Redesign Challenge",
      projectDescription:
        "FLUI 2025 : A website redesign challenge.",
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
      projectTitle: "Suzanne Collins : My First Website Redesign Case Study",
      projectDescription:
        "An insightful take on Suzanne Collins' website.",
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

  // Duplicate the projects array to ensure continuous marquee repetition.
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="all-projects-container">
      <div className="marquee-container">
        <div className="marqueeProjects">
          {duplicatedProjects.map((project, idx) => (
            <div className="project-card" key={`${project.id}-${idx}`}>
              {/* Clickable Project Image */}
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="marquee-image"
                  src={project.projectImage}
                  alt={
                    typeof project.projectTitle === "string"
                      ? project.projectTitle
                      : "Project"
                  }
                />
              </a>
              {/* Clickable Project Title */}
              <h3 className="project-title">
                {typeof project.projectTitle === "string" ? (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {project.projectTitle}
                  </a>
                ) : (
                  project.projectTitle
                )}
              </h3>
              {/* Project Description */}
              <p className="project-description">
                {project.projectDescription}
              </p>
              {/* Software/Tool Icons */}
              <div className="software-icons">
                {project.softwareIcons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
