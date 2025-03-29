import React, { useState } from 'react';

const Hellow = () => {
  // State for the full-screen gallery view
  const [fullViewIndex, setFullViewIndex] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  // Array of gallery images for the full-screen view
  const galleryImages = [
    "/assets/images/Hellow3.jpeg", // Project Summary
    // "/assets/images/pps-game-2.png", // Research
    // "/src/assets/images/pps-game-3.png", // Intended Audience
    // "/src/assets/images/pps-game-4.png", // Problem Statement
    // "/src/assets/images/pps-game-5.png", // Solution
    // "/src/assets/images/pps-game-6.png", // Approach
    // "/src/assets/images/pps-game-7.png", // Risks
    // "/src/assets/images/pps-game-8.png", // Bibliography
  ];

  const openFullView = (index) => {
    setFullViewIndex(index);
    setGalleryOpen(true);
  };

  const closeFullView = () => {
    setFullViewIndex(null);
    setGalleryOpen(false);
  };

  return (
    <div className="hellow-container">
      {/* Report Header */}
      <header className="report-header">
        <h1>
          Hellow you there? Facilitating Connection with Family and Friends
          Across Different Time Zones
        </h1>
        <div className="report-authors">
          <span>Kritika Bhunwal</span> | <span>Holly Munn</span> |{" "}
          <span>24 June 2023</span>
        </div>
      </header>

      {/* Table of Contents */}
      <section className="table-of-contents">
        <h2>Table of Content</h2>
        <ul>
          <li>Project Summary</li>
          <li>Research</li>
          <li>Intended Audience</li>
          <li>Problem Statement</li>
          <li>Solution</li>
          <li>Approach</li>
          <li>Risks</li>
          <li>Bibliography</li>
        </ul>
      </section>

      {/* Project Summary Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Project Summary</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            Introducing Hellow, a pro-social app designed to facilitate regular
            communication among loved ones despite time differences across
            different time zones. With a vision to foster strong connections
            across borders, Hellow benefits international students, multinational
            professionals, and travelers abroad. Its asynchronous communication
            style coordinates time zones by finding overlapping slots, ensuring
            seamless scheduling. The app offers a simple interface with a reliable
            time zone database, high security, and customizable notifications based
            on mood or availability. Hellow’s adoption strategy revolves around
            compassion, interaction, and collaboration—coupled with VR features that
            keep people virtually connected.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-1.png"
              alt="Project Summary Preview"
              className="game-preview-image"
              onClick={() => openFullView(0)}
            />
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Research</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            In the era of global expansion, people are moving across borders for
            better job opportunities, education, travel, and more. Recent United
            Nations data reveals a 3.6% increase in global migration from 221
            million in 2010 to 281 million in 2020—even with a COVID-19 slowdown.
            Approximately 73% of migrants are working-age, with nearly 65% residing
            in high-income countries. A study including Microsoft employees found
            that while synchronous communication fosters connection, it poses
            challenges across time zones—highlighting the need for efficient
            asynchronous methods.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-2.png"
              alt="Research Preview"
              className="game-preview-image"
              onClick={() => openFullView(1)}
            />
          </div>
        </div>
      </section>

      {/* Intended Audience Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Intended Audience</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            Global migration and varying time zones challenge real-time
            communication. Students studying abroad, international workers,
            travelers, and their families struggle to maintain live connections.
            Hellow’s asynchronous approach enables these users to connect at
            their convenience—supporting emotional well-being, social inclusion,
            and a stronger sense of community.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-3.png"
              alt="Intended Audience Preview"
              className="game-preview-image"
              onClick={() => openFullView(2)}
            />
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Problem Statement</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            Coordinating real-time interactions across different time zones is
            complex. Hellow recognizes the struggle of maintaining constant
            communication with loved ones when schedules and time zones clash. To
            address this, the app offers customizable notifications that reflect
            mood, availability, and relationship dynamics—prioritizing urgent
            messages while supporting a relaxed, asynchronous conversation style.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-4.png"
              alt="Problem Statement Preview"
              className="game-preview-image"
              onClick={() => openFullView(3)}
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Solution</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            Hellow provides a solution to the challenges of cross-time zone
            communication by establishing routines and leveraging technology for
            asynchronous interactions. With scheduled notifications, personalized
            settings, and a user-friendly interface, the app bridges the gap
            between different geolocations, allowing users to stay connected at
            their own pace.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-5.png"
              alt="Solution Preview"
              className="game-preview-image"
              onClick={() => openFullView(4)}
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Approach</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            Responding to the challenges of global migration and remote work, Hellow
            adopts an asynchronous model. This approach reduces the pressure of
            real-time connectivity while ensuring regular, meaningful engagement.
            By leveraging VR technology, the app creates a sense of presence that
            bridges emotional distances—empowering users to connect despite time
            differences.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-6.png"
              alt="Approach Preview"
              className="game-preview-image"
              onClick={() => openFullView(5)}
            />
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Risks</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            Like any communication app, Hellow faces risks related to privacy,
            security, and technical disruptions. Additionally, user engagement,
            market competition, cultural and language barriers, and monetization
            challenges need to be addressed. Ongoing updates and user feedback are
            essential to mitigate these risks.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-7.png"
              alt="Risks Preview"
              className="game-preview-image"
              onClick={() => openFullView(6)}
            />
          </div>
        </div>
      </section>

      {/* Bibliography Section */}
      <section className="report-section">
        <div className="section-heading">
          <h2>Bibliography</h2>
          <hr />
        </div>
        <div className="section-content">
          <p>
            Hellow, like any communication app, poses certain risks that need to be
            addressed.
          </p>
          <div className="section-image">
            <img
              src="/src/assets/images/pps-game-8.png"
              alt="Bibliography Preview"
              className="game-preview-image"
              onClick={() => openFullView(7)}
            />
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="report-section collaboration-section">
        <div className="section-heading">
          <h2>Looking to Collaborate?</h2>
          <hr />
        </div>
        <div className="section-content">
          <h3>Let’s Build Something Amazing Together!</h3>
          <p>
            I am passionate about creating meaningful designs that resonate and
            inspire. Whether it’s branding, UX/UI, or creative problem-solving, I’m
            here to bring your vision to life. Let’s collaborate and make an impact!
          </p>
          <ul className="collaboration-highlights">
            <li>
              <strong>Collaborative Approach:</strong> A strong belief in teamwork
              and open communication to achieve the best results.
            </li>
            <li>
              <strong>Creative Problem Solving:</strong> Using design thinking to
              find innovative solutions tailored to unique business needs.
            </li>
            <li>
              <strong>Detail-Oriented Execution:</strong> Ensuring high-quality,
              polished, and impactful visual storytelling.
            </li>
          </ul>
        </div>
      </section>

      {/* Full-Screen Gallery View */}
      {galleryOpen && fullViewIndex !== null && (
        <div className="full-view-overlay">
          <button className="close-btn" onClick={closeFullView}>
            ✖
          </button>
          <button
            className="prev-btn"
            onClick={() =>
              setFullViewIndex((prev) =>
                prev > 0 ? prev - 1 : galleryImages.length - 1
              )
            }
          >
            ❮
          </button>
          <img
            src={galleryImages[fullViewIndex]}
            alt={`Preview ${fullViewIndex + 1}`}
            className="full-view-image"
          />
          <button
            className="next-btn"
            onClick={() =>
              setFullViewIndex((prev) =>
                prev < galleryImages.length - 1 ? prev + 1 : 0
              )
            }
          >
            ❯
          </button>
        </div>
      )}

      {/* Inline CSS */}
      <style>{`
        .hellow-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        .report-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .report-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .report-authors {
          font-size: 0.9rem;
          color: #777;
        }
        .table-of-contents {
          margin-bottom: 40px;
        }
        .table-of-contents h2 {
          font-size: 1.8rem;
          border-bottom: 2px solid #ccc;
          padding-bottom: 5px;
        }
        .table-of-contents ul {
          list-style-type: none;
          padding-left: 0;
        }
        .table-of-contents li {
          margin: 5px 0;
        }
        .report-section {
          margin-bottom: 40px;
        }
        .section-heading h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .section-heading hr {
          border: none;
          height: 2px;
          background-color: #eee;
          margin-bottom: 20px;
        }
        .section-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .section-content p {
          font-size: 1rem;
          margin: 0;
        }
        .section-image {
          text-align: center;
        }
        .game-preview-image {
          max-width: 100%;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .game-preview-image:hover {
          transform: scale(1.02);
        }
        .collaboration-section {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
        }
        .collaboration-highlights {
          list-style-type: disc;
          margin-left: 20px;
        }
        .collaboration-highlights li {
          margin-bottom: 5px;
        }
        .full-view-overlay {
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
        .full-view-image {
          max-width: 90%;
          max-height: 80%;
          border-radius: 8px;
        }
        .close-btn, .prev-btn, .next-btn {
          position: absolute;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
          padding: 10px;
        }
        .close-btn {
          top: 20px;
          right: 20px;
        }
        .prev-btn {
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
        .next-btn {
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

export default Hellow;
