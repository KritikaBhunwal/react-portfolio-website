import { useState } from "react";
import SEO from "../../../components/SEO.jsx";
import PixelPopBannerNoButton from "../../../components/PixelPopBannerNoButton.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import SubSectionHeading from "../../../components/SubSectionHeading.jsx";
import MeteorRushGame from "../../../components/MeteorRushGame.jsx";
import PaddleFuryGame from "../../../components/PaddleFuryGame.jsx";
import SnakeGame from "../../../components/SnakeGame.jsx";
import FigmaFrame from "../../../components/FigmaFrame.jsx";
import WorkTogether from "../../../components/WorkTogether.jsx";
import CodeSnippet from "../../../components/CodeSnippet.jsx";
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

// Define a sample code snippet that extracts the main game logic.
const sampleCode = `
useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  // Load background image (if available)
  const gameBg = new Image();
  gameBg.src = bgImage;

  // Define paddle properties
  const paddle = {
    width: canvas.width / 6,
    height: canvas.width / 24, // paddle.height = paddle.width / 4
    x: canvas.width / 2 - canvas.width / 12,
    y: canvas.height - canvas.width / 24 - canvas.height * 0.05,
    speed: 12,
  };

  // Define ball properties
  const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: 4,
    dy: -4,
    radius: canvas.width / 36, // ball.radius = paddle.width / 6
  };

  let score = 0;
  let animationFrameId;

  // Draw paddle
  const drawPaddle = () => {
    ctx.fillStyle = "#9990bb";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 30);
    } else {
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }
    ctx.fill();
  };

  // Draw ball
  const drawBall = () => {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  };

  // Draw score
  const drawScore = () => {
    ctx.fillStyle = "#fff";
    ctx.font = "20px Quicksand";
    ctx.textAlign = "left";
    ctx.fillText(\`Score: \${score}\`, 40, 60);
  };

  // Update ball position and handle collisions
  const moveBall = () => {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Check side walls
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
      ball.dx *= -1;
    }
    // Check top wall
    if (ball.y - ball.radius < 0) {
      ball.dy *= -1;
    }
    // Check collision with paddle
    if (
      ball.y + ball.radius >= paddle.y &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width
    ) {
      ball.dy *= -1;
      score++;
      ball.dx *= 1.02;
      ball.dy *= 1.02;
    }
    // Check if ball is missed (bottom)
    if (ball.y - ball.radius > canvas.height) {
      // Game over logic would be here
    }
  };

  // Main game loop
  const gameLoop = () => {
    if (gameBg.complete) {
      ctx.drawImage(gameBg, 0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (!pausedRef.current) {
      drawPaddle();
      drawBall();
      drawScore();
      moveBall();
    }
    // Request next frame if game is not over
    animationFrameId = requestAnimationFrame(gameLoop);
  };
  gameLoop();
}, []);
`;

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

      <section className="uiux-subpage" style={{ margin: "1rem" }}>
        <section className="uiux-subpage-content">
          <SectionHeading title="90's Arcade Games Revamp" />
          <p>
            This project is one of my favourite web development projects that I
            completed at BCIT with the help of my instructor Joyce Lam. I used to love playing the snake game on my grandfather's Nokia phone. It revives old memories and once again it builds a connection of nostalgia with arcade gaming using modern frameworks like React. <br></br><br></br>I have recreated three games: Paddle Fury, Meteor Rush, and Snake Game. These games are built using JavaScript and React, showcasing my skills in web development. The games are designed to be accessible and responsive, ensuring a smooth experience across devices. The project demonstrates my ability to create engaging and interactive web applications, making it a valuable addition to my portfolio. I am excited to share this project with you and hope you enjoy playing these games as much as I enjoyed creating them!
          </p>

          <div className="games-container">
            {/* Paddle Fury Game Card */}
            <div className="game-card">
              <SubSectionHeading
                title="PADDLE FURY"
                className="paddleFuryTitle"
              />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("paddle")}
                style={{ borderRadius: "2rem" }}
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
              <p>My best score: 85</p>
            </div>

            {/* Snake Game Card */}
            <div className="game-card">
              <SubSectionHeading title="SNAKE GAME" className="SnakeTitle" />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("snake")}
                style={{ borderRadius: "2rem" }}
              >
                <img
                  src="/pps-game-3.png"
                  alt="Snake Game Preview"
                  className="game-preview-image"
                />
                <div className="overlay">
                  <button className="play-button">Play</button>
                </div>
              </div>
              <p>My best score: 101</p>
            </div>

            {/* Meteor Rush Game Card */}
            <div className="game-card">
              <SubSectionHeading
                title="METEOR RUSH"
                className="meteorRushTitle"
              />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("meteor")}
                style={{ borderRadius: "2rem" }}
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
              <p>My best score: 157</p>
            </div>
          </div>
        </section>

        {modalGame && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={handleCloseModal}>
              ✖
              </button>
              {modalGame === "paddle" && <PaddleFuryGame />}
              {modalGame === "meteor" && <MeteorRushGame />}
              {modalGame === "snake" && <SnakeGame />}
            </div>
          </div>
        )}

        <JavaScriptGamesContent style={{ margin: "2rem" }} />
      </section>

      <div className="bts-container">
        <div className="bts-item">
          <SectionHeading title="Code Snippet" />
          <CodeSnippet codeString={sampleCode} language="jsx" />
        </div>
        <div className="bts-item">
          <SectionHeading title="Figma Prototype" />
          <FigmaFrame />
        </div>
      </div>


      <SectionHeading title="Let's Work Together" />
      <WorkTogether />
    </>
  );
};

export default JavaScriptGames;
