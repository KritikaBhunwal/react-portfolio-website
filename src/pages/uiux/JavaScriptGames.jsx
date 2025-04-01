import { useState } from "react";
import PixelPopBanner from "../../components/PixelPopBanner";
import SectionHeading from "../../components/SectionHeading";
import SubSectionHeading from "../../components/SubSectionHeading";
import MeteorRushGame from "../../components/MeteorRushGame";
import PaddleFuryGame from "../../components/PaddleFuryGame";
import WorkTogether from "../../components/WorkTogether";
import JavaScriptGamesContent from "../../components/JavascriptGamesContent";

import "../../styles/javaScriptGames.css";
import PixelPopBannerNoButton from "../../components/PixelPopBannerNoButton";

const JavaScriptGames = () => {
  const [modalGame, setModalGame] = useState(null);

  const handleOpenModal = (gameType) => setModalGame(gameType);
  const handleCloseModal = () => setModalGame(null);

  return (
    <>
      <PixelPopBannerNoButton
        heading="Game On!"
        showButton={false}
        showParagraph={false}
      />
      <section className="uiux-subpage" style={{ margin: "0rem" }}>
        <section className="uiux-subpage-content">
          <SectionHeading title="90's Arcade Games Revamp" />
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
                title="90's Kids Paddle Fury Arcade Game"
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
              <p>My best score:88</p>
            </div>

            {/* Meteor Rush Game Card */}
            <div className="game-card">
              <SubSectionHeading
                className="meteorRushTitle"
                title="90's Kids Meteor Rush Arcade Game"
              />
              <div className="image-wrapper" onClick={() => handleOpenModal("meteor")}>
                <img
                  src="/pps-game-2.png"
                  alt="Meteor Rush Game Preview"
                  className="game-preview-image"
                />
                <div className="overlay">
                  <button className="play-button">Play</button>
                </div>
              </div>
              <p>My best score:172</p>
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
        <JavaScriptGamesContent style={{ margin: "0" }}/>
      </section>
      <WorkTogether />
    </>
  );
};

export default JavaScriptGames;
