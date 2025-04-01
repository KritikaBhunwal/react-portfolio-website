import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-blank.png";
import "../styles/paddleFuryGame.css";

const PaddleFuryGame = () => {
  // --- Detect if user is Kritika via a query parameter (e.g., ?user=kritika)
  const urlParams = new URLSearchParams(window.location.search);
  const isKritika = urlParams.get("user") === "kritika";

  // Ref for the canvas element
  const canvasRef = useRef(null);

  // State for pause toggling and a ref to always have the latest pause status in the game loop
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // High score stored in localStorage
  const highScoreRef = useRef(
    Number(localStorage.getItem("paddleFuryHighScore")) || 0
  );
  // Personal score for Kritika stored separately if applicable
  const [kritikaScore, setKritikaScore] = useState(
    () => Number(localStorage.getItem("kritikaScorePaddle")) || 0
  );
  const kritikaScoreRef = useRef(kritikaScore);
  useEffect(() => {
    kritikaScoreRef.current = kritikaScore;
  }, [kritikaScore]);

  // For game state management
  const gameOverRef = useRef(false);
  const restartAllowedRef = useRef(false);

  // Set canvas dimensions on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  // --- Unified Modal Function ---
  // Now includes an extra line for Kritika's Score if isKritika is true.
  const drawGameOverModal = (ctx, canvas, finalScore, currentHighScore, kritikaScoreValue) => {
    const isMobile = canvas.width < 768;
    
    // Draw semi-transparent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw title
    const titleFontSize = isMobile ? 40 : 50;
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${titleFontSize}px Chonburi`;
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - (isMobile ? 100 : 120));
    
    // Draw final and high scores
    if (isMobile) {
      ctx.fillStyle = "#fff";
      ctx.font = `20px Quicksand`;
      ctx.textAlign = "center";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width / 2, canvas.height / 2 - 40);
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width / 2, canvas.height / 2 - 10);
      if (isKritika) {
        ctx.fillText(`Kritika's Score: ${kritikaScoreValue}`, canvas.width / 2, canvas.height / 2 + 20);
      }
    } else {
      ctx.fillStyle = "#fff";
      ctx.font = `30px Quicksand`;
      ctx.textAlign = "left";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 40);
      ctx.textAlign = "right";
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width * 0.9, canvas.height / 2 - 40);
      if (isKritika) {
        ctx.textAlign = "center";
        ctx.fillText(`Kritika's Score: ${kritikaScoreValue}`, canvas.width / 2, canvas.height / 2);
      }
    }
    
    // Draw the "Play Again" button
    const buttonWidth = 150;
    const buttonHeight = 50;
    const buttonFontSize = isMobile ? 20 : 25;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${buttonFontSize}px Quicksand`;
    const playAgainX = canvas.width / 2 - buttonWidth / 2;
    const playAgainY = isMobile ? canvas.height / 2 + 60 : canvas.height / 2 + 20;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(playAgainX, playAgainY, buttonWidth, buttonHeight, 25);
    } else {
      ctx.fillRect(playAgainX, playAgainY, buttonWidth, buttonHeight);
    }
    ctx.fill();
    ctx.fillStyle = "#3d3d3d";
    ctx.textAlign = "center";
    ctx.fillText("Play Again", playAgainX + buttonWidth / 2, playAgainY + buttonHeight / 2);
  };

  // --- Main Game Loop and Setup ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // --- Initialize Game Objects ---
    // Set up the paddle properties
    const paddle = {};
    if (canvas.width >= 1440) {
      paddle.width = 150;
      paddle.height = 50;
    } else {
      paddle.width = canvas.width * 0.2;
      paddle.height = canvas.height * 0.04;
    }
    paddle.x = canvas.width / 2 - paddle.width / 2;
    paddle.y = canvas.height - paddle.height - canvas.height * 0.05;
    paddle.speed = 12; // for keyboard control

    // Set up the ball properties
    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: 4,
      dy: -4, // starts moving upward
      radius: canvas.width >= 1440 ? 30 : canvas.width * 0.03,
    };

    // Initialize local score variable
    let score = 0;
    let animationFrameId;

    // --- Drawing Functions ---
    const drawPaddle = () => {
      ctx.fillStyle = "#9990bb";
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 16);
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
      ctx.font = `${canvas.width * 0.025}px Quicksand`;
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${score}`, 10, 30);
    };

    const showPaused = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.font = `${canvas.width * 0.06}px Quicksand`;
      ctx.textAlign = "center";
      ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
    };

    // --- Game Mechanics ---
    const moveBall = () => {
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Bounce off walls
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx *= -1;
      }
      if (ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }
      // Collision with paddle
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
      // Ball falls below canvas: game over
      if (ball.y - ball.radius > canvas.height) {
        if (!gameOverRef.current) {
          gameOverRef.current = true;
          restartAllowedRef.current = true;
          // Update high score if needed
          if (score > highScoreRef.current) {
            highScoreRef.current = score;
            localStorage.setItem("paddleFuryHighScore", score);
          }
          // If Kritika is playing, update her personal score
          if (isKritika && score > kritikaScoreRef.current) {
            setKritikaScore(score);
            localStorage.setItem("kritikaScorePaddle", score);
          }
        }
      }
    };

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

    // --- Event Handlers ---
    const handleCanvasClick = () => {
      if (gameOverRef.current) {
        if (restartAllowedRef.current) {
          restartGame();
        }
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

    // --- Register Event Listeners ---
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("deviceorientation", handleTilt);

    // --- Game Loop ---
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (pausedRef.current) {
        showPaused();
      } else {
        drawPaddle();
        drawBall();
        drawScore();
        moveBall();
      }
      
      if (gameOverRef.current) {
        // Render Game Over modal with Kritika's score if applicable
        drawGameOverModal(ctx, canvas, score, highScoreRef.current, kritikaScoreRef.current);
      } else {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    };

    // Start the game loop
    gameLoop();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("click", handleCanvasClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("deviceorientation", handleTilt);
    };
  }, []); // Run only once on mount

  return (
    <div className="paddle-game-container">
      <canvas ref={canvasRef} className="paddle-canvas" />
    </div>
  );
};

export default PaddleFuryGame;
