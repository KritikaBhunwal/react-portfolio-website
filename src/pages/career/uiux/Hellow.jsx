import { useState } from "react";
import SectionHeading from "../../../components/SectionHeading.jsx";
import PDFViewer from "../../../components/pdfViewer";
import ProjectContent from "../../../components/ProjectContent";
import WorkTogether from "../../../components/WorkTogether";
import SEO from "../../../components/SEO.jsx";

import "../../../styles/Hellow.css";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hellow – An Asynchronous Communication App",
  description:
    "Hellow is a pro-social app designed to foster meaningful connections with loved ones across different time zones. Ideal for international students, professionals, and families.",
  url: "https://www.kritikabhunwal.com/uiux/hellow",
};

const Hellow = () => {
  // Modal state and image arrays
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Approach, Problem, Solution images
  const approachImages = [
    { src: "/HellowSketch.png", caption: "Hellow Sketch" },
    { src: "/Hellow-StyleSheet.jpg", caption: "Hellow App StyleSheet" },
  ];
  const problemImages = [
    {
      src: "/Hellow1.jpg",
      caption: "Create new Memories with Hellow and Your Loved Ones",
    },
    {
      src: "/Hellow2.jpg",
      caption: "With Hellow, Prioritize People over Platform!",
    },
    {
      src: "/Hellow3.jpg",
      caption: "Asynchronous Communication through Hellow App for everyone.",
    },
  ];
  const solutionImages = [
    {
      src: "/Hellow-SplashScreen.jpg",
      caption: "Hellow App Splash Screen",
    },
    {
      src: "/Hellow-Onboarding.jpg",
      caption: "Hellow App Onboarding",
    },
    {
      src: "/Hellow-SignInBoy.jpg",
      caption: "Hellow App Sign In Boy",
    },
    {
      src: "/Hellow-SignInGirl.jpg",
      caption: "Hellow App Sign In Girl",
    },
  ];

  // Combine for the modal
  const modalImages = [...approachImages, ...problemImages, ...solutionImages];

  // Modal controls
  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const nextModalImage = () => {
    setModalIndex((prev) => (prev < modalImages.length - 1 ? prev + 1 : 0));
  };
  const prevModalImage = () => {
    setModalIndex((prev) => (prev > 0 ? prev - 1 : modalImages.length - 1));
  };

  return (
    <div className="hellow-container">
      <SEO
        title="Hellow – Asynchronous Communication App"
        description="Hellow is a communication app that helps friends and family stay connected across time zones. Designed with empathy, the app uses asynchronous communication and thoughtful UX to build meaningful connections without time pressure."
        keywords="asynchronous communication app, app design, time zone messaging, pro-social UX design, VR communication, cross-timezone app, Kritika Bhunwal"
        url="https://www.kritikabhunwal.com/hellow"
        image="https://kritikabhunwal.com/assets/hellow-banner.jpg"
        type="website"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      {/* Banner */}
      <div className="hellow-banner">
        <header className="report-header">
          <img
            src="/HellowBanner.png"
            alt="Hellow Banner"
            className="hellow-banner-image"
          />
          <div className="header-text">
            <h2>Hellow : An Asynchronous Communication App</h2>
            <h3>Build Meaningful Connection with Family and Friends Across Different Time Zones</h3>
          </div>
          <div className="report-authors">
            <span>
              <strong>Kritika Bhunwal</strong>
            </span>{" "}
            | <span>Holly Munn</span> | <span>June, 2023</span>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="desktop-layout-hellow">
          {/* Table of Contents */}
          <nav className="table-of-contents" style={{ marginLeft: "4rem", marginRight: "-2rem" }}>
            <h3>Table of Content</h3>
            <ul>
              <li>
                <a href="#project-title">Hellow</a>
              </li>
              <li>
                <a href="#project-summary">Project Summary</a>
              </li>
              <li>
                <a href="#research">Research</a>
              </li>
              <li>
                <a href="#intended-audience">Intended Audience</a>
              </li>
              <li>
                <a href="#problem-statement">Problem Statement</a>
              </li>
              <li>
                <a href="#solution">Solution</a>
              </li>
              <li>
                <a href="#approach">Approach</a>
              </li>
              <li>
                <a href="#risks">Risks</a>
              </li>
              <li>
                <a href="#bibliography">Bibliography</a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <main className="content">
            {/* Hellow */}
            <section id="project-title" className="report-section">
              <SectionHeading title="Hellow" />
              <div className="section-content">
                <p>
                  An asynchronous way of communication.
                  <br />
                  <br />
                  If you have Family and Friends Across Different Time Zones,
                  this app idea is dedicated to you and your loved ones!
                </p>
              </div>
            </section>

            {/* Project Summary */}
            <section id="project-summary" className="report-section">
              <SectionHeading title="Project Summary" />
              <div className="section-content">
                <p>
                  Introducing Hellow, a pro-social app designed to facilitate
                  regular communication among loved ones despite time
                  differences. With a vision to foster strong connections across
                  borders, Hellow benefits international students, multinational
                  professionals, and travelers abroad.
                  <br />
                  <br />
                  Its asynchronous communication style finds overlapping time
                  slots for seamless scheduling. The app offers a simple
                  interface with a reliable time zone database, high security,
                  and customizable notifications. Hellow’s adoption strategy
                  revolves around compassion, interaction, and collaboration—
                  coupled with VR features that keep people virtually connected.
                </p>
              </div>
            </section>

            {/* Research */}
            <section id="research" className="report-section">
              <SectionHeading title="Research" />
              <div className="section-content">
                <p>
                  In the era of global expansion, people are moving across
                  borders for better job opportunities, education, travel, and
                  more. Recent UN data reveals a 3.6% increase in global
                  migration from 221 million in 2010 to 281 million in 2020—
                  even with a COVID-19 slowdown. Approximately 73% of migrants
                  are working-age, with nearly 65% residing in high-income
                  countries.
                  <br />
                  <br />
                  A study including Microsoft employees found that while
                  synchronous communication fosters connection, it poses
                  challenges across time zones—highlighting the need for
                  efficient asynchronous methods.
                </p>
              </div>
            </section>

            {/* Intended Audience */}
            <section id="intended-audience" className="report-section">
              <SectionHeading title="Intended Audience" />
              <div className="section-content">
                <p>
                  Global migration and varying time zones challenge real-time
                  communication. Students studying abroad, international
                  workers, travelers, and their families struggle to maintain
                  live connections.
                  <br />
                  <br />
                  Hellow’s asynchronous approach enables these users to connect
                  at their convenience—supporting emotional well-being, social
                  inclusion, and community.
                </p>
              </div>
            </section>

            {/* Problem Statement */}
            <section id="problem-statement" className="report-section">
              <SectionHeading title="Problem Statement" />
              <div className="section-content">
                <p>
                  Coordinating real-time interactions across different time
                  zones is complex. Hellow recognizes the struggle of
                  maintaining constant communication with loved ones when
                  schedules clash.
                  <br />
                  <br />
                  To address this, the app offers customizable notifications
                  that reflect mood, availability, and relationship
                  dynamics—prioritizing urgent messages while supporting a
                  relaxed, asynchronous style.
                </p>
                {/* Problem Statement Gallery */}
                <div className="section-gallery">
                  {problemImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() => openModal(approachImages.length + idx)}
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Solution */}
            <section id="solution" className="report-section">
              <SectionHeading title="Solution" />
              <div className="section-content">
                <p>
                  Hellow provides a solution to cross-time zone challenges by
                  establishing routines and leveraging technology for
                  asynchronous interactions.
                  <br />
                  <br />
                  With scheduled notifications, personalized settings, and a
                  user-friendly interface, the app bridges the gap between
                  different geolocations—allowing users to stay connected at
                  their own pace.
                </p>
                {/* Solution Gallery */}
                <div className="section-gallery">
                  {solutionImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() =>
                        openModal(
                          approachImages.length + problemImages.length + idx
                        )
                      }
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Approach */}
            <section id="approach" className="report-section">
              <SectionHeading title="Approach" />
              <div className="section-content">
                <p>
                  Responding to global migration and remote work challenges,
                  Hellow adopts an asynchronous model.
                  <br />
                  <br />
                  This approach reduces the pressure of real-time connectivity
                  while ensuring regular, meaningful engagement. By leveraging
                  VR technology, the app creates a sense of presence that
                  bridges emotional distances—empowering users to connect
                  despite time differences.
                </p>
                <div className="section-gallery">
                  {approachImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() => openModal(idx)}
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Risks */}
            <section id="risks" className="report-section">
              <SectionHeading title="Risks" />
              <div className="section-content">
                <p>
                  Like any communication app, Hellow faces risks related to
                  privacy, security, and technical disruptions.
                  <br />
                  <br />
                  Additionally, challenges around user engagement, market
                  competition, cultural barriers, and monetization require
                  careful attention. Ongoing updates and user feedback are
                  essential to mitigate these risks.
                </p>
              </div>
            </section>

            {/* Bibliography */}
            <section id="bibliography" className="report-section">
              <SectionHeading title="Bibliography" />
              <div className="section-content">
                <p>
                  UN. (2020). International Migration 2020 Highlights. Retrieved
                  from www.un.org:
                  https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/undesa_pd_2020_international_migration_highlights.pdf
                </p>
                <p>
                  LLC, M. T. (2008). Time Zone Calculator. Retrieved from
                  www.calculator.net:
                  https://www.calculator.net/time-zone-calculator.html
                </p>
                <p>
                  Ramkissoon, H. (2022, June). Prosociality in times of
                  separation and loss. Retrieved from www.sciencedirect.com:
                  https://www.sciencedirect.com/science/article/abs/pii/S2352250X21002426?via%3Dihub
                </p>
                <p>
                  Fong, K. (2021, April 15). Asynchronous Communication is
                  important for highly productive remote teams. Retrieved from
                  www.forbes.com:
                  https://www.forbes.com/sites/forbesbusinesscouncil/2021/04/15/asynchronous-communication-is-important-for-highly-productive-remote-teams/?sh=494da168c9a7
                </p>
                <p>
                  Yasamin Heshmat, C. N. (2021, June 28). Family and friend
                  communication over distance in Canada during the COVID-19
                  pandemic. Retrieved from dl.acm.org:
                  https://dl.acm.org/doi/10.1145/3461778.3462022
                </p>
              </div>
            </section>

            {/* Embedded Video */}
            <SectionHeading title="Youtube Video" />
            <div className="video-container">
              <iframe
                width="800"
                height="315"
                src="https://www.youtube-nocookie.com/embed/EQihKwl7xzc?si=shnZVc6kRcv20HBk&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Presentation PDF */}
            <SectionHeading title="Presentation Pdf" />
            <PDFViewer
              src="/KritikaBhunwal_TechnicalSolutionProposal_Presentation.pdf"
              width="100%"
              style={{
                borderRadius: "2rem",
                margin: "2rem auto",
                height: "600rem",
                maxHeight: "80vh",
              }}
            />
          </main>
        </div>

        {/* Let's Work Together */}
        <SectionHeading title="Let's Work Together" />
        <ProjectContent
          title="A Partnership Rooted in Creativity & Collaboration"
          description="I thrive in creative collaborations that push boundaries and bring fresh perspectives to the table. Whether it's branding, illustration, UX/UI, or strategic design thinking, I am eager to contribute innovative solutions tailored to your vision. Let’s build something impactful together!"
          highlights={[
            {
              bulletPointOne: "Creative Branding",
              detail:
                "Unique and memorable visual identities that capture your brand's essence and set you apart in the marketplace.",
            },
            {
              bulletPointOne: "Illustration Expertise",
              detail:
                "Tailored illustrations that communicate your story with clarity, emotion, and a touch of artistry.",
            },
            {
              bulletPointOne: "UX/UI Design",
              detail:
                "User-centered design solutions that create seamless, engaging, and intuitive experiences.",
            },
            {
              bulletPointOne: "Strategic Design Thinking",
              detail:
                "Innovative problem-solving approaches that drive impactful, sustainable design outcomes.",
            },
          ]}
        />
      </div>

      {/* Collaboration CTA */}
      <WorkTogether />

      {/* Modal Preview */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <button className="modal-prev" onClick={prevModalImage}>
              ❮
            </button>
            <img
              src={modalImages[modalIndex].src}
              alt={modalImages[modalIndex].caption}
              className="modal-image"
            />
            <p className="modal-caption">{modalImages[modalIndex].caption}</p>
            <button className="modal-next" onClick={nextModalImage}>
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hellow;
