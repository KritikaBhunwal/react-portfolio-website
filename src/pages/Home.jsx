import "react";
import Banner from "../components/Banner.jsx";
import PixelPopBanner from "../components/PixelPopBanner.jsx";
import SectionHeading from "../components/SectionHeading";
import TechnicalSkills from "../components/TechnicalSkills.jsx";
import InterpersonalSkills from "../components/InterpersonalSkills.jsx";
import ThreeDBanner from "../components/ThreeDBanner";
import Career from "../components/Career";
import ProjectContent from "../components/ProjectContent.jsx";
import WorkTogether from "../components/WorkTogether";
import SEO from "../components/SEO";

import "../styles/home.css";

const collaborationHighlights = [
  {
    bulletPointOne: "Collaborative Approach",
    detail: "A strong belief in teamwork and open communication to achieve the best results.",
  },
  {
    bulletPointOne: "Creative Problem Solving",
    detail: "Using design thinking to find innovative solutions tailored to unique business needs.",
  },
  {
    bulletPointOne: "Detail-Oriented Execution",
    detail: "Ensuring high-quality, polished, and impactful visual storytelling.",
  },
];

const Home = () => {
  return (
    <>
      <SEO
        title="Kritika Bhunwal"
        description="Hello! I am Kritika Bhunwal. I am a creative web designer who's passionate about user experience, interface design, graphic design, and fashion design. Explore a palette of innovative projects for design, development, and artistic expression."
        keywords="Kritika Bhunwal, fashion designer, graphic designer in Vancouver, UX/UI designer, UI/UX designer, UIUX researcher, UXUI researcher, creative portfolio, web design and development, front-end design and development, design and development, design portfolio"
        url="https://www.kritikabhunwal.com/"
        image="https://kritikabhunwal.com/assets/logo-lDoHeESd.png"
        type="website"
        locale="en_US"
        siteName="Kritika Bhunwal"
        lang="en"
        robots="index,follow"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Kritika Bhunwal",
          "jobTitle": "Front-End Designer and React Developer",
          "url": "https://www.kritikabhunwal.com/",
          "image": "https://kritikabhunwal.com/assets/logo-lDoHeESd.png",
          "sameAs": [
            "https://www.linkedin.com/in/kritikabhunwal",
            "https://www.instagram.com/kritikabhunwal",
            "https://www.behance.net/kritikabhunwal",
            "https://www.facebook.com/kritika.bhunwal",
            "https://www.instagram.com/pseudo_nova/",
            "https://www.youtube.com/@psuedo_nova"
          ],
          "description": "Kritika Bhunwal is a creative visual designer who specializes in fashion, graphics, and UX/UI design."
        }}
      />
      <div className="home">
        <Banner />
        <SectionHeading title="My Work" />
        <PixelPopBanner />
        {/* <JavaScriptGames /> */}
        <ThreeDBanner />
        <SectionHeading title="Career Progression" />
        <Career />
        <SectionHeading title="Technical Skills" />
        <TechnicalSkills />
        <SectionHeading title="Interpersonal Skills" />
        <InterpersonalSkills />
        <SectionHeading title="Looking to Collaborate?" />
        <ProjectContent 
          title="Let’s Build Something Amazing Together!"
          description="I am passionate about creating meaningful designs that resonate and inspire. Whether it’s branding, UX/UI, or creative problem-solving, I’m here to bring your vision to life. Let’s collaborate and make an impact!"
          highlights={collaborationHighlights}
        />
        <SectionHeading title="Get In Touch" />
        <WorkTogether />
      </div>
    </>
  );
};

export default Home;
