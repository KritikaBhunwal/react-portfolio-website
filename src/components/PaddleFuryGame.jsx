import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-blank.png";

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

  // Set canvas dimensions on mount using the container’s rendered size
  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    // Make internal dimensions match the displayed size
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  // NOTE: Removed "paused" from the dependency array below so that pausing doesn't reinitialize the game.
  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Game variables
    let paddle = {
      width: 200,
      height: 40,
      x: canvas.width / 2 - 100,
      y: canvas.height - 50,
      speed: 10,
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

    // Draw the paddle (purple)
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

    // Draw the ball (white)
    function drawBall() {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }

    // Draw the score
    function drawScore() {
      ctx.fillStyle = "#fff";
      ctx.font = "20px Quicksand";
      ctx.fillText(`Score: ${score}`, 10, 30);
    }

    // Draw the pause overlay
    function showPaused() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.font = "50px Quicksand";
      ctx.textAlign = "center";
      ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
    }

    // Draw the game over screen and replay button
    function showGameOver() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#9990bb";
      ctx.font = "50px Chonburi";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 50);

      ctx.fillStyle = "#fff";
      ctx.font = "30px Quicksand";
      ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2);
      ctx.fillText(
        `High Score: ${score > highScore ? score : highScore}`,
        canvas.width / 2,
        canvas.height / 2 + 40
      );

      // Draw a rounded "Play Again" button
      ctx.fillStyle = "#9990bb";
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(canvas.width / 2 - 100, canvas.height / 2 + 80, 200, 50, 25);
      } else {
        ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 80, 200, 50);
      }
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.font = "25px Quicksand";
      ctx.fillText("Play Again", canvas.width / 2, canvas.height / 2 + 115);
    }

    // Move the ball and check for collisions
    function moveBall() {
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Bounce off walls
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
        ball.dx *= 1.1;
        ball.dy *= 1.1;
      }
      // Game over condition
      if (ball.y - ball.radius > canvas.height) {
        gameOver = true;
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem("paddleFuryHighScore", score);
        }
      }
    }

    // Handle clicks on canvas: toggle pause/resume if game is in progress; if game over, check replay button.
    function handleCanvasClick(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      if (gameOver) {
        // Only if click is inside replay button bounds.
        if (
          x > canvas.width / 2 - 100 &&
          x < canvas.width / 2 + 100 &&
          y > canvas.height / 2 + 80 &&
          y < canvas.height / 2 + 130
        ) {
          restartGame();
        }
      } else {
        // Simply toggle pause/resume when game is active.
        setPaused((prev) => !prev);
      }
    }

    // Update paddle position based on mouse movement
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      paddle.x = (e.clientX - rect.left) * scaleX - paddle.width / 2;
      if (paddle.x < 0) paddle.x = 0;
      if (paddle.x + paddle.width > canvas.width)
        paddle.x = canvas.width - paddle.width;
    }

    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("mousemove", handleMouseMove);

    // Main game loop
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

    // Restart the game by resetting variables
    function restartGame() {
      score = 0;
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.dx = 4;
      ball.dy = 4;
      gameOver = false;
      setPaused(false);
      // Reattach event listeners to ensure they are active
      canvas.removeEventListener("click", handleCanvasClick);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("click", handleCanvasClick);
      canvas.addEventListener("mousemove", handleMouseMove);
      gameLoop();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [started, highScore]); // Note: "paused" removed from dependencies

  return (
    <div
      style={{
        margin: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        fontFamily: "Quicksand, sans-serif",
        backgroundColor: "#2d2d2d",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "2rem",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          borderRadius: "2rem",
          backgroundColor: "transparent",
          width: "100%",
          height: "calc(100vh - 17rem)",
        }}
      />
      {/* Modal Preview Overlay appears only before the game starts */}
      {!started && (
        <div
          style={{
            padding: "2rem",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2rem",
            zIndex: 10,
          }}
          onClick={() => setStarted(true)}
        >
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1.5rem",
              backgroundColor: "#9990bb",
              color: "#fff",
              border: "none",
              borderRadius: "2rem",
              cursor: "pointer",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            Play
          </button>
        </div>
      )}
    </div>
  );
};

export default PaddleFuryGame;
