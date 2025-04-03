import React from "react";
import { Link } from "react-router-dom";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiJavascript,
} from "react-icons/si";
import "../styles/projectCard.css"; // Our main card styling
import PropTypes from "prop-types";

/**
 * Conditionally select icons based on project title or link
 */
function getIconsForProject({ projectTitle, projectLink }) {
  const icons = [];

  // If the link includes "figma.com", show Figma
  if (projectLink.includes("figma.com")) {
    icons.push({
      name: "Figma",
      icon: <SiFigma />,
      // link: projectLink,
    });
  }

  // If the title includes "JavaScript Games", show JavaScript icon
  if (projectTitle.toLowerCase().includes("javascript games")) {
    icons.push({
      name: "JavaScript",
      icon: <SiJavascript />,
      // link: "#",
    });
  }

  // If the title includes "Hellow", add Illustrator icon
  if (projectTitle.toLowerCase().includes("hellow")) {
    icons.push({
      name: "Illustrator",
      icon: <SiAdobeillustrator />,
      // link: "#",
    });
  }

  // If none of the above matched, default to Photoshop
  if (icons.length === 0) {
    icons.push({
      name: "Photoshop",
      icon: <SiAdobephotoshop />,
      // link: "#",
    });
  }

  return icons;
}

function ProjectCard({
  category = "UI/UX Design",
  categoryLink = "/uiux",
  // Provide a fallback main image if none is passed
  projectImage = "/ProjectCardPlaceholder.png",
  // Hover preview image (can be null or undefined if not used)
  projectHoverImage = null,
  projectLink = "/project",
  projectTitle = "Project Case Study for Website Redesign",
  projectDescription = "A complete website redesign focused on modern usability and sleek aesthetics.",
}) {
  // Helper function to check if the link is external
  const isExternal = (url) => url.startsWith("http");

  // Decide how to render the category link
  const CategoryLinkTag = isExternal(categoryLink) ? "a" : Link;
  // Decide how to render the main image link
  const ImageLinkTag = isExternal(projectLink) ? "a" : Link;

  const softwareIcons = getIconsForProject({ projectTitle, projectLink });

  return (
    <article className="project-card">
      {/* Top row: Category + Software Icons */}
      <header className="project-top-row">
        <div className="project-category">
          <CategoryLinkTag
            {...(isExternal(categoryLink)
              ? {
                  href: categoryLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { to: categoryLink })}
          >
            {category}
          </CategoryLinkTag>
        </div>

        <div className="project-software-icons">
          {softwareIcons.map((sw, index) => (
            <a
              key={index}
              href={sw.link}
              className="proeject-software-icon"
              title={sw.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.cloneElement(sw.icon, { size: 24 })}
            </a>
          ))}
        </div>
      </header>

      {/* Main image container with optional hover image */}
      <ImageLinkTag
        {...(isExternal(projectLink)
          ? { href: projectLink, target: "_blank", rel: "noopener noreferrer" }
          : { to: projectLink })}
        className="project-image-container"
      >
        {/* The normal image */}
        <img
          src={projectImage}
          alt={projectTitle}
          className="project-image"
        />

        {/* Hover-preview image (only rendered if projectHoverImage is not null) */}
        {projectHoverImage && (
          <img
            src={projectHoverImage}
            alt={`${projectTitle} Hover Preview`}
            className="project-image-hover"
          />
        )}
      </ImageLinkTag>

      {/* Project details */}
      <section className="project-details">
        <h2 className="project-title">{projectTitle}</h2>
        <p className="project-description">{projectDescription}</p>

        {/* "View Project" link */}
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
ProjectCard.propTypes = {
  category: PropTypes.string,
  categoryLink: PropTypes.string,
  projectImage: PropTypes.string,
  projectHoverImage: PropTypes.string,
  projectLink: PropTypes.string,
  projectTitle: PropTypes.string,
  projectDescription: PropTypes.string,
};

export default ProjectCard;
