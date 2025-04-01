import { useState } from "react";
import PixelPopBanner from "../../components/PixelPopBanner";
import SectionHeading from "../../components/SectionHeading";
import SubSectionHeading from "../../components/SubSectionHeading";
import FigmaFrame from "../../components/FigmaFrame";
import CatchGame from "../../components/CatchGame";
import PaddleFuryGame from "../../components/PaddleFuryGame";
import "../../styles/javaScriptGames.css";
import WorkTogether from "../../components/WorkTogether";
import JavaScriptGamesContent from "../../components/JavascriptGamesContent";

const JavaScriptGames = () => {
  const [modalGame, setModalGame] = useState(null);

  const handleOpenModal = (gameType) => setModalGame(gameType);
  const handleCloseModal = () => setModalGame(null);

  return (
    <>
      <PixelPopBanner
        heading="Work Hard, Play Harder!"
        showButton={false}
        showParagraph={false}
      />
      <section className="uiux-subpage">

      <section className="uiux-subpage-content">
        <SectionHeading title="JavaScript Games – UI/UX Project" />
        <p>
          This project is one of the web development projects that I completed at
          BCIT under the guidance of my instructor Joyce Lam. The goal of this
          project was to bring back nostalgia by recreating all-time favorite
          digital arcade games. I also wanted to incorporate gamification into my
          project.
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
              title="90's Kids Paddle Fury Arcade Game"
              color="#cbbfee"
            />
            <div className="image-wrapper" onClick={() => handleOpenModal("paddle")}>
              <img
                src="/pps-game-1.png"
                alt="Paddle Fury Game Preview"
                className="game-preview-image"
              />
              <div className="overlay">
                <button className="play-button">Play</button>
              </div>
            </div>
          </div>

          {/* Catch Game Card */}
          <div className="game-card">
            <SubSectionHeading
              className="meteorRushTitle"
              title="90's Kids Meteor Rush Arcade Game"
            />
            <div className="image-wrapper" onClick={() => handleOpenModal("catch")}>
              <img
                src="/pps-game-2.png"
                alt="Catch Game Preview"
                className="game-preview-image"
              />
              <div className="overlay">
                <button className="play-button">Play</button>
              </div>
            </div>
          </div>
        </div>

        <SectionHeading title="JavaScript Games – UI/UX Project" />
        <p>
          This page showcases interactive JavaScript games designed with
          user-friendly interfaces to engage visitors and provide them with an
          immersive gaming experience.
        </p>
      </section>

      {/* Game Modal */}
      {modalGame && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>
              X
            </button>
            {modalGame === "paddle" && <PaddleFuryGame />}
            {modalGame === "catch" && <CatchGame />}
          </div>
        </div>
      )}
      <div style={{ margin: "0 3rem" }}>
        <JavaScriptGamesContent />
      </div>
      </section>
      <WorkTogether />
    </>
  );
};

export default JavaScriptGames;
