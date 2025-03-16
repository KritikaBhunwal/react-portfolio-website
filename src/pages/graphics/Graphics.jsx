import React, { useEffect } from "react";
import SectionHeading from "../../components/SectionHeading";
import FeaturedProjects from "../../components/FeaturedProjects.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import GraphicsProjects from "../../components/GraphicsProjects.jsx";
import Testimonials from "../../components/Testimonial.jsx";

// Import banner images
import GraphicBannerBase from "../../assets/images/GraphicBannerBase.png";
import GraphicBannerTop from "../../assets/images/GraphicBannerTop.png";

import "../../styles/graphics.css";


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
      <SectionHeading title="Client Testimonials" />
      <Testimonials />
      <SectionHeading title="Featured Projects" />
      <FeaturedProjects />
    </div>
  );
};

export default Graphics;
