import React from "react";
import { Link } from "react-router-dom";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiJavascript,
} from "react-icons/si";
import "../styles/projectCard.css";
import ProjectCardImage from "/ProjectCardPlaceholder.png";

/**
 * Decide which icons to show based on the project info.
 * @param {string} projectTitle - Title of the project (for detecting keywords like "Hellow" or "JavaScript Games").
 * @param {string} projectLink - Link of the project (for detecting "figma.com").
 * @returns An array of icon objects with `name`, `icon`, and `link`.
 */
function getIconsForProject({ projectTitle, projectLink }) {
  // We'll build an array of icons based on conditions:
  const icons = [];

  // 1) If the link includes "figma.com", show Figma
  if (projectLink.includes("figma.com")) {
    icons.push({
      name: "Figma",
      icon: <SiFigma />,
      link: projectLink, // or "#"
    });
  }

  // 2) If the title includes "JavaScript Games", show JavaScript icon
  if (projectTitle.toLowerCase().includes("javascript games")) {
    icons.push({
      name: "JavaScript",
      icon: <SiJavascript />,
      link: "#",
    });
  }

  // 3) If the title includes "Hellow", add Illustrator icon
  if (projectTitle.toLowerCase().includes("hellow")) {
    icons.push({
      name: "Illustrator",
      icon: <SiAdobeillustrator />,
      link: "#",
    });
  }

  // 4) If none of the above conditions matched,
  //    or if we want to *always* show a fallback, add Photoshop
  if (icons.length === 0) {
    icons.push({
      name: "Photoshop",
      icon: <SiAdobephotoshop />,
      link: "#",
    });
  }

  return icons;
}

function ProjectCard({
  category = "UX/UI Design",
  categoryLink = "/uiux",
  projectImage = ProjectCardImage,
  projectLink = "/project",
  projectTitle = "Project Case Study for Website Redesign",
  projectDescription = "A complete website redesign focused on modern usability and sleek aesthetics.",
}) {
  // Helper function to check if link is external
  const isExternal = (url) => url.startsWith("http");

  // Decide how to render the top category link
  const CategoryLink = isExternal(categoryLink) ? "a" : Link;
  // Decide how to render the project image link
  const ImageLink = isExternal(projectLink) ? "a" : Link;

  // Dynamically get the icons
  const softwareIcons = getIconsForProject({ projectTitle, projectLink });

  return (
    <article className="project-card">
      {/* Top row: category pill (left), software icons (right) */}
      <header className="project-top-row">
        <div className="project-category">
          <CategoryLink
            {...(isExternal(categoryLink)
              ? { href: categoryLink, target: "_blank", rel: "noopener noreferrer" }
              : { to: categoryLink })}
          >
            {category}
          </CategoryLink>
        </div>

        {/* Software icons */}
        <div className="software-icons">
          {softwareIcons.map((sw, index) => (
            <a
              key={index}
              href={sw.link}
              className="software-icon"
              title={sw.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Set size=24, but also ensure background is white in CSS */}
              {React.cloneElement(sw.icon, { size: 24 })}
            </a>
          ))}
        </div>
      </header>

      {/* Image container */}
      <ImageLink
        {...(isExternal(projectLink)
          ? { href: projectLink, target: "_blank", rel: "noopener noreferrer" }
          : { to: projectLink })}
        className="project-image-container"
      >
        <img src={projectImage} alt={projectTitle} className="project-image" />
      </ImageLink>

      {/* Project details */}
      <section className="project-details">
        <h2 className="project-title">{projectTitle}</h2>
        <p className="project-description">{projectDescription}</p>

        {/* 1) Show the project link below details: */}
        {isExternal(projectLink) ? (
          <a
            href={projectLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        ) : (
          <Link to={projectLink} className="project-link">
            View Project
          </Link>
        )}
      </section>
    </article>
  );
}

export default ProjectCard;
