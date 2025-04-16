import React from "react";
import { Outlet, Link } from "react-router-dom";
import SEO from "../../../components/SEO.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import ProjectContent from "../../../components/ProjectContent.jsx";
import GraphicsProjects from "../../../components/GraphicsProjects.jsx";
import ProcreateDump from "../../../components/ProcreateDump.jsx";
import ImageBanner from "../../../components/ImageBanner.jsx";
import WorkTogether from "../../../components/WorkTogether.jsx";

// Import banner images
import GraphicBannerBase from "/GraphicBannerBase.png";
import GraphicBannerTop from "/GraphicBannerTop.png";

// Import Icons
import { FaPaintBrush } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaudition,
} from "react-icons/si";

import "../../../styles/graphics.css";

/* ────────────────────────────────────────────────────
   Rich JSON‑LD (matches Home / Fashion / Games style)
   ──────────────────────────────────────────────────── */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.kritikabhunwal.com/#person",
      name: "Kritika Bhunwal",
      jobTitle: "Graphic & UI/UX Designer",
      url: "https://www.kritikabhunwal.com/",
      sameAs: [
        "https://www.linkedin.com/in/kritikabhunwal",
        "https://www.instagram.com/kritikabhunwal",
        "https://www.behance.net/kritikabhunwal",
        "https://www.facebook.com/kritika.bhunwal",
        "https://www.instagram.com/pseudo_nova/",
        "https://www.youtube.com/@psuedo_nova"
      ],
      description:
        "Multidisciplinary designer specialising in graphics, illustration, and motion."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kritikabhunwal.com/#website",
      url: "https://www.kritikabhunwal.com/",
      name: "Kritika Bhunwal",
      publisher: { "@id": "https://www.kritikabhunwal.com/#person" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.kritikabhunwal.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Graphics",
          item: "https://www.kritikabhunwal.com/graphics"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.kritikabhunwal.com/graphics",
      name: "Graphic Design & Artistic Showcase",
      description:
        "Portfolio featuring graphic design, digital illustrations, and motion‑graphics experiments by Kritika Bhunwal.",
      url: "https://www.kritikabhunwal.com/graphics"
    },
    {
      "@type": "CreativeWork",
      "@id": "https://www.kritikabhunwal.com/graphics#motion-video",
      name: "Illustrations in Motion: A Music‑Video Experiment",
      creator: { "@id": "https://www.kritikabhunwal.com/#person" },
      description:
        "A visual experiment fusing illustration, music, and animation into a cohesive motion‑graphic project.",
      encodingFormat: "video/mp4",
      thumbnailUrl: "https://kritikabhunwal.com/assets/graphics-banner.png",
      url: "https://www.youtube.com/watch?v=lvmDSN6cZfc",
      datePublished: "2025-01-01"
    }
  ]
};

/* ------------- highlight / icon arrays (unchanged) ------------- */
const graphicDesignHighlights = [
  { bulletPointOne: "Creative Vision", detail: "Innovative concepts that push creative boundaries." },
  { bulletPointOne: "Visual Impact", detail: "Bold, dynamic designs that capture attention." },
  { bulletPointOne: "Technical Excellence", detail: "High-quality execution across select projects." },
];

const graphicDesignIcons = [
  { name: "Photoshop", icon: <SiAdobephotoshop size={24} /> },
  { name: "Illustrator", icon: <SiAdobeillustrator size={24} /> },
];

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

const Graphics = () => {
  return (
    <>
      {/* ───────────── SEO component with richer meta ───────────── */}
      <SEO
        title="Graphic Design, Illustration & Motion Graphics | Kritika Bhunwal"
        description="Discover bold graphic design, expressive illustrations and dynamic motion‑graphics projects by Kritika Bhunwal. Explore creative storytelling that blends Adobe tools, Procreate artistry, and technical excellence."
        keywords="graphic design portfolio, digital illustration, motion graphics, procreate art, Adobe After Effects, Photoshop, Illustrator, Kritika Bhunwal, visual storytelling"
        url="https://www.kritikabhunwal.com/graphics"
        image="https://kritikabhunwal.com/assets/graphics-banner.png"
        type="website"
        locale="en_US"
        siteName="Kritika Bhunwal"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      {/* --------------------- visible content (unchanged) --------------------- */}
      <div className="graphics-container">
        <ImageBanner
          baseImage={GraphicBannerBase}
          topImage={GraphicBannerTop}
          baseAlt="Base Graphics Banner"
          topAlt="Top Graphics Banner"
          bannerClass="image-banner"
        />

        <SectionHeading title="Graphic Design Portfolio" />
        <ProjectContent
          title="Dynamic Visual Communication"
          description="A comprehensive exploration of innovative graphic design concepts along with a curated selection of projects that showcase creative vision and technical excellence."
          highlights={graphicDesignHighlights}
          icons={graphicDesignIcons}
        />
        <GraphicsProjects />

        <SectionHeading title="Artistic Showcase" />
        <ProjectContent
          title="Expressive Illustrations"
          description="A curated collection of illustrations that blend traditional techniques with modern digital artistry to evoke emotion and inspire imagination."
          highlights={artisticShowcaseHighlights}
          icons={artisticShowcaseIcons}
        />
        <ProcreateDump />

        <SectionHeading title="Creative Expression through Motion Graphics" />
        <ProjectContent
          title="Illustrations in Motion: A Music‑Video Experiment"
          description="As part of a school project and my ongoing artistic journey, I brought my illustrations to life through motion graphics. This experiment explores movement, rhythm and narrative in animation."
          highlights={motionGraphicsHighlights}
          icons={motionGraphicsIcons}
        />

        <SectionHeading title="YouTube Video" />
        <div className="video-container">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/lvmDSN6cZfc"
            title="Illustrations in Motion – YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <WorkTogether />
      </div>
    </>
  );
};

export default Graphics;
