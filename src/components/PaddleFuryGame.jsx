import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-blank.png";
import "../styles/paddleFuryGame.css";

const PaddleFuryGame = () => {
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("paddleFuryHighScore")) || 0
  );

  // Using ref to store final score so it can be reliably displayed on game over
  const finalScoreRef = useRef(0);

  const [isGameOver, setIsGameOver] = useState(false);
  const [restartAllowed, setRestartAllowed] = useState(false);
  const gameOverRef = useRef(false);

  // Set canvas dimensions on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set paddle dimensions similar to the basket in CatchGame
    let paddle = {};
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

    // Set ball dimensions similar to the leaf in CatchGame
    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: 4,
      dy: -4, // start moving upward
    };
    if (canvas.width >= 1440) {
      ball.radius = 30;
    } else {
      ball.radius = canvas.width * 0.03;
    }

    let score = 0;
    let animationFrameId;

    function drawPaddle() {
      ctx.fillStyle = "#9990bb";
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 16);
      } else {
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
      }
      ctx.fill();
    }

    function drawBall() {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }

    function drawScore() {
      ctx.fillStyle = "#fff";
      ctx.font = `${canvas.width * 0.025}px Quicksand`;
      ctx.textAlign = "left";
      ctx.fillText(`Score: ${score}`, 10, 30);
    }

    function showPaused() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.font = `${canvas.width * 0.06}px Quicksand`;
      ctx.textAlign = "center";
      ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
    }

    // Game over screen mimicking the CatchGame layout and functionality
    function showGameOver() {
      const isMobile = canvas.width < 768;
      // Draw overlay
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

      // Scores
      if (isMobile) {
        const scoreFontSize = 20;
        ctx.fillStyle = "#fff";
        ctx.font = `${scoreFontSize}px Quicksand`;
        ctx.textAlign = "center";
        ctx.fillText(
          `Final Score: ${finalScoreRef.current}`,
          canvas.width / 2,
          canvas.height / 2 - 40
        );
        ctx.fillText(
          `High Score: ${highScore}`,
          canvas.width / 2,
          canvas.height / 2 - 10
        );
      } else {
        const scoreFontSize = 30;
        ctx.fillStyle = "#fff";
        ctx.font = `${scoreFontSize}px Quicksand`;
        ctx.textAlign = "left";
        ctx.fillText(
          `Final Score: ${finalScoreRef.current}`,
          canvas.width * 0.1,
          canvas.height / 2 - 40
        );
        ctx.textAlign = "right";
        ctx.fillText(
          `High Score: ${highScore}`,
          canvas.width * 0.9,
          canvas.height / 2 - 40
        );
      }

      // Play Again Button
      const buttonWidth = 150;
      const buttonHeight = 50;
      const buttonFontSize = isMobile ? 20 : 25;
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#cbbfee";
      ctx.font = `${buttonFontSize}px Quicksand`;
      let playAgainX, playAgainY;
      if (isMobile) {
        playAgainX = canvas.width / 2 - buttonWidth / 2;
        playAgainY = canvas.height / 2 + 60;
      } else {
        playAgainX = canvas.width / 2 - buttonWidth / 2;
        playAgainY = canvas.height / 2 + 20;
      }
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(playAgainX, playAgainY, buttonWidth, buttonHeight, 25);
      } else {
        ctx.fillRect(playAgainX, playAgainY, buttonWidth, buttonHeight);
      }
      ctx.fill();
      ctx.fillStyle = "#3d3d3d";
      ctx.textAlign = "center";
      ctx.fillText(
        "Play Again",
        playAgainX + buttonWidth / 2,
        playAgainY + buttonHeight / 2
      );
    }

    function moveBall() {
      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx *= -1;
      }
      if (ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }

      if (
        ball.y + ball.radius >= paddle.y &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
      ) {
        ball.dy *= -1;
        score++;
        // Use a smaller speed increase
        ball.dx *= 1.02;
        ball.dy *= 1.02;
      }

      if (ball.y - ball.radius > canvas.height) {
        if (!gameOverRef.current) {
          gameOverRef.current = true;
          setIsGameOver(true);
          // Save the final score using the ref
          finalScoreRef.current = score;
          localStorage.setItem("paddleFuryFinalScore", score);
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("paddleFuryHighScore", score);
          }
          // Allow immediate restart
          setRestartAllowed(true);
        }
      }
    }

    function handleCanvasClick(e) {
      // If game is over and restart is allowed, restart game
      if (isGameOver) {
        if (restartAllowed) {
          restartGame();
        }
      } else {
        setPaused((prev) => !prev);
      }
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      paddle.x = (e.clientX - rect.left) * scaleX - paddle.width / 2;
      paddle.x = Math.max(0, Math.min(paddle.x, canvas.width - paddle.width));
    }

    function handleTouchMove(e) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const scaleX = canvas.width / rect.width;
      paddle.x = (touch.clientX - rect.left) * scaleX - paddle.width / 2;
      paddle.x = Math.max(0, Math.min(paddle.x, canvas.width - paddle.width));
    }

    function handleKeyDown(e) {
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        paddle.x = Math.max(paddle.x - paddle.speed, 0);
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        paddle.x = Math.min(
          paddle.x + paddle.speed,
          canvas.width - paddle.width
        );
      }
    }

    function handleTilt(e) {
      const tilt = e.gamma;
      if (tilt !== null) {
        paddle.x += tilt;
        paddle.x = Math.max(0, Math.min(paddle.x, canvas.width - paddle.width));
      }
    }

    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("deviceorientation", handleTilt);

    function gameLoop() {
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
        showGameOver();
      } else {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    }

    gameLoop();

    function restartGame() {
      score = 0;
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.dx = 4;
      ball.dy = -4; // start upward again
      gameOverRef.current = false;
      setIsGameOver(false);
      setRestartAllowed(false);
      gameLoop();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("deviceorientation", handleTilt);
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [highScore, isGameOver, restartAllowed]);

  return (
    <div className="paddle-game-container">
      <canvas ref={canvasRef} className="paddle-canvas" />
    </div>
  );
};

export default PaddleFuryGame;
