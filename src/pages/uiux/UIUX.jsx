import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import UIUXProjects from "../../components/UIUXProjects.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";

// Images
import UXUIBannerBase from "/UXUIBannerBase.png";
import UXUIBannerTop from "/UXUIBannerTop.png";

import "../../styles/uiux.css";

// SEO Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "UI/UX Design – User-Friendly Digital Experiences",
  description:
    "Explore innovative UI/UX designs that prioritize user experience, accessibility, and modern aesthetics.",
  url: "https://www.kritikabhunwal.com/uiux",
};

const UIUX = () => {
  return (
    <>
      <SEO
        title="UI/UX Design – User-Friendly Digital Experiences"
        description="As a UI/UX Designer, I create digital products that are easy to use, visually appealing, and functional. My designs prioritize user experience, accessibility, and innovation."
        keywords="UI UX, digital design, user experience, accessibility, innovation, responsive design, modern UI, creative UX"
        url="https://www.kritikabhunwal.com/uiux"
        image="https://kritikabhunwal.com/assets/uiux-banner.png"
        type="website"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      <main className="uxui-container">
        {/* Hero Banner */}
        <ImageBanner
          baseImage={UXUIBannerBase}
          topImage={UXUIBannerTop}
          baseAlt="Base UX/UI Banner"
          topAlt="Top UX/UI Banner"
          bannerClass="image-banner"
        />

        {/* Overview */}
        <SectionHeading title="UI / UX Design" />
        <ProjectContent
          title="Creating User-Friendly Digital Experiences"
          description="As a UI/UX Designer, I design digital products that are easy to use, visually appealing, and functional. The goal is to make every interaction smooth and enjoyable. Whether it's implementing a new feature or improving an existing one, my workflow seamlessly blends expertise with requirements to produce top-quality results."
          highlights={[
            {
              bulletPointOne: "User First",
              detail: "I focus on understanding what users need and design solutions that fit their real-world challenges.",
            },
            {
              bulletPointOne: "Accessible for Everyone",
              detail: "My designs follow accessibility standards, ensuring everyone can use them without barriers.",
            },
            {
              bulletPointOne: "Always Innovating",
              detail: "I stay updated with the latest trends and technologies to create fresh, modern designs.",
            },
            {
              bulletPointOne: "Works Everywhere",
              detail: "My designs look great and work perfectly on any device, from phones to desktops.",
            },
            {
              bulletPointOne: "Telling Your Story",
              detail: "I use visuals and design to share your brand's story in a way that connects with your audience.",
            },
          ]}
        />

        {/* Project Showcase */}
        <SectionHeading title="UI UX Product Showcase" />
        <UIUXProjects />

        {/* Subpage CTA */}
        <div className="uxui-subpage-cta">
          <Link to="/uiux/javascript-games" className="subpage-link" aria-label="View JavaScript Games Project">
            → View JavaScript Games Project
          </Link>
        </div>
      </main>
    </>
  );
};

export default UIUX;
