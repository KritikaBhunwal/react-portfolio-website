import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-blank.png";        // Background image import
import "../styles/paddleFuryGame.css";           // Import external stylesheet

const PaddleFuryGame = () => {
  /*
    ---------------------------------------------------
    1. Detect if user is Kritika via URL parameter
    ---------------------------------------------------
  */
  const urlParams = new URLSearchParams(window.location.search);
  const isKritika = urlParams.get("user") === "kritika";

  /*
    ---------------------------------------------------
    2. Refs/States for game control
       - paused, pausedRef
       - highScore, highScoreRef
       - kritikaScore, kritikaScoreRef
       - gameOverRef, restartAllowedRef
       - canvasRef for drawing
    ---------------------------------------------------
  */
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const highScoreRef = useRef(
    Number(localStorage.getItem("paddleFuryHighScore")) || 0
  );
  const [kritikaScore, setKritikaScore] = useState(
    () => Number(localStorage.getItem("kritikaScorePaddle")) || 0
  );
  const kritikaScoreRef = useRef(kritikaScore);
  useEffect(() => {
    kritikaScoreRef.current = kritikaScore;
  }, [kritikaScore]);

  const gameOverRef = useRef(false);
  const restartAllowedRef = useRef(false);

  /*
    ---------------------------------------------------
    3. Set canvas dimensions on mount
    ---------------------------------------------------
  */
  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  /*
    ---------------------------------------------------
    4. Unified Modal Drawing Function (Game Over)
       - Includes Kritika's score if isKritika
    ---------------------------------------------------
  */
  const drawGameOverModal = (ctx, canvas, finalScore, currentHighScore, kritikaScoreValue) => {
    const isMobile = canvas.width < 768;

    // Semi-transparent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    const titleFontSize = isMobile ? 40 : 50;
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${titleFontSize}px Chonburi`;
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - (isMobile ? 100 : 120));

    // Final & High Scores
    ctx.fillStyle = "#fff";
    if (isMobile) {
      ctx.font = "20px Quicksand";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width / 2, canvas.height / 2 - 40);
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width / 2, canvas.height / 2 - 10);
      if (isKritika) {
        ctx.fillText(`Kritika's Score: ${kritikaScoreValue}`, canvas.width / 2, canvas.height / 2 + 20);
      }
    } else {
      ctx.font = "30px Quicksand";
      ctx.textAlign = "left";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 40);
      ctx.textAlign = "right";
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width * 0.9, canvas.height / 2 - 40);
      if (isKritika) {
        ctx.textAlign = "center";
        ctx.fillText(`Kritika's Score: ${kritikaScoreValue}`, canvas.width / 2, canvas.height / 2);
      }
    }

    // "Play Again" button
    const buttonWidth = 150;
    const buttonHeight = 50;
    const buttonFontSize = isMobile ? 20 : 25;
    const playAgainX = canvas.width / 2 - buttonWidth / 2;
    const playAgainY = isMobile ? canvas.height / 2 + 60 : canvas.height / 2 + 20;

    ctx.textBaseline = "middle";
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${buttonFontSize}px Quicksand`;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(playAgainX, playAgainY, buttonWidth, buttonHeight, 30);
    } else {
      ctx.fillRect(playAgainX, playAgainY, buttonWidth, buttonHeight);
    }
    ctx.fill();

    ctx.fillStyle = "#3d3d3d";
    ctx.textAlign = "center";
    ctx.fillText("Play Again", playAgainX + buttonWidth / 2, playAgainY + buttonHeight / 2);
  };

  /*
    ---------------------------------------------------
    5. Main Game Loop & Setup
    ---------------------------------------------------
      - Defines paddle and ball
      - Initializes drawing logic
      - Moves/updates ball
      - Handles collisions, gameOver, scoring
  */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Load a background image if desired
    const gameBg = new Image();
    gameBg.src = bgImage;

    // Paddle properties
    const paddle = {
      width: canvas.width / 6,
      height: 0,
      x: 0,
      y: 0,
      speed: 12,
    };
    paddle.height = paddle.width / 4;
    paddle.x = canvas.width / 2 - paddle.width / 2;
    paddle.y = canvas.height - paddle.height - canvas.height * 0.05;

    // Ball properties
    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: 4,
      dy: -4,
      radius: paddle.width / 6,
    };

    // Local scoring
    let score = 0;
    let animationFrameId;

    // 1) Drawing Functions
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

    const drawBall = () => {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    };

    const drawScore = () => {
      ctx.fillStyle = "#fff";
      ctx.font = "20px Quicksand";
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${score}`, 40, 60);
    };

    const showPausedOverlay = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.font = "50px Quicksand";
      ctx.textAlign = "center";
      ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
    };

    // 2) Game Mechanics
    const moveBall = () => {
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Wall collisions
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx *= -1;
      }
      if (ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }
      // Paddle collision
      if (
        ball.y + ball.radius >= paddle.y &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
      ) {
        ball.dy *= -1;
        score++;
        // Slight speed increase each hit
        ball.dx *= 1.02;
        ball.dy *= 1.02;
      }
      // Missed the ball (below screen)
      if (ball.y - ball.radius > canvas.height) {
        if (!gameOverRef.current) {
          gameOverRef.current = true;
          restartAllowedRef.current = true;
          // Update high score
          if (score > highScoreRef.current) {
            highScoreRef.current = score;
            localStorage.setItem("paddleFuryHighScore", score);
          }
          // Update Kritika's score if needed
          if (isKritika && score > kritikaScoreRef.current) {
            setKritikaScore(score);
            localStorage.setItem("kritikaScorePaddle", score);
          }
        }
      }
    };

    // 3) Restart the game
    const restartGame = () => {
      score = 0;
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.dx = 4;
      ball.dy = -4;
      gameOverRef.current = false;
      restartAllowedRef.current = false;
      gameLoop();
    };

    // 4) Event Handlers
    const handleCanvasClick = () => {
      if (gameOverRef.current && restartAllowedRef.current) {
        restartGame();
      } else {
        setPaused((prev) => !prev);
      }
    };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      paddle.x = (e.clientX - rect.left) * scaleX - paddle.width / 2;
      paddle.x = Math.max(0, Math.min(paddle.x, canvas.width - paddle.width));
    };
    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const scaleX = canvas.width / rect.width;
      paddle.x = (touch.clientX - rect.left) * scaleX - paddle.width / 2;
      paddle.x = Math.max(0, Math.min(paddle.x, canvas.width - paddle.width));
    };
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        paddle.x = Math.max(paddle.x - paddle.speed, 0);
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        paddle.x = Math.min(paddle.x + paddle.speed, canvas.width - paddle.width);
      }
    };
    const handleTilt = (e) => {
      const tilt = e.gamma;
      if (tilt !== null) {
        paddle.x += tilt;
        paddle.x = Math.max(0, Math.min(paddle.x, canvas.width - paddle.width));
      }
    };

    // 5) Register Listeners
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("deviceorientation", handleTilt);

    // 6) Game Loop
    const gameLoop = () => {
      // Optionally draw the background image
      if (gameBg.complete) {
        ctx.drawImage(gameBg, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      if (pausedRef.current) {
        showPausedOverlay();
      } else {
        drawPaddle();
        drawBall();
        drawScore();
        moveBall();
      }

      if (gameOverRef.current) {
        drawGameOverModal(ctx, canvas, score, highScoreRef.current, kritikaScoreRef.current);
      } else {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    };
    gameLoop(); // Start

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("click", handleCanvasClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("deviceorientation", handleTilt);
    };
    // eslint-disable-next-line
  }, []);

  /*
    ---------------------------------------------------
    7. Return the Container & Canvas
    ---------------------------------------------------
  */
  return (
    <div className="paddle-game-container">
      <canvas ref={canvasRef} className="paddle-canvas" />
    </div>
  );
};

export default PaddleFuryGame;
