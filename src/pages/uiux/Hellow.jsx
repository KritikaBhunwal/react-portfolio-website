import { useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import PDFViewer from "../../components/pdfViewer";

const Hellow = () => {
  // Modal preview state for images from Approach, Problem Statement, and Solution sections
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Define image arrays with captions
  const approachImages = [
    { src: "/HellowSketch.png", caption: "Hellow Sketch" },
    {
      src: "/Hellow-StyleSheet.jpg",
      caption: "Hellow App StyleSheet",
    },
  ];
  const problemImages = [
    { src: "/src/assets/images/Hellow1.jpg", caption: "Create new Memories with Hellow and Your Loved Ones " },
    { src: "/src/assets/images/Hellow2.jpg", caption: "With Hellow, Prioritize People over Platform!" },
    { src: "/src/assets/images/Hellow3.jpg", caption: "Asunchronous Communication through Hellow App for everyone." },
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

  // Combined modal images (order: Approach, then Problem Statement, then Solution)
  const modalImages = [...approachImages, ...problemImages, ...solutionImages];

  // Modal control functions
  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const nextModalImage = () => {
    setModalIndex((prev) => (prev < modalImages.length - 1 ? prev + 1 : 0));
  };
  const prevModalImage = () => {
    setModalIndex((prev) => (prev > 0 ? prev - 1 : modalImages.length - 1));
  };

  return (
    <div className="hellow-container">
      <img
        src="/HellowYouThere.svg"
        alt="Hellow Icon"
        className="hellow-icon"
      />
      {/* Full-width Banner */}
      <div className="hellow-banner">
        <header className="report-header">
          <div className="header-text">
            <h2>Hellow you there?</h2>
            <h3>
              An app idea that helps build meaningful Connection with Family and
              Friends Across Different Time Zones
            </h3>
          </div>
          <div className="report-authors">
            <span>
              <strong>Kritika Bhunwal</strong>
            </span>{" "}
            | <span>Holly Munn</span> | <span>24 June 2023</span>
          </div>
        </header>
      </div>

      {/* Main Content Wrapper (8rem left/right margin) */}
      <div className="main-content">
        <div className="desktop-layout">
          <nav className="table-of-contents">
            <h3>Table of Content</h3>
            <ul>
              <li>
                <a href="#project-title" style={{ color: "#3d3d3d" }}>
                  Hellow
                </a>
              </li>
              <li>
                <a href="#project-summary" style={{ color: "#3d3d3d" }}>
                  Project Summary
                </a>
              </li>
              <li>
                <a href="#research" style={{ color: "#3d3d3d" }}>
                  Research
                </a>
              </li>
              <li>
                <a href="#intended-audience" style={{ color: "#3d3d3d" }}>
                  Intended Audience
                </a>
              </li>
              <li>
                <a href="#problem-statement" style={{ color: "#3d3d3d" }}>
                  Problem Statement
                </a>
              </li>
              <li>
                <a href="#solution" style={{ color: "#3d3d3d" }}>
                  Solution
                </a>
              </li>
              <li>
                <a href="#approach" style={{ color: "#3d3d3d" }}>
                  Approach
                </a>
              </li>
              <li>
                <a href="#risks" style={{ color: "#3d3d3d" }}>
                  Risks
                </a>
              </li>
              <li>
                <a href="#bibliography" style={{ color: "#3d3d3d" }}>
                  Bibliography
                </a>
              </li>
              <li>
                <a href="#collaboration" style={{ color: "#3d3d3d" }}>
                  Looking to Collaborate?
                </a>
              </li>
            </ul>
          </nav>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          <main className="content">
            {/* Project Title Section */}
            <section id="project-title" className="report-section">
              <div className="section-heading">
                <h3>Hellow</h3>
                <hr />
              </div>
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

            {/* Project Summary Section */}
            <section id="project-summary" className="report-section">
              <div className="section-heading">
                <h3>Project Summary</h3>
                <hr />
              </div>
              <div className="section-content">
                <p>
                  Introducing Hellow, a pro-social app designed to facilitate
                  regular communication among loved ones despite time
                  differences. With a vision to foster strong connections across
                  borders, Hellow benefits international students, multinational
                  professionals, and travelers abroad. <br />
                  <br />
                  Its asynchronous communication style finds overlapping time
                  slots for seamless scheduling. The app offers a simple
                  interface with a reliable time zone database, high security,
                  and customizable notifications. Hellow’s adoption strategy
                  revolves around compassion, interaction, and
                  collaboration—coupled with VR features that keep people
                  virtually connected.
                </p>
              </div>
            </section>

            {/* Research Section */}
            <section id="research" className="report-section">
              <div className="section-heading">
                <h3>Research</h3>
                <hr />
              </div>
              <div className="section-content">
                <p>
                  In the era of global expansion, people are moving across
                  borders for better job opportunities, education, travel, and
                  more. Recent UN data reveals a 3.6% increase in global
                  migration from 221 million in 2010 to 281 million in 2020—even
                  with a COVID-19 slowdown. Approximately 73% of migrants are
                  working-age, with nearly 65% residing in high-income
                  countries. <br />
                  <br />A study including Microsoft employees found that while
                  synchronous communication fosters connection, it poses
                  challenges across time zones—highlighting the need for
                  efficient asynchronous methods.
                </p>
              </div>
            </section>

            {/* Intended Audience Section */}
            <section id="intended-audience" className="report-section">
              <div className="section-heading">
                <h3>Intended Audience</h3>
                <hr />
              </div>
              <div className="section-content">
                <p>
                  Global migration and varying time zones challenge real-time
                  communication. Students studying abroad, international
                  workers, travelers, and their families struggle to maintain
                  live connections. <br />
                  <br />
                  Hellow’s asynchronous approach enables these users to connect
                  at their convenience—supporting emotional well-being, social
                  inclusion, and community.
                </p>
              </div>
            </section>

            {/* Problem Statement Section */}
            <section id="problem-statement" className="report-section">
              <div className="section-heading">
                <h3>Problem Statement</h3>
                <hr />
              </div>
              <div className="section-content">
                <p>
                  Coordinating real-time interactions across different time
                  zones is complex. Hellow recognizes the struggle of
                  maintaining constant communication with loved ones when
                  schedules clash. <br />
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

            {/* Solution Section */}
            <section id="solution" className="report-section">
              <div className="section-heading">
                <h3>Solution</h3>
                <hr />
              </div>
              <div className="section-content">
                <p>
                  Hellow provides a solution to cross-time zone challenges by
                  establishing routines and leveraging technology for
                  asynchronous interactions. <br />
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

            {/* Approach Section */}
            <section id="approach" className="report-section">
              <div className="section-headingh">
                <h3>Approach</h3>
                <hr />
              </div>
              <div className="section-content">
                <p>
                  Responding to global migration and remote work challenges,
                  Hellow adopts an asynchronous model. <br />
                  <br />
                  This approach reduces the pressure of real-time connectivity
                  while ensuring regular, meaningful engagement. By leveraging
                  VR technology, the app creates a sense of presence that
                  bridges emotional distances—empowering users to connect
                  despite time differences.
                </p>
                {/* Approach Gallery */}
                <div className="section-gallery-approach">
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

            {/* Risks Section */}
            <section id="risks" className="report-section">
              <div className="section-heading">
                <h3>Risks</h3>
                <hr />
              </div>
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

            {/* Bibliography Section */}
            <section id="bibliography" className="report-section">
              <div className="section-heading">
                <h3>Bibliography</h3>
                <hr />
              </div>
              <div className="section-content">
                <p>
                  Hellow, like any communication app, poses certain risks that
                  need to be addressed.
                </p>
              </div>
            </section>

            <SectionHeading title="Youtube Video" />

            {/* Embedded video */}
            <div className="video-container">
            <iframe width="800" height="315" src="https://www.youtube-nocookie.com/embed/EQihKwl7xzc?si=shnZVc6kRcv20HBk&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <SectionHeading title="Presentation Pdf" />
            <PDFViewer 
              src="/src/assets/files/KritikaBhunwal_TechnicalSolutionProposal_Presentation.pdf" 
              width="100%" 
              height="340px" 
              style={{ borderRadius: "2rem", marginLeft: "5rem"}}
            />


            {/* Collaboration Section */}
            <section
              id="collaboration"
              className="report-section collaboration-section"
            >
              <div className="section-heading">
                <h3>Looking to Collaborate?</h3>
                <hr />
              </div>
              <div className="section-content">
                <h3>Let’s Build Something Amazing Together!</h3>
                <p>
                  I am passionate about creating meaningful designs that
                  resonate and inspire. Whether it’s branding, UX/UI, or
                  creative problem-solving, I’m here to bring your vision to
                  life. Let’s collaborate and make an impact!
                </p>
                <ul className="collaboration-highlights">
                  <li>
                    <strong>Collaborative Approach:</strong> A strong belief in
                    teamwork and open communication to achieve the best results.
                  </li>
                  <li>
                    <strong>Creative Problem Solving:</strong> Using design
                    thinking to find innovative solutions tailored to unique
                    business needs.
                  </li>
                  <li>
                    <strong>Detail-Oriented Execution:</strong> Ensuring
                    high-quality, polished, and impactful visual storytelling.
                  </li>
                </ul>
              </div>

            </section>
          </main>
        </div>
      </div>

      {/* Modal Preview for Images */}
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

      {/* Inline CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        /* Global & Container Styles */
        .hellow-container {
          color: #3d3d3d;
          font-family: 'Quicksand', sans-serif;
          margin: 0;
          padding: 0;
        }
        /* Full-width Banner */
        .hellow-banner {
          width: 100vw;
        //   background: #fefefe;
          padding: 1rem 2rem;
          box-sizing: border-box;

        }
        .report-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hellow-icon {
        //   width: 50px;
          height: auto;
          margin: 1rem 2rem;
        }
        .header-text h2 {
          font-size: 3rem;
          margin-left: 8rem;
        //   margin-right: 8rem;
          color: #3d3d3d;
        }
        .header-text h3 {
          font-size: 1.75rem;
          margin-left: 8rem;
          color: #3d3d3d;
          margin-right: 8rem;
        }
        .report-authors {
          font-size: 0.9rem;
          font-weight: bold;
          color: #cbbfee;
          margin-left: 8rem;
        }
        /* Main Content Wrapper */
        .main-content {
          margin: 0 8rem;
        }
        /* Desktop Layout */
        .desktop-layout {
          display: flex;
          gap: 2rem;
          margin: 2rem 0;
        }
        .table-of-contents {
          flex: 0 0 200px;
          position: sticky;
          top: 0;
          align-self: flex-start;
          margin-left: 1rem;
          padding: 1rem;
          line-height: 2rem;
        }
        /* Vertical Line */
        .vertical-line {
          width: 1px;
          background: #ccc;
          margin: 1rem;
          align-self: stretch;
        }
        .table-of-contents h3 {
          font-size: 1.8rem;
          margin: 0;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #ccc;
          font-weight: bold;
          color: #cbbfee;
        }
        .table-of-contents ul {
          list-style: none;
          padding-left: 0;
          margin-top: 1rem;
        }
        .table-of-contents li {
          margin: .5rem 0;
        }

        .table-of-contents a {
          text-decoration: none;
          color: #3d3d3d;
          font-weight: bold;
          font-size: 1rem;
        }
        .table-of-contents li:active {
          background-olor: #cbbfee;
        }
        .content {
          flex: 1;
          padding: 1rem;
        }
        /* Report Sections */
        .report-section {
          margin-bottom: 3rem;
          text-align: left;
        }
        .section-heading h3 {
          font-size: 2rem;
          margin: 0;
          font-weight: bold;
          color: #cbbfee;
        }
        .section-heading hr {
          border: none;
          height: 1px;
          background-color: #ccc;
          margin: 1.3rem 0 2rem 0;
        }
        .section-content {
          margin-bottom: 1rem;
        }
        .section-content p {
          font-size: 1rem;
          margin: 2rem;
        }
        /* Gallery Styles - 2 images per row */
        .section-gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: flex-start;
          margin: 0 2rem;
        }
        .section-gallery-approach {
        
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0 2rem;
        }
        .gallery-image, .gallery-image-approach {
          flex: 1 1 calc(50% - 1rem);
          max-width: calc(50% - 1rem);
          cursor: pointer;
          border-radius: 2rem;
          transition: transform 0.3s ease;
        }
        .gallery-image:hover, .gallery-image-approach:hover {
          transform: scale(1.01);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          background: #fff;
          padding: 2rem;
          border-radius: 2rem;
          text-align: center;
          max-width: 100%;
          max-height: 90%;
        }
        .modal-image {
          max-width: auto;
          max-height: 90%;
          border-radius: 2rem;
        }
        .modal-caption {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #3d3d3d;
          margin-left: 0rem;
        }
        .modal-close, .modal-prev, .modal-next {
          position: absolute;
          background: transparent;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          padding: 0.7rem;
          color: #3d3d3d;
        }
        .modal-close {
          top: 10px;
          right: 10px;
        }
        .modal-prev {
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
        .modal-next {
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
        /* Collaboration Section */
        .collaboration-section {
          background-color: #f9f9f9;
          padding: 3rem;
          border-radius: 2rem;
          margin-top: 2rem;
          margin-left: -2rem;
        }
        .collaboration-highlights {
          list-style: disc;
          margin-left: 3rem;
        }
        .collaboration-highlights li {
          margin-bottom: 0.5rem;
          margin-left: 1rem;
          font-size: 1rem;
        }
        /* Responsive Styles */
        @media (max-width: 768px) {
          .desktop-layout {
            flex-direction: column;
            margin: 1rem;
          }
          .table-of-contents {
            border-right: none;
            border-bottom: 1px solid #ccc;
            max-height: none;
            position: relative;
            top: auto;
            margin-bottom: 1rem;
          }
          .vertical-line {
            display: none;
          }
          .main-content {
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hellow;
