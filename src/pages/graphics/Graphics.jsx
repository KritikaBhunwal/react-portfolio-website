// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet, Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import GraphicsProjects from "../../components/GraphicsProjects.jsx";
import ProcreateDump from "../../components/ProcreateDump.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";

// Import banner images
import GraphicBannerBase from "../../assets/images/GraphicBannerBase.png";
import GraphicBannerTop from "../../assets/images/GraphicBannerTop.png";

// Import Icons
import { FaPaintBrush } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaudition,
} from "react-icons/si";

import "../../styles/graphics.css";

// Section 1: Graphic Design + Showcase Highlights
const graphicDesignHighlights = [
  { bulletPointOne: "Creative Vision", detail: "Innovative concepts that push creative boundaries." },
  { bulletPointOne: "Visual Impact", detail: "Bold, dynamic designs that capture attention." },
  { bulletPointOne: "Technical Excellence", detail: "High-quality execution across select projects." },
];

const graphicDesignIcons = [
  { name: "Photoshop", icon: <SiAdobephotoshop size={24} /> },
  { name: "Illustrator", icon: <SiAdobeillustrator size={24} /> },
];

// Section 2: Artistic Showcase Highlights
const artisticShowcaseHighlights = [
  { bulletPointOne: "Expressive Artistry", detail: "Illustrations that evoke emotion and tell compelling stories." },
  { bulletPointOne: "Innovative Techniques", detail: "A blend of traditional and digital methods for unique visuals." },
  { bulletPointOne: "Attention to Detail", detail: "Meticulous craftsmanship in every illustration." },
];

const artisticShowcaseIcons = [
  { name: "Procreate", icon: <FaPaintBrush size={24} /> },
  { name: "Photoshop", icon: <SiAdobephotoshop size={24} /> },
  { name: "Illustrator", icon: <SiAdobeillustrator size={24} /> },
];

// Section 3: Motion Graphics Project Highlights
const motionGraphicsHighlights = [
  { bulletPointOne: "Storytelling through Motion", detail: "Illustrations transformed into dynamic visual narratives." },
  { bulletPointOne: "Rhythmic Synchronization", detail: "Seamless motion paired with the beats and emotions of the music." },
  { bulletPointOne: "Personal Artistic Growth", detail: "A fusion of traditional art skills and modern animation techniques." },
];

const motionGraphicsIcons = [
  { name: "After Effects", icon: <SiAdobeaftereffects size={24} /> },
  { name: "Premiere Pro", icon: <SiAdobepremierepro size={24} /> },
  { name: "Adobe Audition", icon: <SiAdobeaudition size={24} /> },
];

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Graphic Design & Artistic Showcase",
  "description": "Explore a comprehensive portfolio of innovative graphic design, expressive illustrations, and dynamic motion graphics that bring visual storytelling to life.",
  "url": "https://www.kritikabhunwal.com/graphics"
};

const Graphics = () => {
  return (
    <>
      <SEO
        title="Graphic Design & Artistic Showcase"
        description="Explore a comprehensive portfolio of innovative graphic design, expressive illustrations, and dynamic motion graphics that bring visual storytelling to life."
        keywords="graphic design, artistic showcase, motion graphics, illustration, creative, digital art"
        url="https://www.kritikabhunwal.com/graphics"
        image="https://kritikabhunwal.com/assets/graphics-banner.png"
        type="website"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      <div className="graphics-container">
        <ImageBanner
          baseImage={GraphicBannerBase}
          topImage={GraphicBannerTop}
          baseAlt="Base Graphics Banner"
          topAlt="Top Graphics Banner"
          bannerClass="image-banner"
        />

        {/* Optional link to subpage */}
        <div className="subpage-links">
          <Link to="logo-design" className="subpage-link">Go to Logo Design Showcase</Link>
        </div>

        {/* Section 1: Graphic Design + Showcase */}
        <SectionHeading title="Graphic Design Portfolio" />
        <ProjectContent
          title="Dynamic Visual Communication"
          description="A comprehensive exploration of innovative graphic design concepts along with a curated selection of projects that showcase our creative vision and technical excellence."
          highlights={graphicDesignHighlights}
          icons={graphicDesignIcons}
        />
        <GraphicsProjects />

        {/* Section 2: Artistic Showcase */}
        <SectionHeading title="Artistic Showcase" />
        <ProjectContent
          title="Expressive Illustrations"
          description="A curated collection of illustrations that blend traditional techniques with modern digital artistry to evoke emotion and inspire imagination."
          highlights={artisticShowcaseHighlights}
          icons={artisticShowcaseIcons}
        />
        <ProcreateDump />

        {/* Section 3: Motion Graphics Project */}
        <SectionHeading title="Creative Expression through Motion Graphics" />
        <ProjectContent
          title="Illustrations in Motion: A Music Video Experiment"
          description="As part of a school project and my ongoing artistic journey, I brought my illustrations to life by creating a motion graphics interpretation of a music video. This project was an exploration of movement, rhythm, and storytelling through animation. Every frame was carefully crafted to reflect the song’s energy, emotion, and narrative. It was an exciting fusion of my passion for illustration, animation, and music."
          highlights={motionGraphicsHighlights}
          icons={motionGraphicsIcons}
        />
        <SectionHeading title="Youtube Video" />

        {/* Embedded video */}
        <div className="video-container">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/lvmDSN6cZfc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Subpage content rendered here */}
        <Outlet />
      </div>
    </>
  );
};

export default Graphics;
