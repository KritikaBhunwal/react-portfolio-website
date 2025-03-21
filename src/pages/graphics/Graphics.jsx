import React from "react";
import SectionHeading from "../../components/SectionHeading.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import GraphicsProjects from "../../components/GraphicsProjects.jsx";
import ProcreateDump from "../../components/ProcreateDump.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";

// Import banner images
import GraphicBannerBase from "../../assets/images/GraphicBannerBase.png";
import GraphicBannerTop from "../../assets/images/GraphicBannerTop.png";

// Import Icons
import { 
  FaPaintBrush 
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaudition
} from "react-icons/si";

import "../../styles/graphics.css";

// Section 1: Graphic Design + Showcase Highlights
const graphicDesignHighlights = [
  { bulletPointOne: "Creative Vision", detail: "Innovative concepts that push creative boundaries." },
  { bulletPointOne: "Visual Impact", detail: "Bold, dynamic designs that capture attention." },
  { bulletPointOne: "Technical Excellence", detail: "High-quality execution across select projects." }
];

const graphicDesignIcons = [
  { name: "Photoshop", icon: <SiAdobephotoshop size={24} /> },
  { name: "Illustrator", icon: <SiAdobeillustrator size={24} /> },
];

// Section 2: Artistic Showcase Highlights
const artisticShowcaseHighlights = [
  { bulletPointOne: "Expressive Artistry", detail: "Illustrations that evoke emotion and tell compelling stories." },
  { bulletPointOne: "Innovative Techniques", detail: "A blend of traditional and digital methods for unique visuals." },
  { bulletPointOne: "Attention to Detail", detail: "Meticulous craftsmanship in every illustration." }
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
  { bulletPointOne: "Personal Artistic Growth", detail: "A fusion of traditional art skills and modern animation techniques." }
];

const motionGraphicsIcons = [
  { name: "After Effects", icon: <SiAdobeaftereffects size={24} /> },
  { name: "Premiere Pro", icon: <SiAdobepremierepro size={24} /> },
  { name: "Adobe Audition", icon: <SiAdobeaudition size={24} /> },
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
        icons={graphicDesignIcons} // 🔥 Added Icons
      />
      <GraphicsProjects />

      {/* Section 2: Artistic Showcase */}
      <SectionHeading title="Artistic Showcase" />
      <ProjectContent 
        title="Expressive Illustrations"
        description="A curated collection of illustrations that blend traditional techniques with modern digital artistry to evoke emotion and inspire imagination."
        highlights={artisticShowcaseHighlights}
        icons={artisticShowcaseIcons} // 🔥 Added Icons
      />
      <ProcreateDump />

      {/* Section 3: Motion Graphics Project */}
      <SectionHeading title="Creative Expression through Motion Graphics" />
      <ProjectContent 
        title="Illustrations in Motion: A Music Video Experiment"
        description="As part of a school project and my ongoing artistic journey, I brought my illustrations to life by creating a motion graphics interpretation of a music video. This project was an exploration of movement, rhythm, and storytelling through animation. Every frame was carefully crafted to reflect the song’s energy, emotion, and narrative. It was an exciting fusion of my passion for illustration, animation, and music."
        highlights={motionGraphicsHighlights}
        icons={motionGraphicsIcons} // 🔥 Added Icons
      />

      {/* YouTube Video Embed */}
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
    </div>
  );
};

export default Graphics;
