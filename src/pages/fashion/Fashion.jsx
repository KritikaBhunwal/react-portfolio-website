import React, { useEffect, useRef } from "react";
import SectionHeading from "../../components/SectionHeading";
import MykonosCollection from "../../components/MykonosCollection.jsx";
import Testimonials from "../../components/Testimonial.jsx";
import FeaturedProjects from "../../components/FeaturedProjects.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import Gallery from "../../components/Gallery.jsx";
import PortfolioGallery from "../../components/PortfolioGallery.jsx";

import "../../styles/fashion.css";

const Fashion = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      banner.style.setProperty("--x", `${x}px`);
      banner.style.setProperty("--y", `${y}px`);
    };

    banner.addEventListener("mousemove", handleMouseMove);
    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Reusable highlights for Fashion Styling
  const fashionStylingHighlights = [
    { bulletPointOne: "Personalized Looks", detail: "Ensembles tailored to reflect individual style and personality." },
    { bulletPointOne: "Seasonal Trends", detail: "Incorporates the latest seasonal trends and forecasts." },
    { bulletPointOne: "Versatility", detail: "Designs that transition seamlessly from day to night." },
    { bulletPointOne: "Expert Guidance", detail: "Professional styling tips to elevate your wardrobe." },
  ];

  // Reusable highlights for Fashion Design
  const fashionDesignHighlights = [
    { bulletPointOne: "Innovative Patterns", detail: "Bold, creative designs that set new trends." },
    { bulletPointOne: "Quality Craftsmanship", detail: "Exquisite attention to detail in every piece." },
    { bulletPointOne: "Modern Aesthetics", detail: "Contemporary designs inspired by global fashion trends." },
    { bulletPointOne: "Cultural Fusion", detail: "A seamless blend of traditional techniques with modern style." },
  ];

  return (
    <div className="fashion-container">
      <div className="image-banner" ref={bannerRef}>
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
      <ProjectContent 
        highlights={fashionStylingHighlights}
      />
      <Gallery />

      <SectionHeading title="Fashion Design" />
      <ProjectContent
        title="WomensWear SS18 Mykonos Collection"
        description="A collection of contemporary Womenswear Apparel inspired by the vibrant culture and colors of Mykonos island. The collection features a range of resortwear and classics capturing the holiday vibe designed for the modern woman."
        highlights={fashionDesignHighlights}
      />
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
