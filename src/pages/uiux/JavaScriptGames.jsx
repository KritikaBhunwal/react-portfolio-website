import React, { useState } from "react";
import PixelPopBanner from "../../components/PixelPopBanner";
import SectionHeading from "../../components/SectionHeading";
import FigmaFrame from "../../components/FigmaFrame";
import CatchGame from "../../components/CatchGame";
import PaddleFuryGame from "../../components/PaddleFuryGame";
import "../../styles/javaScriptGames.css"; // Import the CSS file

const JavaScriptGames = () => {
  // State to determine which game modal is open; null if none.
  const [modalGame, setModalGame] = useState(null); // "paddle" or "catch"

  const handleOpenModal = (gameType) => {
    setModalGame(gameType);
  };

  const handleCloseModal = () => {
    setModalGame(null);
  };

  return (
    <section className="uiux-subpage">
      <PixelPopBanner
        heading="Pixel Pop Studio Games"
        showButton={false}
        showParagraph={false}
      />

      <SectionHeading title="JavaScript Games – UI/UX Project" />
      <p>
        This is a subpage showcasing interactive JavaScript games designed with
        user-friendly interfaces and engaging experiences.
      </p>
      <div className="games-container">
        {/* Game Card for Paddle Fury */}
        <div className="game-card">
          <img
            src="/pps-game-1.png"
            alt="Paddle Fury Game Preview"
            className="game-preview-image"
          />
          <div className="overlay">
            <button
              className="play-button"
              onClick={() => handleOpenModal("paddle")}
            >
              Play
            </button>
          </div>
        </div>
        {/* Game Card for Catch Game */}
        <div className="game-card">
          <img
            src="/pps-game-2.png"
            alt="Catch Game Preview"
            className="game-preview-image"
          />
          <div className="overlay">
            <button
              className="play-button"
              onClick={() => handleOpenModal("catch")}
            >
              Play
            </button>
          </div>
        </div>
      </div>
      <SectionHeading title="JavaScript Games – UI/UX Project" />
      <p>
        This is a subpage showcasing interactive JavaScript games designed with
        user-friendly interfaces and engaging experiences.
      </p>
      <FigmaFrame />

      {/* Modal Overlay */}
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
    </section>
  );
};

export default JavaScriptGames;
