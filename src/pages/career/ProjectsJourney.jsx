import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* Banner component + images */
import ImageBanner from "../../components/ImageBanner.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import SubSectionHeading from "../../components/SubSectionHeading.jsx";
import Stats from "../../components/Stats.jsx";
import JourneyBannerBase from "/JourneyBannerBase.png";
import JourneyBannerTop from "/JourneyBannerTop.png";

/* Other components */
import { technicalSkillIcons } from "../../components/TechnicalSkills.jsx";
import WorkTogether from "../../components/WorkTogether.jsx";
import AllProjects from "../../components/AllProjects.jsx";
import ClientMarquee from "../../components/ClientMarquee.jsx";

/* SEO */
import SEO from "../../components/SEO.jsx";

/* CSS */
import "../../styles/projectJourneyPage.css";

/* ─────────────────────────────────────────────────────────
   JSON‑LD graph (same structure used across portfolio pages)
   ───────────────────────────────────────────────────────── */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.kritikabhunwal.com/#person",
      name: "Kritika Bhunwal",
      jobTitle: "UI/UX & Visual Designer",
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
        "Multidisciplinary designer blending creativity with technology to craft user‑centered experiences."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kritikabhunwal.com/#website",
      url: "https://www.kritikabhunwal.com/",
      name: "Kritika Bhunwal",
      publisher: { "@id": "https://www.kritikabhunwal.com/#person" }
    },
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
          name: "Journey",
          item: "https://www.kritikabhunwal.com/journey"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.kritikabhunwal.com/journey",
      name: "Design Journey Timeline – Kritika Bhunwal",
      description:
        "Discover Kritika Bhunwal’s design journey: from fashion and graphics to UI/UX, front‑end development and beyond. Interactive timeline with case‑study links and project highlights.",
      url: "https://www.kritikabhunwal.com/journey"
    }
  ]
};

const ProjectJourneyPage = () => {
  /* ───────────── timeline data (unchanged) ───────────── */
  const timelineData = [
    {
      id: 1,
      title: "UI/UX Designer",
      link: "/career/uiux/UIUX",
      textSide: "left",
      year: "2022 – Present",
      image: "/Collages-3.png",
      description:
        "Crafting user‑centric designs with Figma, Adobe Photoshop, and user research.",
      icons: [
        technicalSkillIcons.figma,
        technicalSkillIcons.photoshop,
        technicalSkillIcons.procreate
      ]
    },
    {
      id: 2,
      title: "Front‑End Development",
      link: "/career/front-end/JavaScriptGames",
      textSide: "right",
      year: "2024 – Present",
      image: "/Collages-4.png",
      description:
        "Building interactive web apps with HTML, CSS, JavaScript, React, and TailwindCSS.",
      icons: [
        technicalSkillIcons.html,
        technicalSkillIcons.css,
        technicalSkillIcons.javascript,
        technicalSkillIcons.react,
        technicalSkillIcons.tailwind
      ]
    },
    {
      id: 3,
      title: "Graphic Design",
      link: "/career/graphics/Graphics",
      textSide: "left",
      year: "2015 – Present",
      image: "/Collages-2.png",
      description:
        "From branding to illustration, exploring Adobe tools like Illustrator, InDesign and more.",
      icons: [
        technicalSkillIcons.photoshop,
        technicalSkillIcons.illustrator,
        technicalSkillIcons.indesign,
        technicalSkillIcons.afterEffects,
        technicalSkillIcons.premierePro,
        technicalSkillIcons.audition
      ]
    },
    {
      id: 4,
      title: "Fashion Design",
      link: "/career/fashion/Fashion",
      textSide: "right",
      year: "2012 – 2018",
      image: "/Collages-1.png",
      description:
        "A journey through textiles, pattern‑making and design aesthetics.",
      icons: [
        technicalSkillIcons.photoshop,
        technicalSkillIcons.illustrator,
        technicalSkillIcons.procreate
      ]
    }
  ];

  /* ───────────── fade‑in animation refs ───────────── */
  const itemRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ───────────── SEO meta ───────────── */}
      <SEO
        title="Design Journey Timeline – From Fashion to Front‑End | Kritika Bhunwal"
        description="Explore Kritika Bhunwal’s multidisciplinary career timeline: fashion, graphic design, UI/UX, and front‑end development with React. Click each milestone for in‑depth projects."
        keywords="design career timeline, UI/UX journey, graphic design evolution, front‑end developer, fashion designer history, Kritika Bhunwal"
        url="https://www.kritikabhunwal.com/journey"
        image="https://kritikabhunwal.com/assets/journey-banner.jpg"
        type="website"
        locale="en_US"
        siteName="Kritika Bhunwal"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      {/* ───────────── Banner ───────────── */}
      <div className="about-container">
        <ImageBanner
          baseImage={JourneyBannerBase}
          topImage={JourneyBannerTop}
          baseAlt="Journey Banner Base"
          topAlt="Journey Banner Top"
        />
      </div>

      {/* ────────── Journey Intro & Stats ────────── */}
      <SectionHeading title="My Journey as a Designer" />
      <div className="design-journey-content">
        <div className="design-journey-left">
          <SubSectionHeading title="Gratitude" />
          <div className="gratitude-intro">
            <p>My career journey has been a blend of creativity and technology.</p>
            <p>
              I am highly grateful to my parents, mentors, instructors, and the
              knowledge I gained during my journey—it has been truly rewarding.
            </p>
            <p>
              Below is a timeline of my design journey, showcasing the roles that
              shaped my career. Click on each role to see projects ranging from
              UI/UX case studies to React games, social‑media branding and my
              first womenswear collection.
            </p>
            <p className="journey-credits">
              All visual assets used in my projects are either original or sourced
              from
              <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
                {" "}Unsplash
              </a>
              ,
              <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">
                {" "}Freepik
              </a>
              , and
              <a href="https://stock.adobe.com/" target="_blank" rel="noopener noreferrer">
                {" "}Adobe Stock Images
              </a>
              .<br />
              Content support provided by{" "}
              <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer">
                ChatGPT
              </a>.
            </p>
            <ClientMarquee />
          </div>
        </div>
        <div className="design-journey-right">
          <SubSectionHeading title="My Career" />
          <Stats />
        </div>
      </div>

      {/* ────────── Timeline ────────── */}
      <SectionHeading title="Timeline" />
      <div className="journey-page-container">
        <div className="journey-timeline">
          <div className="journey-line"></div>

          {timelineData.map((item, idx) => {
            const isLeft = item.textSide === "left";
            return (
              <div
                key={item.id}
                className="journey-item fade-in"
                ref={(el) => (itemRefs.current[idx] = el)}
              >
                <div className="journey-marker"></div>
                <div
                  className={
                    isLeft
                      ? "journey-item-content left-text"
                      : "journey-item-content right-text"
                  }
                >
                  {!isLeft && (
                    <div className="journey-image-block">
                      <Link to={item.link}>
                        <img src={item.image} alt={item.title} />
                      </Link>
                    </div>
                  )}

                  <div className="journey-text-block">
                    <Link to={item.link} className="journey-item-title">
                      {item.title}
                    </Link>
                    <span className="journey-year">{item.year}</span>
                    <p className="journey-description">{item.description}</p>
                    <div className="journey-icons">
                      {item.icons.map((Icon, i) => (
                        <motion.div
                          className="journey-icon"
                          key={i}
                          whileHover={{ scale: 1.2 }}
                        >
                          {Icon}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {isLeft && (
                    <div className="journey-image-block">
                      <Link to={item.link}>
                        <img src={item.image} alt={item.title} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ────────── Recent Projects & CTA ────────── */}
      <SectionHeading title="Recent Design Projects" />
      <div className="journey-intro">
        <p>
          Explore some recent projects that showcase the collaboration of my
          skills, design thinking, and creativity.
        </p>
      </div>
      <AllProjects />

      <SectionHeading title="Let's Collaborate" />
      <WorkTogether />
    </div>
  );
};

export default ProjectJourneyPage;
