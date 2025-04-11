import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* Banner component + images */
import ImageBanner from "../../components/ImageBanner.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import JourneyBannerBase from "/JourneyBannerBase.png";
import JourneyBannerTop from "/JourneyBannerTop.png";

/* Other components */
import { technicalSkillIcons } from "../../components/TechnicalSkills.jsx";
import WorkTogether from "../../components/WorkTogether.jsx";

/* CSS */
import "../../styles/projectJourneyPage.css";
import AllProjects from "../../components/AllProjects.jsx";

const ProjectJourneyPage = () => {
  // Example timeline data referencing your shared icons
  const timelineData = [
    {
      id: 1,
      title: "UI/UX Designer",
      link: "/career/uiux/UIUX",
      textSide: "left",
      year: "2022 - Present",
      image: "/Collages-3.png",
      description: `Crafting user-centric designs with Figma, Adobe Photoshop, and user research.`,
      icons: [
        technicalSkillIcons.figma,
        technicalSkillIcons.photoshop,
        technicalSkillIcons.procreate
      ]
    },
    {
      id: 2,
      title: "Front-End Development",
      link: "/career/front-end/JavaScriptGames",
      textSide: "right",
      year: "2024 - Present",
      image: "/Collages-4.png",
      description: `Focused on building interactive web apps with HTML, CSS, JavaScript, React, and TailwindCSS.`,
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
      year: "2015 - Present",
      image: "/Collages-2.png",
      description: `From branding to illustration, exploring various Adobe tools like Illustrator, InDesign, and more.`,
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
      year: "2012 - 2018",
      image: "/Collages-1.png",
      description: `A journey through textiles, pattern-making, and design aesthetics.`,
      icons: [
        technicalSkillIcons.photoshop,
        technicalSkillIcons.illustrator,
        technicalSkillIcons.procreate
      ]
    }
  ];

  // Refs for scroll-fade animation
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Banner at the top */}
      <div className="about-container">
        <ImageBanner
          baseImage={JourneyBannerBase}
          topImage={JourneyBannerTop}
          baseAlt="Journey Banner Base"
          topAlt="Journey Banner Top"
        />
      </div>

      {/* Main timeline container */}
      <SectionHeading title="My Career" />
      <div className="journey-page-container">
        {/* <h1 className="journey-title">My Career Journey</h1> */}
        <div className="journey-timeline">
          <div className="journey-line"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => {
            const isLeftText = item.textSide === "left";

            return (
              <div
                key={item.id}
                className="journey-item fade-in"
                ref={(el) => (itemRefs.current[index] = el)}
              >
                {/* Dot on line */}
                <div className="journey-marker"></div>
                
                {/* Content: either left-text or right-text */}
                <div
                  className={
                    isLeftText
                      ? "journey-item-content left-text"
                      : "journey-item-content right-text"
                  }
                >
                  {/* If text is left, image on right, else reversed */}
                  {!isLeftText && (
                    <div className="journey-image-block">
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}

                  {/* Text block */}
                  <div className="journey-text-block">
                    <Link to={item.link} className="journey-item-title">
                      {item.title}
                    </Link>
                    <span className="journey-year">{item.year}</span>
                    <p className="journey-description">{item.description}</p>

                    {/* Icons row */}
                    <div className="journey-icons">
                      {item.icons.map((IconComp, i) => (
                        <motion.div
                          className="journey-icon"
                          key={i}
                          whileHover={{ scale: 1.2 }}
                        >
                          {IconComp}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {isLeftText && (
                    <div className="journey-image-block">
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SectionHeading title="My Design Projects" />
      <AllProjects />

      {/* Final "Let's Collaborate" CTA */}
      <SectionHeading title="Let's Collaborate" />
      <WorkTogether />
    </div>
  );
};

export default ProjectJourneyPage;
