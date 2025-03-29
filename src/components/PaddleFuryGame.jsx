import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-blank.png";
import "../styles/paddleFuryGame.css";

const PaddleFuryGame = () => {
  const canvasRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("paddleFuryHighScore")) || 0
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let paddle = {
      width: canvas.width * 0.4,
      height: 40,
      x: canvas.width / 2 - (canvas.width * 0.4) / 2,
      y: canvas.height - 60,
      speed: 12,
    };

    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 15,
      dx: 4,
      dy: 4,
    };

    let score = 0;
    let gameOver = false;
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

    function showGameOver() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#9990bb";
      ctx.font = `${canvas.width * 0.06}px Chonburi`;
      ctx.textAlign = "center";
      ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 60);

      ctx.fillStyle = "#fff";
      ctx.font = `${canvas.width * 0.04}px Quicksand`;
      ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2);
      ctx.fillText(
        `High Score: ${score > highScore ? score : highScore}`,
        canvas.width / 2,
        canvas.height / 2 + 40
      );

      ctx.fillStyle = "#9990bb";
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(canvas.width / 2 - 100, canvas.height / 2 + 80, 200, 50, 25);
      } else {
        ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 80, 200, 50);
      }
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.font = `${canvas.width * 0.035}px Quicksand`;
      ctx.fillText("Play Again", canvas.width / 2, canvas.height / 2 + 115);
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
        ball.dx *= 1.1;
        ball.dy *= 1.1;
      }

      if (ball.y - ball.radius > canvas.height) {
        gameOver = true;
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem("paddleFuryHighScore", score);
        }
      }
    }

    function handleCanvasClick(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      if (gameOver) {
        if (
          x > canvas.width / 2 - 100 &&
          x < canvas.width / 2 + 100 &&
          y > canvas.height / 2 + 80 &&
          y < canvas.height / 2 + 130
        ) {
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
        paddle.x = Math.min(paddle.x + paddle.speed, canvas.width - paddle.width);
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

      if (gameOver) {
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
      ball.dy = 4;
      gameOver = false;
      setPaused(false);
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
  }, [started, highScore]);

  return (
    <div className="paddle-game-container">
      <canvas ref={canvasRef} className="paddle-canvas" />
      {!started && (
        <div className="game-start-overlay" onClick={() => setStarted(true)}>
          <button className="game-start-button">Play</button>
        </div>
      )}
    </div>
  );
};

export default PaddleFuryGame;
