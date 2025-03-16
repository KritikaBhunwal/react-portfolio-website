import React, { useEffect } from "react";
import SectionHeading from "../../components/SectionHeading.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
// import Gallery from "../../components/Gallery.jsx";
// import PortfolioGallery from "../../components/PortfolioGallery.jsx";
import Testimonials from "../../components/Testimonial.jsx";
import FeaturedProjects from "../../components/FeaturedProjects.jsx";

// Import UX/UI banner images
import UXUIBannerBase from "../../assets/images/UXUIBannerBase.png";
import UXUIBannerTop from "../../assets/images/UXUIBannerTop.png";

import "../../styles/uiux.css";

const UXUI = () => {
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
    <div className="uxui-container">
      <div className="image-banner">
        <img
          src={UXUIBannerBase}
          alt="Base UX/UI Banner"
          className="base-image"
        />
        <img
          src={UXUIBannerTop}
          alt="Top UX/UI Banner"
          className="top-image"
        />
      </div>
      <SectionHeading title="UX / UI Design" />
      <ProjectContent
        title="User-Centered Digital Experiences"
        description="A comprehensive approach to designing intuitive digital products that blend aesthetics with seamless usability. Focusing on interactive design and functionality."
        highlights={[
          "<strong>User Focus:</strong> Empathy-driven design process.",
          "<strong>Accessibility:</strong> Inclusive and accessible interfaces.",
          "<strong>Innovation:</strong> Cutting-edge design trends."
        ]}
      />
      {/* <Gallery />
      <SectionHeading title="Digital Product Portfolio" />
      <PortfolioGallery /> */}
      <SectionHeading title="Client Testimonials" />
      <Testimonials />
      <SectionHeading title="Featured Projects" />
      <FeaturedProjects />
    </div>
  );
};

export default UXUI;
