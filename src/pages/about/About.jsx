import "react";
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

import "../../styles/about.css";

import AboutBannerBase from "/AboutBannerBase.png";
import AboutBannerTop from "/AboutBannerTop.png";

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

        {/* New Let's Work Together Section */}
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
