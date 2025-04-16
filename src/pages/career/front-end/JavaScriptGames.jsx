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

/* ─────────────────────────────────────────────────────────────
   Rich JSON‑LD (mirrors the pattern used on Home / Fashion)
   ───────────────────────────────────────────────────────────── */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.kritikabhunwal.com/#person",
      name: "Kritika Bhunwal",
      jobTitle: "UI/UX & Fashion Designer",
      url: "https://www.kritikabhunwal.com/",
      sameAs: [
        "https://www.linkedin.com/in/kritikabhunwal",
        "https://www.instagram.com/kritikabhunwal",
        "https://www.behance.net/kritikabhunwal",
        "https://www.facebook.com/kritika.bhunwal",
        "https://www.instagram.com/pseudo_nova/",
        "https://www.youtube.com/@psuedo_nova"
      ],
      description:
        "Creative visual‑communication designer with a passion for nostalgic web games."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kritikabhunwal.com/#website",
      url: "https://www.kritikabhunwal.com/",
      name: "Kritika Bhunwal",
      publisher: { "@id": "https://www.kritikabhunwal.com/#person" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.kritikabhunwal.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "UI/UX",
          item: "https://www.kritikabhunwal.com/uiux"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "JavaScript Games",
          item: "https://www.kritikabhunwal.com/uiux/javascript-games"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.kritikabhunwal.com/uiux/javascript-games",
      name: "JavaScript Games – Interactive Web‑Based Nostalgia",
      description:
        "Relive 90s arcade magic with three browser‑ready React games, built for smooth responsive play.",
      url: "https://www.kritikabhunwal.com/uiux/javascript-games"
    },
    {
      "@type": "ItemList",
      name: "Playable Games",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Paddle Fury",
          url: "https://www.kritikabhunwal.com/uiux/javascript-games#paddle"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Snake Game",
          url: "https://www.kritikabhunwal.com/uiux/javascript-games#snake"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Meteor Rush",
          url: "https://www.kritikabhunwal.com/uiux/javascript-games#meteor"
        }
      ]
    }
  ]
};

// -------- sample code snippet (unchanged visual content) -----
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
  const handleOpenModal  = (game) => setModalGame(game);
  const handleCloseModal = () => setModalGame(null);

  return (
    <>
      {/* ───────── Improved SEO meta; invisible to users ───────── */}
      <SEO
        title="JavaScript Games – Retro Arcade Fun Rebuilt with React | Kritika Bhunwal"
        description="Play Paddle Fury, Snake, and Meteor Rush—classic arcade titles re‑engineered in JavaScript and React. Built for responsiveness and accessibility, these games showcase modern web‑development techniques while capturing 90s nostalgia."
        keywords="JavaScript games, React arcade, retro web games, paddle game, snake game, meteor rush, responsive canvas, BCIT project, Kritika Bhunwal portfolio"
        url="https://www.kritikabhunwal.com/uiux/javascript-games"
        image="https://kritikabhunwal.com/assets/js-games-banner.png"
        type="website"
        locale="en_US"
        siteName="Kritika Bhunwal"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      {/* ------------------- visible UI (unchanged) ------------------- */}
      <PixelPopBannerNoButton heading="Game On!" showButton={false} showParagraph={false} />

      <section className="uiux-subpage" style={{ margin: "1rem" }}>
        <section className="uiux-subpage-content">
          <SectionHeading title="90's Arcade Games Revamp" />
          <p>
            This project is one of my favourite web‑development projects from BCIT,
            completed under instructor Joyce Lam. Inspired by the snake game on my
            grandfather’s Nokia, it reconnects nostalgia with modern frameworks
            like React. <br /><br />
            I rebuilt <strong>Paddle Fury</strong>, <strong>Meteor Rush</strong>,
            and <strong>Snake Game</strong> using JavaScript and React to
            demonstrate accessible, responsive, and engaging game design. Enjoy
            playing them as much as I enjoyed creating them!
          </p>

          <div className="games-container">
            {/* Paddle Fury */}
            <div className="game-card">
              <SubSectionHeading title="PADDLE FURY" className="paddleFuryTitle" />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("paddle")}
                style={{ borderRadius: "2rem" }}
              >
                <img src="/pps-game-1.png" alt="Paddle Fury preview" className="game-preview-image" />
                <div className="overlay"><button className="play-button">Play</button></div>
              </div>
              <p>My best score: 107</p>
            </div>

            {/* Snake Game */}
            <div className="game-card">
              <SubSectionHeading title="SNAKE GAME" className="SnakeTitle" />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("snake")}
                style={{ borderRadius: "2rem" }}
              >
                <img src="/pps-game-3.png" alt="Snake Game preview" className="game-preview-image" />
                <div className="overlay"><button className="play-button">Play</button></div>
              </div>
              <p>My best score: 90</p>
            </div>

            {/* Meteor Rush */}
            <div className="game-card">
              <SubSectionHeading title="METEOR RUSH" className="meteorRushTitle" />
              <div
                className="image-wrapper"
                onClick={() => handleOpenModal("meteor")}
                style={{ borderRadius: "2rem" }}
              >
                <img src="/pps-game-2.png" alt="Meteor Rush preview" className="game-preview-image" />
                <div className="overlay"><button className="play-button">Play</button></div>
              </div>
              <p>My best score: 157</p>
            </div>
          </div>
        </section>

        {modalGame && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={handleCloseModal}>✖</button>
              {modalGame === "paddle" && <PaddleFuryGame />}
              {modalGame === "meteor" && <MeteorRushGame />}
              {modalGame === "snake" && <SnakeGame />}
            </div>
          </div>
        )}

        <JavaScriptGamesContent style={{ margin: "2rem" }} />
      </section>

      <SectionHeading title="Figma Prototype" />
      <FigmaFrame />

      <SectionHeading title="Code Snippet" />
      <CodeSnippet codeString={sampleCode} language="jsx" />

      <SectionHeading title="Let's Work Together" />
      <WorkTogether />
    </>
  );
};

export default JavaScriptGames;
