import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-with-logo.png"; // Background image for container aesthetics
import "../styles/snakeGame.css";           // External CSS

/**
 * SnakeGame Component (Full Screen Version)
 *
 * - A canvas-based snake game that spans the entire viewport.
 * - Arrow keys/WASD control the snake; Space or clicking toggles pause/restart.
 * - Displays score, high score, and (if applicable) Kritika's best score.
 * - Includes a close button; when clicked, it asks for confirmation before returning the user to the previous (game selection) screen.
 */
const SnakeGame = () => {
  // ----------------------------------
  // 1. Special User Detection (e.g., Kritika)
  // ----------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const isKritika = urlParams.get("user") === "kritika";

  // ----------------------------------
  // 2. Refs and State Initialization
  // ----------------------------------
  const canvasRef = useRef(null);
  const bgImageRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const [highScore, setHighScore] = useState(
    () => Number(localStorage.getItem("snakeGameHighScore")) || 0
  );
  const highScoreRef = useRef(highScore);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  const [kritikaScore, setKritikaScore] = useState(
    () => Number(localStorage.getItem("kritikaScoreSnake")) || 0
  );
  const kritikaScoreRef = useRef(kritikaScore);
  useEffect(() => {
    kritikaScoreRef.current = kritikaScore;
  }, [kritikaScore]);

  const gameOverRef = useRef(false);
  const restartAllowedRef = useRef(false);
  const intervalRef = useRef(null);

  // ----------------------------------
  // 3. Game Configuration
  // ----------------------------------
  const gridSize = 40;      // Each grid cell’s size in pixels
  const initialSpeed = 200; // Milliseconds between snake moves

  const snake = useRef({
    segments: [
      { x: 8, y: 10 },
      { x: 7, y: 10 },
      { x: 6, y: 10 },
    ],
    direction: { x: 0, y: -1 } // Initially moving upward
  });
  const food = useRef({ x: 15, y: 10 });

  let localScore = 0;
  let speed = initialSpeed;

  // ----------------------------------
  // 4. Utility Functions
  // ----------------------------------
  // Resize the canvas to exactly match its container (full screen)
  const resizeCanvas = (canvas) => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };

  // Place food randomly within grid bounds based on canvas dimensions
  const placeFoodRandomly = (canvasWidth, canvasHeight) => {
    const cols = Math.floor(canvasWidth / gridSize);
    const rows = Math.floor(canvasHeight / gridSize);
    food.current.x = Math.floor(Math.random() * cols);
    food.current.y = Math.floor(Math.random() * rows);
  };

  // Preload background image (used in container styling)
  useEffect(() => {
    bgImageRef.current = new Image();
    bgImageRef.current.src = bgImage;
  }, []);

  // ----------------------------------
  // 5. Canvas Initialization and Event Listeners
  // ----------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    resizeCanvas(canvas); // Ensure the canvas matches the full screen

    startGame(ctx, canvas);

    const handleResize = () => {
      resizeCanvas(canvas);
      if (!gameOverRef.current) drawAll(ctx, canvas);
    };
    window.addEventListener("resize", handleResize);

    const handleKeyDown = (e) => {
      if (gameOverRef.current) {
        if ((e.code === "Space" || e.keyCode === 32) && restartAllowedRef.current) {
          restartGame(ctx, canvas);
        }
        return;
      }
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        if (snake.current.direction.y !== 1) snake.current.direction = { x: 0, y: -1 };
      } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        if (snake.current.direction.y !== -1) snake.current.direction = { x: 0, y: 1 };
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        if (snake.current.direction.x !== 1) snake.current.direction = { x: -1, y: 0 };
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        if (snake.current.direction.x !== -1) snake.current.direction = { x: 1, y: 0 };
      }
      if (e.code === "Space" || e.keyCode === 32) {
        setPaused((prev) => !prev);
        e.preventDefault();
      }
    };

    const handleCanvasClick = () => {
      if (gameOverRef.current && restartAllowedRef.current) {
        restartGame(ctx, canvas);
      } else {
        setPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("click", handleCanvasClick);
    };
    // eslint-disable-next-line
  }, []);

  // ----------------------------------
  // 6. Start / Restart Functions
  // ----------------------------------
  const startGame = (ctx, canvas) => {
    resizeCanvas(canvas);
    localScore = 0;
    snake.current = {
      segments: [
        { x: 8, y: 10 },
        { x: 7, y: 10 },
        { x: 6, y: 10 },
      ],
      direction: { x: 0, y: -1 }
    };
    gameOverRef.current = false;
    restartAllowedRef.current = false;
    placeFoodRandomly(canvas.width, canvas.height);
    speed = initialSpeed;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        updateGame(ctx, canvas);
      } else {
        drawPausedOverlay(ctx, canvas);
      }
    }, speed);
  };

  const restartGame = (ctx, canvas) => {
    localScore = 0;
    startGame(ctx, canvas);
  };

  // ----------------------------------
  // 7. Game Loop and Mechanics
  // ----------------------------------
  const updateGame = (ctx, canvas) => {
    moveSnake();

    if (checkCollision(canvas)) {
      handleGameOver(ctx, canvas);
      return;
    }

    const head = snake.current.segments[0];
    if (head.x === food.current.x && head.y === food.current.y) {
      localScore++;
      snake.current.segments.push({
        ...snake.current.segments[snake.current.segments.length - 1]
      });
      placeFoodRandomly(canvas.width, canvas.height);
    }
    drawAll(ctx, canvas);
  };

  const moveSnake = () => {
    const newHead = {
      x: snake.current.segments[0].x + snake.current.direction.x,
      y: snake.current.segments[0].y + snake.current.direction.y,
    };
    snake.current.segments.unshift(newHead);
    snake.current.segments.pop();
  };

  const checkCollision = (canvas) => {
    const head = snake.current.segments[0];
    const cols = Math.floor(canvas.width / gridSize);
    const rows = Math.floor(canvas.height / gridSize);
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) return true;
    for (let i = 1; i < snake.current.segments.length; i++) {
      if (head.x === snake.current.segments[i].x && head.y === snake.current.segments[i].y)
        return true;
    }
    return false;
  };

  // ----------------------------------
  // 8. Game Over and Modal Handling
  // ----------------------------------
  const handleGameOver = (ctx, canvas) => {
    clearInterval(intervalRef.current);
    gameOverRef.current = true;
    restartAllowedRef.current = true;
    if (localScore > highScoreRef.current) {
      setHighScore(localScore);
      localStorage.setItem("snakeGameHighScore", localScore);
    }
    if (isKritika && localScore > kritikaScoreRef.current) {
      setKritikaScore(localScore);
      localStorage.setItem("kritikaScoreSnake", localScore);
    }
    drawGameOverModal(ctx, canvas, localScore, highScoreRef.current, kritikaScoreRef.current);
  };

  // ----------------------------------
  // 9. Rendering Functions
  // ----------------------------------
  const drawAll = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake(ctx);
    drawFood(ctx);
    const scoreX = 40;
    const scoreY = 60;
    ctx.fillStyle = "#fff";
    ctx.font = "20px Quicksand";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${localScore}`, scoreX, scoreY);
  };

  const drawSnake = (ctx) => {
    ctx.fillStyle = "#cbbfee";
    snake.current.segments.forEach((segment) => {
      const centerX = segment.x * gridSize + gridSize / 2;
      const centerY = segment.y * gridSize + gridSize / 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, gridSize / 2.2, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawFood = (ctx) => {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    const fx = food.current.x * gridSize + gridSize / 2;
    const fy = food.current.y * gridSize + gridSize / 2;
    ctx.arc(fx, fy, gridSize / 2.2, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawGameOverModal = (ctx, canvas, finalScore, hs, kritikaVal) => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const titleFontSize = 50;
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${titleFontSize}px Chonburi`;
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 120);
    ctx.fillStyle = "#fff";
    ctx.font = "30px Quicksand";
    ctx.textAlign = "left";
    ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 40);
    ctx.textAlign = "right";
    ctx.fillText(`High Score: ${hs}`, canvas.width * 0.9, canvas.height / 2 - 40);
    ctx.textAlign = "center";
    if (isKritika) {
      ctx.fillText(`Kritika's Score: ${kritikaVal}`, canvas.width / 2, canvas.height / 2 + 10);
    }
    const buttonWidth = 150;
    const buttonHeight = 50;
    const btnFontSize = 25;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${btnFontSize}px Quicksand`;
    const playAgainX = canvas.width / 2 - buttonWidth / 2;
    const playAgainY = canvas.height / 2 + 20;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(playAgainX, playAgainY, buttonWidth, buttonHeight, 25);
    } else {
      ctx.fillRect(playAgainX, playAgainY, buttonWidth, buttonHeight);
    }
    ctx.fill();
    ctx.fillStyle = "#2d2d2d";
    ctx.textAlign = "center";
    ctx.fillText("Play Again", playAgainX + buttonWidth / 2, playAgainY + buttonHeight / 2);
  };

  const drawPausedOverlay = (ctx, canvas) => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "40px Quicksand";
    ctx.textAlign = "center";
    ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
  };

  // ----------------------------------
  // 10. Close Game Handler
  // ----------------------------------
  const handleCloseClick = () => {
    const confirmClose = window.confirm(
      "Are you sure you want to close the game?"
    );
    if (confirmClose) {
      clearInterval(intervalRef.current);
      // Return to the same screen where the play button was hit
      window.location.href = window.location.origin + window.location.pathname;
    }
  };

  // ----------------------------------
  // 11. Render Component
  // ----------------------------------
  return (
    <div className="snake-game-container">
      <button className="close-button" onClick={handleCloseClick}>X</button>
      <canvas ref={canvasRef} className="snake-canvas" />
    </div>
  );
};

export default SnakeGame;
