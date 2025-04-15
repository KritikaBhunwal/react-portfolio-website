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

/* CSS */
import "../../styles/projectJourneyPage.css";
import AllProjects from "../../components/AllProjects.jsx";
import ClientMarquee from "../../components/ClientMarquee.jsx";

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
        technicalSkillIcons.procreate,
      ],
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
        technicalSkillIcons.tailwind,
      ],
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
        technicalSkillIcons.audition,
      ],
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
        technicalSkillIcons.procreate,
      ],
    },
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

        <SectionHeading title="My Journey as a Designer" />
        <div className="design-journey-content">
          <div className="design-journey-left">
            <SubSectionHeading title="Gratitude" />
            <div className="journey-intro">
          <p>
            My career journey has been a blend of creativity and technology.
          </p>
          <p>
            I am highly grateful to my parents, mentors, instructors and for
            the knowledge I gained during my entire journey, it has been truly
            rewarding.
          </p>
          <p>
            Below is a timeline of my design journey, showcasing the various
            roles that have shaped my design career. Click on each role to
            find the projects ranging from the latest UI/UX Case Studies to
            interactive React games followed by Social Media branding projects
            and my first ever Womenswear SS18 Collection that I contributed to
            as a Fashion Designer.
          </p>
          <p className="journey-credits">
            All visual assets used in my projects are either original or
            sourced from
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Unsplash
            </a>
            ,
            <a
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Freepik
            </a>
            , and
            <a
              href="https://stock.adobe.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Adobe Stock Images
            </a>
            .<br></br>
            <a
              href="https://openai.com/chatgpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChatGPT{" "}
            </a>
             assisted me with the content writing and development process for this
            website.
          </p>
          <ClientMarquee />
            </div>
          </div>
          <div className="design-journey-right">
            <SubSectionHeading title="My Career" />
            <Stats />
          </div>
        </div>

        <SectionHeading title="Timeline" />

        <div className="journey-page-container">
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
                  {/* If text is right, image on left */}
                  {!isLeftText && (
                    <div className="journey-image-block">
                      <Link to={item.link}>
                        <img src={item.image} alt={item.title} />
                      </Link>
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

                  {/* If text is left, image on right */}
                  {isLeftText && (
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

      <SectionHeading title="Recent Design Projects" />
      <div className="journey-intro">
        <p>
          Explore through some of my recent projects that showcase the
          collaboration of my skills, design thinking and creativity.
        </p>
      </div>
      <AllProjects />

      {/* Final "Let's Collaborate" CTA */}
      <SectionHeading title="Let's Collaborate" />
      <WorkTogether />
    </div>
  );
};

export default ProjectJourneyPage;
