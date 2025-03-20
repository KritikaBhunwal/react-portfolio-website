import React from "react";
import SectionHeading from "../../components/SectionHeading.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import GraphicsProjects from "../../components/GraphicsProjects.jsx";
import ProcreateDump from "../../components/ProcreateDump.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";

// Import banner images
import GraphicBannerBase from "../../assets/images/GraphicBannerBase.png";
import GraphicBannerTop from "../../assets/images/GraphicBannerTop.png";

import "../../styles/graphics.css";

// Section 1: Graphic Design + Showcase Highlights
const graphicDesignHighlights = [
  { bulletPointOne: "Creative Vision", detail: "Innovative concepts that push creative boundaries." },
  { bulletPointOne: "Visual Impact", detail: "Bold, dynamic designs that capture attention." },
  { bulletPointOne: "Technical Excellence", detail: "High-quality execution across select projects." }
];

// Section 2: Artistic Showcase Highlights
const artisticShowcaseHighlights = [
  { bulletPointOne: "Expressive Artistry", detail: "Illustrations that evoke emotion and tell compelling stories." },
  { bulletPointOne: "Innovative Techniques", detail: "A blend of traditional and digital methods for unique visuals." },
  { bulletPointOne: "Attention to Detail", detail: "Meticulous craftsmanship in every illustration." }
];

const Graphics = () => {
  return (
    <div className="graphics-container">
      <ImageBanner 
        baseImage={GraphicBannerBase}
        topImage={GraphicBannerTop}
        baseAlt="Base Graphics Banner"
        topAlt="Top Graphics Banner"
        bannerClass="image-banner"
      />

      {/* Section 1: Graphic Design + Showcase */}
      <SectionHeading title="Graphic Design Portfolio" />
      <ProjectContent 
        title="Dynamic Visual Communication"
        description="A comprehensive exploration of innovative graphic design concepts along with a curated selection of projects that showcase our creative vision and technical excellence."
        highlights={graphicDesignHighlights}
      />
      <GraphicsProjects />

      {/* Section 2: Artistic Showcase */}
      <SectionHeading title="Artistic Showcase" />
      <ProjectContent 
        title="Expressive Illustrations"
        description="A curated collection of illustrations that blend traditional techniques with modern digital artistry to evoke emotion and inspire imagination."
        highlights={artisticShowcaseHighlights}
      />
      <ProcreateDump />
    </div>
  );
};

export default Graphics;
