import React from "react";
import SEO from "../../../components/SEO.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import MykonosCollection from "../../../components/MykonosCollection.jsx";
import ProjectContent from "../../../components/ProjectContent.jsx";
import Gallery from "../../../components/Gallery.jsx";
import PortfolioGallery from "../../../components/PortfolioGallery.jsx";
import ImageBanner from "../../../components/ImageBanner.jsx";
import WorkTogether from "../../../components/WorkTogether.jsx";

import "../../../styles/fashion.css";

// Banner Images
import FashionBannerBase from "/FashionBannerBase.png";
import FashionBannerTop from "/FashionBannerTop.png";

/* ────────────────────────────────────────────────
   Rich JSON‑LD (mirrors the pattern used on Home)
   ──────────────────────────────────────────────── */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    /* Site owner – matches Home.jsx for consistency */
    {
      "@type": "Person",
      "@id": "https://www.kritikabhunwal.com/#person",
      name: "Kritika Bhunwal",
      jobTitle: "Fashion & Digital Designer",
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
        "Creative visual‑communication designer specialising in fashion, UI/UX and graphics."
    },

    /* WebSite entity (helps Google link pages together) */
    {
      "@type": "WebSite",
      "@id": "https://www.kritikabhunwal.com/#website",
      url: "https://www.kritikabhunwal.com/",
      name: "Kritika Bhunwal",
      publisher: { "@id": "https://www.kritikabhunwal.com/#person" }
    },

    /* Breadcrumbs for better SERP presentation */
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
          name: "Fashion",
          item: "https://www.kritikabhunwal.com/fashion"
        }
      ]
    },

    /* Landing WebPage */
    {
      "@type": "WebPage",
      "@id": "https://www.kritikabhunwal.com/fashion",
      name: "Fashion Design & Styling – Mykonos Collection",
      description:
        "A narrative exploring modern fashion design and styling, infused with Mykonos‑inspired colour and flair.",
      url: "https://www.kritikabhunwal.com/fashion"
    },

    /* Flagship article about the SS18 collection */
    {
      "@type": "Article",
      "@id": "https://www.kritikabhunwal.com/fashion#mykonos-article",
      headline: "Womenswear SS18 “Mykonos” Collection",
      author: { "@id": "https://www.kritikabhunwal.com/#person" },
      datePublished: "2018-06-01",
      dateModified: "2018-06-01",
      articleSection: "Fashion Design",
      keywords:
        "Mykonos Collection, resort wear, womenswear, Scarlet Ross, Kritika Bhunwal",
      description:
        "A sun‑kissed odyssey across the shores of Mykonos, bottling the island’s carefree spirit into contemporary womenswear.",
      image: [
        "https://kritikabhunwal.com/assets/fashion-banner.png"
      ],
      publisher: {
        "@type": "Organization",
        name: "Scarlet Ross",
        logo: {
          "@type": "ImageObject",
          url: "https://kritikabhunwal.com/assets/logo.png"
        }
      }
    }
  ]
};

const Fashion = () => {
  /* -------------- highlight arrays (unchanged) -------------- */
  const fashionStylingHighlights = [
    {
      bulletPointOne: "Personalized Looks",
      detail:
        "Ensembles tailored to echo your unique story, weaving personality into every stitch."
    },
    {
      bulletPointOne: "Seasonal Trends",
      detail:
        "A continuous journey of fresh inspirations that evolve with shifting seasons."
    },
    {
      bulletPointOne: "Versatility",
      detail:
        "Designs that seamlessly transition from sunlit wanderings to evening celebrations."
    },
    {
      bulletPointOne: "Expert Guidance",
      detail:
        "Professional insights to help you refine your wardrobe like a seasoned connoisseur."
    }
  ];

  const fashionDesignHighlights = [
    {
      bulletPointOne: "Innovative Patterns",
      detail:
        "Artful silhouettes that spark new trends, sculpted from imagination and daring."
    },
    {
      bulletPointOne: "Quality Craftsmanship",
      detail:
        "Every seam, button, and trim showcases meticulous attention and heartfelt precision."
    },
    {
      bulletPointOne: "Modern Aesthetics",
      detail:
        "Contemporary expressions inspired by global style, bridging cultural influences."
    },
    {
      bulletPointOne: "Cultural Fusion",
      detail:
        "An elegant tapestry intertwining heritage techniques with modern finesse."
    }
  ];

  return (
    <>
      {/* --- SEO block lifted to the very top, mirroring Home.jsx --- */}
      <SEO
        title="Fashion Design & Styling – Mykonos Collection | Kritika Bhunwal"
        description="Step into Kritika Bhunwal’s fashion journey where sun‑kissed Mykonos inspiration meets modern design. Explore the SS18 womenswear collection for Scarlet Ross, styling highlights, and behind‑the‑scenes craftsmanship in one immersive showcase."
        keywords="Kritika Bhunwal, fashion design, fashion styling, womenswear SS18, Mykonos collection, Scarlet Ross, resort wear, cultural fusion, wardrobe consulting"
        url="https://www.kritikabhunwal.com/fashion"
        image="https://kritikabhunwal.com/assets/fashion-banner.png"
        type="article"
        locale="en_US"
        siteName="Kritika Bhunwal"
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
          description="Enter a realm of curated style where self‑expression meets subtle sophistication. From timeless classics to trend‑forward ensembles, discover outfits that mirror your personality and elevate every occasion."
          highlights={fashionStylingHighlights}
        />
        <Gallery />

        <SectionHeading title="Fashion Design" />
        <ProjectContent
          title='Scarlet Ross · SS18 “Mykonos” Womenswear Collection'
          description="Join a sun‑kissed odyssey along the shores of Mykonos. This collection channels the island’s carefree spirit into vibrant, contemporary apparel—a companion for the bold modern wanderer. Special thanks to Sujata Maheshwari, founder of Scarlet Ross, for believing in my vision."
          highlights={fashionDesignHighlights}
        />

        <SectionHeading title="Mykonos Collection SS18" />
        <MykonosCollection />
        <PortfolioGallery />

        <WorkTogether />
      </div>
    </>
  );
};

export default Fashion;
