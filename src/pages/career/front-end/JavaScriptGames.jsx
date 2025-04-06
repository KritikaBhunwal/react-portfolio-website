import { useState } from "react";
import SEO from "../../../components/SEO.jsx";
import PixelPopBannerNoButton from "../../../components/PixelPopBannerNoButton.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import SubSectionHeading from "../../../components/SubSectionHeading.jsx";
import MeteorRushGame from "../../../components/MeteorRushGame.jsx";
import PaddleFuryGame from "../../../components/PaddleFuryGame.jsx";
import FigmaFrame from "../../../components/FigmaFrame.jsx";
import WorkTogether from "../../../components/WorkTogether.jsx";
import JavaScriptGamesContent from "../../../components/JavascriptGamesContent.jsx";

import "../../../styles/javaScriptGames.css";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "JavaScript Games – Interactive Web-Based Nostalgia",
  description:
    "Revisit 90s arcade gaming with fun, interactive JavaScript games turned into React projects. Enjoy accessible, responsive browser-based experiences.",
  url: "https://www.kritikabhunwal.com/uiux/javascript-games",
};

const JavaScriptGames = () => {
  const [modalGame, setModalGame] = useState(null);

  const handleOpenModal = (gameType) => setModalGame(gameType);
  const handleCloseModal = () => setModalGame(null);

  return (
    <>
      <SEO
        title="JavaScript Games – Interactive Web-Based Nostalgia"
        description="Explore nostalgic arcade games recreated with modern web technologies. These JavaScript games are accessible, responsive, and designed for an engaging experience. Built with React for a smooth and fun portfolio showcase."
        keywords="JavaScript games, React games, 90s arcade, interactive games, web development, responsive design, retro gaming, gamification, fun coding projects"
        url="https://www.kritikabhunwal.com/javascriptgames"
        image="https://kritikabhunwal.com/assets/js-games-banner.png"
        type="website"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      <PixelPopBannerNoButton
        heading="Game On!"
        showButton={false}
        showParagraph={false}
      />

      <section className="uiux-subpage" style={{ margin: "2rem 6rem" }}>
        <section className="uiux-subpage-content">
          <SectionHeading title="90's Games Revamp" />
          <p>
            This project is one of my favourite web development projects that I completed at
            BCIT under the guidance of my instructor Joyce Lam. The goal of this
            project was to bring back nostalgia by recreating all-time favorite
            digital arcade games. I also wanted to incorporate gamification into my
            project to stay up to date with the trends.
            <br />
            <br />
            Showcasing interactive JavaScript games that I converted into a React
            project for my portfolio website. Designed with simple yet engaging,
            user-friendly interfaces and nostalgic experiences to bring back those
            old school memories :)
          </p>

          <div className="games-container">
            {/* Paddle Fury Game Card */}
            <div className="game-card">
              <SubSectionHeading
                className="paddleFuryTitle"
                title="PADDLE FURY"
              />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("paddle")}
                style={{ borderRadius: "4rem" }}
              >
                <img
                  src="/pps-game-1.png"
                  alt="Paddle Fury Game Preview"
                  className="game-preview-image"
                />
                <div className="overlay">
                  <button className="play-button">Play</button>
                </div>
              </div>
              <p>My best score: 71</p>
            </div>

            {/* Meteor Rush Game Card */}
            <div className="game-card">
              <SubSectionHeading
                className="meteorRushTitle"
                title="METEOR RUSH"
              />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("meteor")}
                style={{ borderRadius: "4rem" }}
              >
                <img
                  src="/pps-game-2.png"
                  alt="Meteor Rush Game Preview"
                  className="game-preview-image"
                />
                <div className="overlay">
                  <button className="play-button">Play</button>
                </div>
              </div>
              <p>My best score: 88</p>
            </div>
          </div>
        </section>

        {/* Game Modal */}
        {modalGame && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={handleCloseModal}>
                X
              </button>
              {modalGame === "paddle" && <PaddleFuryGame />}
              {modalGame === "meteor" && <MeteorRushGame />}
            </div>
          </div>
        )}
        <JavaScriptGamesContent style={{ margin: "2rem 4rem" }} />
      </section>
      <SectionHeading title="Figma Prototype" />
      <FigmaFrame />
      <WorkTogether />
    </>
  );
};

export default JavaScriptGames;
