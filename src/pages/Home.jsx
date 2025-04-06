import "react";
import Banner from "../components/Banner.jsx";
import PixelPopBanner from "../components/PixelPopBanner.jsx";
import SectionHeading from "../components/SectionHeading";
import ThreeDBanner from "../components/ThreeDBanner";
import Career from "../components/Career";
import ProjectContent from "../components/ProjectContent.jsx";
import WorkTogether from "../components/WorkTogether";
import SEO from "../components/SEO";

import "../styles/home.css";

const collaborationHighlights = [
  {
    bulletPointOne: "Collaborative Approach",
    detail: "I believe in teamwork and open communication to achieve the best results.",
  },
  {
    bulletPointOne: "Creative Problem Solving",
    detail: "I like to utilize design thinking to find innovative solutions personalized as per the business needs.",
  },
  {
    bulletPointOne: "Always Detail-Oriented",
    detail: "I take pride in ensuring high-quality in polished, and impactful visual storytelling.",
  },
];

const Home = () => {
  return (
    <>
      <SEO
        title="Kritika Bhunwal"
        description="Hello! I am Kritika Bhunwal. I am a creative ui/ux designer who's passionate about user experience, interface design, graphic design, and fashion design. I welcome you to explore a palette of innovative projects for design, research, development, and artistic expression showcasing my design thinking and problem-solving skills."
        keywords="Kritika Bhunwal, fashion designer, graphic designer in Vancouver, UxUI designer, UIUX Designer, UIUX designer in Vancouver, UIUX researcher, UXUI researcher, creative portfolio, web design and development, front-end design and development, design and development, design portfolio, website design, website development, web development, web designer, web developer, UI/UX designer in Vancouver, UI/UX designer in Canada, UI/UX designer in India, UI/UX designer in Toronto, UI/UX designer in Delhi, UI/UX designer in Rajasthan"
        url="https://www.kritikabhunwal.com/"
        // image=""
        type="portfolio website"
        locale="en_US"
        siteName="Kritika Bhunwal"
        lang="en"
        robots="index,follow"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Kritika Bhunwal",
          "jobTitle": "UI/UX Designer",
          "url": "https://www.kritikabhunwal.com/",
          // "image": "",
          "sameAs": [
            "https://www.linkedin.com/in/kritikabhunwal",
            "https://www.instagram.com/kritikabhunwal",
            "https://www.behance.net/kritikabhunwal",
            "https://www.facebook.com/kritika.bhunwal",
            "https://www.instagram.com/pseudo_nova/",
            "https://www.youtube.com/@psuedo_nova"
          ],
          "description": "Kritika Bhunwal is a creative visual communication and digital designer who specializes in UI/UXdesign and Graphics with a background in Fashion Design."
        }}
      />
      <div className="home">
        <Banner />
        <SectionHeading title="My Work" />
        <p style={{ marginLeft: "3rem", marginRight: "3rem" }}>As a Designer, I have had the opportunity to work in Fashion, Graphic and Tech Industries on multiple projects from Styling, Branding to UI/UX Design. Here is a preview to some of my favourite projects that I had a lot of fun working on!</p>
        <PixelPopBanner />
        <ThreeDBanner />
        <SectionHeading title="Career Progression" />
        <p style={{ marginLeft: "3rem", marginRight: "3rem" }}>I welcome you to explore through my Design Journey...</p>
        <Career />
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
