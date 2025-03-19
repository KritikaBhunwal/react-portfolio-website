import React, { useEffect } from "react";
import SectionHeading from "../../components/SectionHeading";
import ProjectContent from "../../components/ProjectContent.jsx";
import GraphicsProjects from "../../components/GraphicsProjects.jsx";

// Import banner images
import GraphicBannerBase from "../../assets/images/GraphicBannerBase.png";
import GraphicBannerTop from "../../assets/images/GraphicBannerTop.png";

import "../../styles/graphics.css";
import ProcreateDump from "../../components/ProcreateDump.jsx";
import WorkTogether from "../../components/WorkTogether.jsx";


const Graphics = () => {
  useEffect(() => {
    const banner = document.querySelector(".image-banner");
    if (!banner) return;
    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      banner.style.setProperty("--x", `${x}px`);
      banner.style.setProperty("--y", `${y}px`);
    };

    banner.addEventListener("mousemove", handleMouseMove);
    return () => banner.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="graphics-container">
      <div className="image-banner">
        <img
          src={GraphicBannerBase}
          alt="Base Graphics Banner"
          className="base-image"
        />
        <img
          src={GraphicBannerTop}
          alt="Top Graphics Banner"
          className="top-image"
        />
      </div>
      <SectionHeading title="Graphic Design" />
      <ProjectContent 
        title="Dynamic Visual Communication" 
        description="An innovative exploration of visual storytelling, merging typography, color, and layout to craft engaging designs for diverse media platforms." 
        highlights={[
          "<strong>Creativity:</strong> Unleashing artistic potential.",
          "<strong>Innovation:</strong> Cutting-edge design solutions.",
          "<strong>Impact:</strong> Bold visuals that captivate audiences."
        ]} 
      />
      <SectionHeading title= "Project Showcase" />
      <GraphicsProjects />
      <SectionHeading title="Illustration" />
      <ProjectContent 
        title="Artistic Expression" 
        description="A diverse collection of illustrations, from digital art to traditional media, showcasing a range of styles and techniques." 
        highlights={[
          "<strong>Imagination:</strong> Bringing ideas to life.",
          "<strong>Detail:</strong> Precision and craftsmanship.",
          "<strong>Emotion:</strong> Evoking feelings through art."
        ]}
      />
      <SectionHeading title="Illustration Showcase" />
      <ProcreateDump />
      <SectionHeading title="Like my work?" />
      <WorkTogether />
    </div>
  );
};

export default Graphics;
