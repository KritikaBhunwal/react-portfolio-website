import React from "react";
import SEO from "../../components/SEO.jsx";
import SubSectionHeading from "../../components/SubSectionHeading.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import InterpersonalSkills from "../../components/InterpersonalSkills.jsx";
import TechnicalSkills from "../../components/TechnicalSkills.jsx";
import Testimonials from "../../components/Testimonial.jsx";
import WorkTogether from "../../components/WorkTogether.jsx";
import BusinessValues from "../../components/BusinessValues.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import ProcreateDump from "../../components/ProcreateDump.jsx";

import "../../styles/about.css";

import AboutBannerBase from "/AboutBannerBase.png";
import AboutBannerTop from "/AboutBannerTop.png";

// Import life images from life101.jpg to life112.jpg
import Life101 from "/life101.jpg";
import Life102 from "/life102.jpg";
import Life103 from "/life103.jpg";
import Life104 from "/life104.jpg";
import Life105 from "/life105.jpg";
import Life106 from "/life106.jpg";
import Life107 from "/life107.jpg";
import Life108 from "/life108.jpg";
import Life109 from "/life109.jpg";
import Life110 from "/life110.jpg";
import Life111 from "/life111.jpg";
import Life112 from "/life112.jpg";
import Life113 from "/life113.jpg";
import Life114 from "/life114.jpeg";
import Life115 from "/life115.jpeg";
import Life116 from "/life116.jpeg";
import Life117 from "/life117.jpeg";
import Life118 from "/life118.jpeg";
import Life119 from "/life119.jpeg";
import Life120 from "/life120.jpeg";
import Life121 from "/life121.jpeg";
import Life122 from "/life122.jpeg";
import Life123 from "/life123.jpeg";
import Life124 from "/life124.jpeg";
import Life125 from "/life125.jpeg";
import Life126 from "/life126.jpeg";
import Life127 from "/life127.jpeg";
import Life128 from "/life128.jpeg";
import Life129 from "/life129.jpeg";
import Life130 from "/life130.jpeg";
import Life131 from "/life131.jpeg";
import Life132 from "/life132.jpeg";
import Life133 from "/life133.jpeg";
import Life134 from "/life134.jpeg";
import Life135 from "/life135.jpeg";
import Life136 from "/life136.jpeg";
import Life137 from "/life137.jpeg";
import Life138 from "/life138.jpeg";
import Life139 from "/life139.jpeg";
import Life140 from "/life140.jpeg";
import Life141 from "/life141.jpeg";
import Life142 from "/life142.jpeg";
import Life143 from "/life143.jpeg";
import Life144 from "/life144.jpeg";
import Life145 from "/life145.jpeg";
import Life146 from "/life146.jpeg";
import Life147 from "/life147.jpeg";
import Life148 from "/life148.jpeg";
import Life149 from "/life149.jpeg";
import Life150 from "/life150.jpeg";
// import Life151 from "/life151.jpeg";

const collaborationHighlights = [
  {
    bulletPointOne: "Collaborative Approach",
    detail:
      "A strong belief in teamwork and open communication to achieve the best results.",
  },
  {
    bulletPointOne: "Creative Problem Solving",
    detail:
      "Using design thinking to find innovative solutions tailored to unique business needs.",
  },
  {
    bulletPointOne: "Detail-Oriented Execution",
    detail:
      "Ensuring high-quality, polished, and impactful visual storytelling.",
  },
];

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-left">
        <SubSectionHeading title="As an Artist" />
        <p className="artist-text">
          I enjoy creating illustrations through different mediums exploring
          uniquely identified themes, translating the inner monologue through a
          vibrant set of colours, emotions, and forms, encompassing illustrative
          details and delicacies for my audience on digital and tactile canvas.
          I like to enjoy a variety of music while I explore the palette.
        </p>
        <SubSectionHeading title="As a Designer" />
        <p className="designer-text">
          I take pride in understanding and envisioning the Brand’s story and
          provide my level best knowledge to incorporate solutions for the
          current business requirements towards sustainable progress as a
          collective. It’s always a proud moment to see brands flourishing
          through the contribution made by the community while working towards a
          distinctive goal.
        </p>
      </div>
      <div className="about-right">
        <SubSectionHeading title="Business Values" />
        <BusinessValues />
      </div>
    </div>
  );
};

// Create a custom life images data array
const lifeImages = [
  { src: Life101, caption: "Art washes away from the soul the dust of everyday life." },
  { src: Life102, caption: "Design is intelligence made visible." },
  { src: Life103, caption: "Creativity takes courage." },
  { src: Life104, caption: "Art is not what you see, but what you make others see." },
  { src: Life105, caption: "Design is where science and art break even." },
  { src: Life106, caption: "Every great design begins with an even better story." },
  { src: Life107, caption: "Simplicity is the ultimate sophistication." },
  { src: Life108, caption: "Good design is obvious. Great design is transparent." },
  { src: Life109, caption: "The purpose of art is washing the dust of daily life off our souls." },
  { src: Life110, caption: "Art is a journey into a world that's both new and familiar." },
  { src: Life111, caption: "Design is the silent ambassador of your brand." },
  { src: Life112, caption: "Creativity is contagious. Pass it on." },
  { src: Life113, caption: "Art washes away from the soul the dust of everyday life." },
  { src: Life114, caption: "Design is intelligence made visible." },
  { src: Life115, caption: "Creativity takes courage." },
  { src: Life116, caption: "Art is not what you see, but what you make others see." },
  { src: Life117, caption: "Design is where science and art break even." },
  { src: Life118, caption: "Every great design begins with an even better story." },
  { src: Life119, caption: "Simplicity is the ultimate sophistication." },
  { src: Life120, caption: "Good design is obvious. Great design is transparent." },
  { src: Life121, caption: "The purpose of art is washing the dust of daily life off our souls." },
  { src: Life122, caption: "Art is a journey into a world that's both new and familiar." },
  { src: Life123, caption: "Design is the silent ambassador of your brand." },
  { src: Life124, caption: "Creativity is contagious. Pass it on." },
  { src: Life125, caption: "Art washes away from the soul the dust of everyday life." },
  { src: Life126, caption: "Design is intelligence made visible." },
  { src: Life127, caption: "Creativity takes courage." },
  { src: Life128, caption: "Art is not what you see, but what you make others see." },
  { src: Life129, caption: "Design is where science and art break even." },
  { src: Life130, caption: "Every great design begins with an even better story." },
  { src: Life131, caption: "Simplicity is the ultimate sophistication." },
  { src: Life132, caption: "Good design is obvious. Great design is transparent." },
  { src: Life133, caption: "The purpose of art is washing the dust of daily life off our souls." },
  { src: Life134, caption: "Art is a journey into a world that's both new and familiar." },
  { src: Life135, caption: "Design is the silent ambassador of your brand." },
  { src: Life136, caption: "Creativity is contagious. Pass it on." },
  { src: Life137, caption: "Art washes away from the soul the dust of everyday life." },
  { src: Life138, caption: "Design is intelligence made visible." },
  { src: Life139, caption: "Creativity takes courage." },
  { src: Life140, caption: "Art is not what you see, but what you make others see." },
  { src: Life141, caption: "Design is where science and art break even." },
  { src: Life142, caption: "Every great design begins with an even better story." },
  { src: Life143, caption: "Simplicity is the ultimate sophistication." },
  { src: Life144, caption: "Good design is obvious. Great design is transparent." },
  { src: Life145, caption: "The purpose of art is washing the dust of daily life off our souls." },
  { src: Life146, caption: "Art is a journey into a world that's both new and familiar." },
  { src: Life147, caption: "Design is the silent ambassador of your brand." },
  { src: Life148, caption: "Creativity is contagious. Pass it on." },
  { src: Life149, caption: "Art washes away from the soul the dust of everyday life." },
  { src: Life150, caption: "Design is intelligence made visible." },
  // { src: Life151, caption: "Creativity takes courage." },
];

const About = () => {
  return (
    <>
      <SEO
        title="Kritika Bhunwal - About"
        description="Discover more about Kritika Bhunwal, a creative professional specializing in art, design, and innovative collaborations. Learn about her journey as an artist and designer."
        keywords="Kritika Bhunwal, about, artist, designer, creative portfolio, collaborations"
        url="https://www.kritikabhunwal.com/about"
        image="https://kritikabhunwal.com/assets/logo-lDoHeESd.png"
        type="website"
        locale="en_US"
        siteName="Kritika Bhunwal"
        lang="en"
        robots="index,follow"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Kritika Bhunwal",
          description:
            "A brief overview of Kritika Bhunwal, her artistic and design journey, values, and collaborative approach.",
          url: "https://www.kritikabhunwal.com/about",
        }}
      />
      <div className="about-container">
        <ImageBanner
          baseImage={AboutBannerBase}
          topImage={AboutBannerTop}
          baseAlt="Base Banner"
          topAlt="Top Banner"
        />
        <SectionHeading title="A Little Bit About Me" />
        <AboutContent />
        <SectionHeading title="Kind Words" />
        <Testimonials />
        <SectionHeading title="Technical Skills" />
        <TechnicalSkills />
        <SectionHeading title="Interpersonal Skills" />
        <InterpersonalSkills />


        {/* Custom Life Gallery Usage (inserted just above WorkTogether) */}
        <SectionHeading title="Life Gallery" />
        <ProcreateDump imageData={lifeImages} />

        {/* Let's Work Together Section */}
        <SectionHeading title="Let's Work Together" />
        <ProjectContent
          title="A Partnership Rooted in Creativity & Collaboration"
          description="I thrive in creative collaborations that push boundaries and bring fresh perspectives to the table. Whether it's branding, illustration, UX/UI, or strategic design thinking, I am eager to contribute innovative solutions tailored to your vision. Let’s build something impactful together!"
          highlights={collaborationHighlights}
        />

        <WorkTogether />
      </div>
    </>
  );
};

export default About;
