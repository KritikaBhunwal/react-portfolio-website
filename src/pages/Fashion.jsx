import React, { useEffect } from "react";
import SectionHeading from "../components/SectionHeading";
import MykonosCollection from "../components/MykonosCollection.jsx";
import Testimonials from "../components/Testimonial.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";

import "../styles/fashion.css";
import ProjectContent from "../components/ProjectContent.jsx";
import Gallery from "../components/Gallery.jsx";
import PortfolioGallery from "../components/PortfolioGallery.jsx";

const Fashion = () => {
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
    <div className="fashion-container">
      <div className="image-banner">
        <img
          src="/src/assets/images/FashionBannerBase.png"
          alt="Base Banner"
          className="base-image"
        />
        <img
          src="/src/assets/images/FashionBannerTop.png"
          alt="Top Banner"
          className="top-image"
        />
      </div>
      <SectionHeading title="Fashion Styling" />
      <ProjectContent />
      <Gallery />

      <SectionHeading title="Fashion Design" />
      <ProjectContent
        title="Contemporary Fashion Design"
        description="A collection of contemporary fashion designs inspired by the vibrant culture and colors of Mykonos island. The collection features a range of resortwear and holiday essentials designed for the modern women." />
      <SectionHeading title="Highlights from Mykonos Collection SS18" />
      <MykonosCollection />
      <PortfolioGallery />
      <SectionHeading title="Kind Words" />
      <Testimonials />
      {/* Related Projects */}
      <SectionHeading title="Related Projects" />
      <FeaturedProjects />
    </div>
  );
};

export default Fashion;
