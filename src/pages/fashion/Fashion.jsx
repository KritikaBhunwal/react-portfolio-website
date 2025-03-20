import React from "react";
import SectionHeading from "../../components/SectionHeading";
import SubSectionHeading from "../../components/SubSectionHeading";
import MykonosCollection from "../../components/MykonosCollection.jsx";
import Testimonials from "../../components/Testimonial.jsx";
import FeaturedProjects from "../../components/FeaturedProjects.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import Gallery from "../../components/Gallery.jsx";
import PortfolioGallery from "../../components/PortfolioGallery.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";

// Import Fashion banner images
import FashionBannerBase from "../../assets/images/FashionBannerBase.png";
import FashionBannerTop from "../../assets/images/FashionBannerTop.png";

import "../../styles/fashion.css";

const Fashion = () => {
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
      <ImageBanner 
        baseImage={FashionBannerBase}
        topImage={FashionBannerTop}
        baseAlt="Fashion Banner Base"
        topAlt="Fashion Banner Top"
        bannerClass="image-banner"
      />
      <SectionHeading title="Fashion Styling" />
      <ProjectContent highlights={fashionStylingHighlights} />
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
    </div>
  );
};

export default Fashion;
