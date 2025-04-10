import React, { useRef, useEffect, useState } from "react";
import bgImage from "/bg-image-blank.png"; // Still imported, but no longer drawn on canvas
import "../styles/snakeGame.css";

/**
 * Basic SNAKE game:
 * - Press Space or click canvas to pause.
 * - Score display has consistent margin for mobile / desktop.
 * - Canvas has an even 2rem margin and 80vh height across all screens.
 * - The container's background is shown behind the transparent canvas.
 */
const SnakeGame = () => {
  // Check if user is Kritika
  const urlParams = new URLSearchParams(window.location.search);
  const isKritika = urlParams.get("user") === "kritika";

  // Canvas ref
  const canvasRef = useRef(null);
  const bgImageRef = useRef(null);

  // Pause & game state
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // High score
  const [highScore, setHighScore] = useState(
    () => Number(localStorage.getItem("snakeGameHighScore")) || 0
  );
  const highScoreRef = useRef(highScore);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  // Kritika’s personal best
  const [kritikaScore, setKritikaScore] = useState(
    () => Number(localStorage.getItem("kritikaScoreSnake")) || 0
  );
  const kritikaScoreRef = useRef(kritikaScore);
  useEffect(() => {
    kritikaScoreRef.current = kritikaScore;
  }, [kritikaScore]);

  // Used to detect game over
  const gameOverRef = useRef(false);
  const restartAllowedRef = useRef(false);

  // === SNAKE CONFIGURATION ===
  const gridSize = 40;      // size of each cell
  const initialSpeed = 200; // ms between snake moves

  // Snake + food
  const snake = useRef({
    segments: [
      { x: 8, y: 10 },
      { x: 7, y: 10 },
      { x: 6, y: 10 },
    ],
    direction: { x: 0, y: -1 }, // moving up by default
  });
  const food = useRef({ x: 15, y: 10 });
  let localScore = 0;
  let speed = initialSpeed;
  let intervalId = null;

  // Utility: place food randomly
  const placeFoodRandomly = (canvasWidth, canvasHeight) => {
    const cols = Math.floor(canvasWidth / gridSize);
    const rows = Math.floor(canvasHeight / gridSize);
    food.current.x = Math.floor(Math.random() * cols);
    food.current.y = Math.floor(Math.random() * rows);
  };

  // Preload background image (no longer used for canvas)
  useEffect(() => {
    bgImageRef.current = new Image();
    bgImageRef.current.src = bgImage;
  }, []);

  // === GAME INITIALIZATION ===
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Match canvas size to its CSS size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Start game
    startGame(ctx, canvas);

    // Input: arrow keys / WASD for direction, space for pause, click for pause
    const handleKeyDown = (e) => {
      // If game is over and user presses space, restart if allowed
      if (gameOverRef.current) {
        if ((e.code === "Space" || e.keyCode === 32) && restartAllowedRef.current) {
          restartGame(ctx, canvas);
        }
        return;
      }

      // Arrow / WASD control
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        if (snake.current.direction.y !== 1) {
          snake.current.direction = { x: 0, y: -1 };
        }
      } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        if (snake.current.direction.y !== -1) {
          snake.current.direction = { x: 0, y: 1 };
        }
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        if (snake.current.direction.x !== 1) {
          snake.current.direction = { x: -1, y: 0 };
        }
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        if (snake.current.direction.x !== -1) {
          snake.current.direction = { x: 1, y: 0 };
        }
      }

      // Space => toggle pause
      if (e.code === "Space" || e.keyCode === 32) {
        setPaused((prev) => !prev);
        e.preventDefault(); // Prevent page scroll
      }
    };

    const handleCanvasClick = () => {
      // If game over, allow "Play Again" if clicked
      if (gameOverRef.current && restartAllowedRef.current) {
        restartGame(ctx, canvas);
      } else {
        setPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("click", handleCanvasClick);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("click", handleCanvasClick);
    };
    // eslint-disable-next-line
  }, []);

  // === START / RESTART ===
  const startGame = (ctx, canvas) => {
    localScore = 0;
    snake.current = {
      segments: [
        { x: 8, y: 10 },
        { x: 7, y: 10 },
        { x: 6, y: 10 },
      ],
      direction: { x: 0, y: -1 },
    };
    gameOverRef.current = false;
    restartAllowedRef.current = false;
    placeFoodRandomly(canvas.width, canvas.height);

    // Speed reset
    speed = initialSpeed;

    // Clear any old intervals
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      if (!pausedRef.current) {
        updateGame(ctx, canvas);
      } else {
        // If paused => draw "Paused" overlay
        drawPausedOverlay(ctx, canvas);
      }
    }, speed);
  };

  const restartGame = (ctx, canvas) => {
    localScore = 0;
    startGame(ctx, canvas);
  };

  // === GAME LOOP ===
  const updateGame = (ctx, canvas) => {
    moveSnake();

    // Collisions
    if (checkCollision(canvas)) {
      handleGameOver(ctx, canvas);
      return;
    }

    // Food eaten?
    const head = snake.current.segments[0];
    if (head.x === food.current.x && head.y === food.current.y) {
      localScore++;
      // Grow snake
      snake.current.segments.push({
        ...snake.current.segments[snake.current.segments.length - 1],
      });
      placeFoodRandomly(canvas.width, canvas.height);
    }

    // Draw everything
    drawAll(ctx, canvas);
  };

  const moveSnake = () => {
    const newHead = {
      x: snake.current.segments[0].x + snake.current.direction.x,
      y: snake.current.segments[0].y + snake.current.direction.y,
    };
    snake.current.segments.unshift(newHead);
    snake.current.segments.pop(); // remove tail
  };

  const checkCollision = (canvas) => {
    const head = snake.current.segments[0];
    const cols = Math.floor(canvas.width / gridSize);
    const rows = Math.floor(canvas.height / gridSize);

    // Wall collision
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
      return true;
    }
    // Self collision
    for (let i = 1; i < snake.current.segments.length; i++) {
      if (
        head.x === snake.current.segments[i].x &&
        head.y === snake.current.segments[i].y
      ) {
        return true;
      }
    }
    return false;
  };

  // === GAME OVER ===
  const handleGameOver = (ctx, canvas) => {
    clearInterval(intervalId);
    gameOverRef.current = true;
    restartAllowedRef.current = true;

    // Update high score
    if (localScore > highScoreRef.current) {
      setHighScore(localScore);
      localStorage.setItem("snakeGameHighScore", localScore);
    }
    // Update Kritika’s personal best
    if (isKritika && localScore > kritikaScoreRef.current) {
      setKritikaScore(localScore);
      localStorage.setItem("kritikaScoreSnake", localScore);
    }

    drawGameOverModal(ctx, canvas, localScore, highScoreRef.current, kritikaScoreRef.current);
  };

  // === RENDERING ===
  const drawAll = (ctx, canvas) => {
    // ============================
    // CHANGE #1: Remove double background
    // Instead of drawing an image or filling color,
    // we simply clear the canvas:
    // ============================
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake + food
    drawSnake(ctx);
    drawFood(ctx);

    // Score with consistent margin
    const isMobile = canvas.width < 768;
    const scoreX = isMobile ? 20 : 40;
    const scoreY = isMobile ? 40 : 60;
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
    const isMobile = canvas.width < 768;

    // overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // title
    const titleFontSize = isMobile ? 40 : 50;
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${titleFontSize}px Chonburi`;
    ctx.textAlign = "center";
    ctx.fillText(
      "Game Over",
      canvas.width / 2,
      canvas.height / 2 - (isMobile ? 100 : 120)
    );

    // scores
    ctx.fillStyle = "#fff";
    if (isMobile) {
      ctx.font = "20px Quicksand";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width / 2, canvas.height / 2 - 40);
      ctx.fillText(`High Score: ${hs}`, canvas.width / 2, canvas.height / 2 - 10);
      if (isKritika) {
        ctx.fillText(
          `Kritika's Score: ${kritikaVal}`,
          canvas.width / 2,
          canvas.height / 2 + 20
        );
      }
    } else {
      ctx.font = "30px Quicksand";
      ctx.textAlign = "left";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 40);
      ctx.textAlign = "right";
      ctx.fillText(`High Score: ${hs}`, canvas.width * 0.9, canvas.height / 2 - 40);
      if (isKritika) {
        ctx.textAlign = "center";
        ctx.fillText(
          `Kritika's Score: ${kritikaVal}`,
          canvas.width / 2,
          canvas.height / 2
        );
      }
    }

    // "Play Again" button
    const buttonWidth = 150;
    const buttonHeight = 50;
    const btnFontSize = isMobile ? 20 : 25;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${btnFontSize}px Quicksand`;
    const playAgainX = canvas.width / 2 - buttonWidth / 2;
    const playAgainY = isMobile
      ? canvas.height / 2 + 60
      : canvas.height / 2 + 20;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(playAgainX, playAgainY, buttonWidth, buttonHeight, 25);
    } else {
      ctx.fillRect(playAgainX, playAgainY, buttonWidth, buttonHeight);
    }
    ctx.fill();

    ctx.fillStyle = "#2d2d2d";
    ctx.textAlign = "center";
    ctx.fillText(
      "Play Again",
      playAgainX + buttonWidth / 2,
      playAgainY + buttonHeight / 2
    );
  };

  const drawPausedOverlay = (ctx, canvas) => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "40px Quicksand";
    ctx.textAlign = "center";
    ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
  };

  return (
    <div className="snake-game-container">
      <canvas ref={canvasRef} className="snake-canvas" />
    </div>
  );
};

export default SnakeGame;
