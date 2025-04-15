import React, { useRef, useEffect, useState } from "react";
import "../styles/snakeGame.css";

/**
 * SnakeGame Component (Full Screen Version)
 *
 * - A canvas-based snake game that spans the entire viewport.
 * - Arrow keys/WASD control the snake; Space or clicking toggles pause/restart.
 * - Displays current score and high score.
 * - Includes a close button; when clicked, it asks for confirmation
 *   before returning the user to the previous (game selection) screen.
 */
const SnakeGame = () => {
  // ----------------------------------
  // 1. Refs and State Initialization
  // ----------------------------------
  const canvasRef = useRef(null);

  // Pause state + ref
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // High score state + ref
  const [highScore, setHighScore] = useState(
    () => Number(localStorage.getItem("snakeGameHighScore")) || 0
  );
  const highScoreRef = useRef(highScore);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  // Local (current game) score as a ref
  const scoreRef = useRef(0);

  // Gameplay / game over tracking
  const gameOverRef = useRef(false);
  const restartAllowedRef = useRef(false);
  const intervalRef = useRef(null);

  // ----------------------------------
  // 2. Game Configuration
  // ----------------------------------
  const gridSize = 40;       // Each grid cell’s size in pixels
  const initialSpeed = 200;  // Milliseconds between snake moves

  // Snake + Food Refs
  const snake = useRef({
    segments: [
      { x: 8, y: 10 },
      { x: 7, y: 10 },
      { x: 6, y: 10 },
    ],
    direction: { x: 0, y: -1 }
  });
  const food = useRef({ x: 15, y: 10 });

  // ----------------------------------
  // 3. Utility Functions
  // ----------------------------------
  const resizeCanvas = (canvas) => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };

  const placeFoodRandomly = (width, height) => {
    const cols = Math.floor(width / gridSize);
    const rows = Math.floor(height / gridSize);
    food.current.x = Math.floor(Math.random() * cols);
    food.current.y = Math.floor(Math.random() * rows);
  };

  // ----------------------------------
  // 4. Canvas Initialization & Event Listeners
  // ----------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    resizeCanvas(canvas);

    startGame(ctx, canvas);

    const handleResize = () => {
      resizeCanvas(canvas);
      if (!gameOverRef.current) {
        drawAll(ctx, canvas);
      }
    };

    const handleKeyDown = (e) => {
      if (gameOverRef.current) {
        // If game is over, space restarts if allowed
        if (e.code === "Space" && restartAllowedRef.current) {
          restartGame(ctx, canvas);
        }
        return;
      }

      // Change direction
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        if (snake.current.direction.y !== 1) snake.current.direction = { x: 0, y: -1 };
      } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        if (snake.current.direction.y !== -1) snake.current.direction = { x: 0, y: 1 };
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        if (snake.current.direction.x !== 1) snake.current.direction = { x: -1, y: 0 };
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        if (snake.current.direction.x !== -1) snake.current.direction = { x: 1, y: 0 };
      }

      // Toggle pause if space
      if (e.code === "Space") {
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

    window.addEventListener("resize", handleResize);
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
  // 5. Start / Restart Functions
  // ----------------------------------
  const startGame = (ctx, canvas) => {
    resizeCanvas(canvas);
    scoreRef.current = 0;
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

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        updateGame(ctx, canvas);
      } else {
        drawPausedOverlay(ctx, canvas);
      }
    }, initialSpeed);
  };

  const restartGame = (ctx, canvas) => {
    scoreRef.current = 0;
    startGame(ctx, canvas);
  };

  // ----------------------------------
  // 6. Game Loop and Mechanics
  // ----------------------------------
  const updateGame = (ctx, canvas) => {
    moveSnake();

    if (checkCollision(canvas)) {
      handleGameOver(ctx, canvas);
      return;
    }

    const head = snake.current.segments[0];
    if (head.x === food.current.x && head.y === food.current.y) {
      scoreRef.current += 1;
      snake.current.segments.push({
        ...snake.current.segments[snake.current.segments.length - 1],
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

    // Boundary collision
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
      return true;
    }
    // Self collision
    for (let i = 1; i < snake.current.segments.length; i++) {
      if (head.x === snake.current.segments[i].x && head.y === snake.current.segments[i].y) {
        return true;
      }
    }
    return false;
  };

  // ----------------------------------
  // 7. Game Over Handling
  // ----------------------------------
  const handleGameOver = (ctx, canvas) => {
    clearInterval(intervalRef.current);
    gameOverRef.current = true;
    restartAllowedRef.current = true;

    // Update high score
    if (scoreRef.current > highScoreRef.current) {
      setHighScore(scoreRef.current);
      localStorage.setItem("snakeGameHighScore", scoreRef.current);
    }

    drawGameOverModal(ctx, canvas, scoreRef.current, highScoreRef.current);
  };

  // ----------------------------------
  // 8. Rendering Functions
  // ----------------------------------
  const drawAll = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSnake(ctx);
    drawFood(ctx);

    // Draw current score in top-left
    ctx.fillStyle = "#fff";
    ctx.font = "20px Quicksand";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${scoreRef.current}`, 40, 60);
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

  const drawGameOverModal = (ctx, canvas, finalScore, hs) => {
    // Dark overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Use device width to detect “mobile” (e.g., < 768px)
    const isMobile = canvas.width < 768;
  
    // Title
    ctx.fillStyle = "#cbbfee";
    ctx.font = isMobile ? "40px Chonburi" : "50px Chonburi";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - (isMobile ? 100 : 120));
  
    // Score Text
    ctx.fillStyle = "#fff";
    if (isMobile) {
      ctx.font = "20px Quicksand";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width / 2, canvas.height / 2 - 30);
      ctx.fillText(`High Score: ${hs}`, canvas.width / 2, canvas.height / 2); 
    } else {
      ctx.font = "30px Quicksand";
      ctx.textAlign = "left";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 40);
      ctx.textAlign = "right";
      ctx.fillText(`High Score: ${hs}`, canvas.width * 0.9, canvas.height / 2 - 40);
    }
  
    // "Play Again" button
    const buttonWidth = 150;
    const buttonHeight = 50;
    const playAgainX = canvas.width / 2 - buttonWidth / 2;
    const playAgainY = isMobile ? canvas.height / 2 + 40 : canvas.height / 2 + 20;
    const btnFontSize = isMobile ? 20 : 25;
  
    ctx.fillStyle = "#cbbfee";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(playAgainX, playAgainY, buttonWidth, buttonHeight, 25);
    } else {
      ctx.fillRect(playAgainX, playAgainY, buttonWidth, buttonHeight);
    }
    ctx.fill();
  
    ctx.fillStyle = "#2d2d2d";
    ctx.font = `${btnFontSize}px Quicksand`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Play Again", playAgainX + buttonWidth / 2, playAgainY + buttonHeight / 2);
  };
  

  // ----------------------------------
  // 9. Close Game Handler
  // ----------------------------------
  const handleCloseClick = () => {
    const confirmClose = window.confirm("Are you sure you want to close the game?");
    if (confirmClose) {
      clearInterval(intervalRef.current);
      // Return to the same screen where the play button was hit
      window.location.href = window.location.origin + window.location.pathname;
    }
  };

  // ----------------------------------
  // 10. Render Component
  // ----------------------------------
  return (
    <div className="snake-game-container">
      <button className="close-button" onClick={handleCloseClick}>✖</button>
      <canvas ref={canvasRef} className="snake-canvas" />
    </div>
  );
};

export default SnakeGame;
