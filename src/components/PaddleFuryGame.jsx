import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-with-logo.png";
import "../styles/paddleFuryGame.css";

const PaddleFuryGame = () => {
  // --------------------------------------------
  // 1. Refs/States for game control
  // --------------------------------------------
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);

  // Update pausedRef whenever paused changes
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // Local high score from storage
  const [highScore, setHighScore] = useState(
    () => Number(localStorage.getItem("paddleFuryHighScore")) || 0
  );
  const highScoreRef = useRef(highScore);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  const gameOverRef = useRef(false);
  const restartAllowedRef = useRef(false);

  // --------------------------------------------
  // 2. Resize Canvas to Full Screen
  // --------------------------------------------
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // --------------------------------------------
  // 3. Game Over Modal
  // --------------------------------------------
  const drawGameOverModal = (ctx, canvas, finalScore, currentHighScore) => {
    const isMobile = canvas.width < 768;

    // Overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    const titleFontSize = isMobile ? 40 : 50;
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${titleFontSize}px Chonburi`;
    ctx.textAlign = "center";
    ctx.fillText(
      "Game Over",
      canvas.width / 2,
      canvas.height / 2 - (isMobile ? 100 : 120)
    );

    // Final & High Scores
    ctx.fillStyle = "#fff";
    if (isMobile) {
      ctx.font = "20px Quicksand";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width / 2, canvas.height / 2 - 40);
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width / 2, canvas.height / 2 - 10);
    } else {
      ctx.font = "30px Quicksand";
      ctx.textAlign = "left";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 40);
      ctx.textAlign = "right";
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width * 0.9, canvas.height / 2 - 40);
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

    ctx.fillStyle = "#2d2d2d";
    ctx.textAlign = "center";
    ctx.fillText("Play Again", playAgainX + buttonWidth / 2, playAgainY + buttonHeight / 2);
  };

  // --------------------------------------------
  // 4. Main Game Loop & Setup
  // --------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Load background image
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

    // Local score + animation
    let score = 0;
    let animationFrameId;

    // Drawing functions
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

    // Game mechanics
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

      // Missed ball => game over
      if (ball.y - ball.radius > canvas.height) {
        if (!gameOverRef.current) {
          gameOverRef.current = true;
          restartAllowedRef.current = true;

          // Update high score
          if (score > highScoreRef.current) {
            highScoreRef.current = score;
            setHighScore(score);
            localStorage.setItem("paddleFuryHighScore", score);
          }
        }
      }
    };

    // Restart the game
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

    // Event Handlers
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
      paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, paddle.x));
    };

    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const scaleX = canvas.width / rect.width;
      paddle.x = (touch.clientX - rect.left) * scaleX - paddle.width / 2;
      paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, paddle.x));
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        paddle.x = Math.max(0, paddle.x - paddle.speed);
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        paddle.x = Math.min(canvas.width - paddle.width, paddle.x + paddle.speed);
      }
    };

    const handleTilt = (e) => {
      const tilt = e.gamma;
      if (tilt !== null) {
        paddle.x += tilt;
        paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, paddle.x));
      }
    };

    // Attach listeners
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("deviceorientation", handleTilt);

    // Main loop
    const gameLoop = () => {
      // Draw background
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

      // Game over => show modal
      if (gameOverRef.current) {
        drawGameOverModal(ctx, canvas, score, highScoreRef.current);
      } else {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    };

    // Start game
    gameLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("click", handleCanvasClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("deviceorientation", handleTilt);
    };
  }, []);

  // --------------------------------------------
  // 5. Close Game Handler
  // --------------------------------------------
  const handleCloseClick = () => {
    const confirmClose = window.confirm("Are you sure you want to close the game?");
    if (confirmClose) {
      window.location.href = window.location.origin + window.location.pathname;
    }
  };

  // --------------------------------------------
  // 6. Render
  // --------------------------------------------
  return (
    <div className="paddle-game-container">
      <button className="close-button" onClick={handleCloseClick}>✖</button>
      <canvas ref={canvasRef} className="paddle-canvas" />
    </div>
  );
};

export default PaddleFuryGame;
