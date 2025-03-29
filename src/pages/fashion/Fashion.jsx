import React from "react";
import SEO from "../../components/SEO.jsx";
import SectionHeading from "../../components/SectionHeading";
import MykonosCollection from "../../components/MykonosCollection.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import Gallery from "../../components/Gallery.jsx";
import PortfolioGallery from "../../components/PortfolioGallery.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";

// Import banner images
import FashionBannerBase from "/FashionBannerBase.png";
import FashionBannerTop from "/FashionBannerTop.png";

import "../../styles/fashion.css";

const Fashion = () => {
  // Fashion Styling Highlights
  const fashionStylingHighlights = [
    {
      bulletPointOne: "Personalized Looks",
      detail:
        "Ensembles tailored to echo your unique story, weaving personality into every stitch.",
    },
    {
      bulletPointOne: "Seasonal Trends",
      detail:
        "A continuous journey of fresh inspirations that evolve with shifting seasons.",
    },
    {
      bulletPointOne: "Versatility",
      detail:
        "Designs that seamlessly transition from sunlit wanderings to evening celebrations.",
    },
    {
      bulletPointOne: "Expert Guidance",
      detail:
        "Professional insights to help you refine your wardrobe like a seasoned connoisseur.",
    },
  ];

  // Fashion Design Highlights
  const fashionDesignHighlights = [
    {
      bulletPointOne: "Innovative Patterns",
      detail:
        "Artful silhouettes that spark new trends, sculpted from imagination and daring.",
    },
    {
      bulletPointOne: "Quality Craftsmanship",
      detail:
        "Every seam, button, and trim showcases meticulous attention and heartfelt precision.",
    },
    {
      bulletPointOne: "Modern Aesthetics",
      detail:
        "Contemporary expressions inspired by global style, bridging cultural influences.",
    },
    {
      bulletPointOne: "Cultural Fusion",
      detail:
        "An elegant tapestry intertwining heritage techniques with modern finesse.",
    },
  ];

  // Multiple Schema Types: WebPage + Article in a single @graph
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "#FashionPage",
        name: "A Fashion Journey – Mykonos & Beyond",
        description:
          "A narrative exploring modern fashion design and styling, infused with Mykonos-inspired color and flair.",
      },
      {
        "@type": "Article",
        "@id": "#MykonosArticle",
        headline: "WomensWear SS18 Mykonos Collection",
        author: "Kritika",
        datePublished: "2025-01-01",
        description:
          "A sun-kissed odyssey across the shores of Mykonos, bottling the island’s carefree spirit into contemporary apparel.",
      },
    ],
  };

  return (
    <>
      <SEO
        title="A Fashion Journey – Mykonos & Beyond"
        description="Step into a world where breezy Mykonos inspiration meets cutting-edge design. Uncover delicate stitches, bold prints, and narratives woven into every garment—an unforgettable odyssey of fashion."
        keywords="fashion, styling, design, Mykonos, resort wear, womenswear, wardrobe, style tips, cultural fusion, modern aesthetics"
        url="https://www.kritikabhunwal.com/fashion"
        image="https://kritikabhunwal.com/assets/fashion-banner.png"  // Replace with your actual share image URL
        type="article"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      <div className="fashion-container">
        <ImageBanner
          baseImage={FashionBannerBase}
          topImage={FashionBannerTop}
          baseAlt="Fashion Banner Base"
          topAlt="Fashion Banner Top"
          bannerClass="image-banner"
        />

        <SectionHeading title="Fashion Styling" />
        <ProjectContent
          title="Dress to Impress"
          description="Step into a realm of curated style experiences, where personal expression meets subtle sophistication and trendy fusion. This introduction sets the stage for ensembles that reflect one's personality and the trends they follow—preparing you to shine on every occasion. I bring an authentic touch of personalization to help choose the perfect outfit."
          highlights={fashionStylingHighlights}
        />
        <Gallery />

        <SectionHeading title="Fashion Design" />
        <ProjectContent
          title="Scarlet Ross : SS18 Mykonos Womenswear Collection"
          description="Join a sun-kissed odyssey across the shores of Mykonos. This collection reflects the island’s carefree spirit in vibrant, contemporary apparel—a companion for the bold, modern wanderer. Special thanks to Sujata Maheshwari, founder of Scarlet Ross, for believing in my capabilities."
          highlights={fashionDesignHighlights}
        />

        <SectionHeading title="Highlights from Mykonos Collection SS18" />
        <MykonosCollection />
        <PortfolioGallery />
      </div>
    </>
  );
};

export default Fashion;
