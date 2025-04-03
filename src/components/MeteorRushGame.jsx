import React, { useEffect, useRef, useState } from "react";
import bgImage from "/bg-image-blank.png"; // Background image import
import "../styles/meteorRushGame.css";

const MeteorRushGame = () => {
  // --- Detect if user is Kritika via a query parameter (e.g., ?user=kritika)
  const urlParams = new URLSearchParams(window.location.search);
  const isKritika = urlParams.get("user") === "kritika";

  // --- Refs and State Initialization ---
  const canvasRef = useRef(null);
  const bgImageRef = useRef(null);
  
  // Game control state (auto-started by default)
  const [started] = useState(true);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [highScore, setHighScore] = useState(
    () => Number(localStorage.getItem("meteorRushGameHighScore")) || 0
  );
  // Kritika’s score stored separately
  const [kritikaScore, setKritikaScore] = useState(
    () => Number(localStorage.getItem("kritikaScore")) || 0
  );

  // Refs to hold mutable values for real-time updates inside the game loop
  const highScoreRef = useRef(highScore);
  // basket object will hold the paddle properties
  const basket = useRef({ x: 0, y: 0, width: 0, height: 0 });
  const leaves = useRef([]);
  const intervalRef = useRef(null);
  const requestRef = useRef(null);
  const scoreRef = useRef(score);
  const livesRef = useRef(lives);
  const gameOverRef = useRef(gameOver);
  const pausedRef = useRef(paused);
  const kritikaScoreRef = useRef(kritikaScore);

  // Keep state refs updated for use in the game loop
  useEffect(() => {
    scoreRef.current = score;
    livesRef.current = lives;
    gameOverRef.current = gameOver;
  }, [score, lives, gameOver]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  useEffect(() => {
    kritikaScoreRef.current = kritikaScore;
  }, [kritikaScore]);

  // Update the high score if current score exceeds it
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("meteorRushGameHighScore", score);
    }
    // If Kritika is playing, update her personal score as well
    if (isKritika && score > kritikaScore) {
      setKritikaScore(score);
      localStorage.setItem("kritikaScore", score);
    }
  }, [score, highScore, kritikaScore, isKritika]);

  // Load the background image
  useEffect(() => {
    bgImageRef.current = new Image();
    bgImageRef.current.src = bgImage;
  }, []);

  // --- Unified Modal Function ---
  // Shows an extra line for Kritika's Score if applicable.
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
      // Show Kritika's Score if applicable
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
      // Show Kritika's Score if applicable
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

  // --- Game Control Functions ---

  // Resets game state and starts the game loop and leaf creation interval.
  const startGame = () => {
    setScore(0);
    setLives(3);
    setGameOver(false);
    gameOverRef.current = false;
    setPaused(false);
    leaves.current = [];

    // Cancel any existing animation frame
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(gameLoop);
    intervalRef.current = setInterval(() => {
      if (!gameOverRef.current && !pausedRef.current) {
        createLeaf(canvasRef.current);
      }
    }, 1000);
  };

  // Create a new leaf object.
  // The leaf (ball) radius is 1/4th of the paddle’s length.
  const createLeaf = (canvas) => {
    const paddleLength = canvas.width / 6; // 1/5th of the screen width
    const ballRadius = paddleLength / 6; // 1/4th of paddle length
    leaves.current.push({
      x: Math.random() * canvas.width,
      y: ballRadius,
      radius: ballRadius,
      speed: 2 + Math.random() * 3,
    });
  };

  // --- Drawing Functions ---

  // Draw the basket (paddle) on the canvas
  const drawBasket = (ctx) => {
    // Ensure paddle dimensions follow the rules
    const width = canvasRef.current.width / 5; // 1/5th of screen width
    const height = width / 4; // 1/4th of paddle length
    basket.current.width = width;
    basket.current.height = height;
    const { x, y } = basket.current;
    ctx.fillStyle = "#cbbfee";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(x, y, width, height, 30);
    } else {
      ctx.fillRect(x, y, width, height);
    }
    ctx.fill();
  };

  // Draw all falling leaves on the canvas
  const drawLeaves = (ctx) => {
    ctx.fillStyle = "#fff";
    leaves.current.forEach((leaf) => {
      ctx.beginPath();
      ctx.arc(leaf.x, leaf.y, leaf.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Draw UI elements (score and lives) at the top-left corner
  const drawUI = (ctx) => {
    ctx.fillStyle = "#fff";
    ctx.font = "20px Quicksand";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${scoreRef.current}`, 30, 60);
    ctx.fillText(`Lives: ${livesRef.current}`, 30, 90);
  };

  // --- Game Mechanics ---

  // Update the position of each leaf
  const moveLeaves = () => {
    leaves.current.forEach((leaf) => {
      leaf.y += leaf.speed;
    });
  };

  // Check for collisions between leaves and the basket.
  // Increases score if caught, decreases lives if missed.
  const checkCollisions = (canvas) => {
    leaves.current = leaves.current.filter((leaf) => {
      const { x: bx, y: by, width } = basket.current;
      const caught =
        leaf.y + leaf.radius >= by &&
        leaf.x > bx &&
        leaf.x < bx + width;
      if (caught) {
        setScore((prev) => prev + 1);
        return false;
      }
      if (leaf.y > canvas.height) {
        setLives((prev) => {
          const updated = prev - 1;
          if (updated <= 0) {
            setGameOver(true);
            gameOverRef.current = true;
          }
          return updated;
        });
        return false;
      }
      return true;
    });
  };

  // --- Main Game Loop ---
  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background image if available
    if (bgImageRef.current && bgImageRef.current.complete) {
      ctx.drawImage(bgImageRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Draw a semi-transparent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(0, 0, canvas.width, canvas.height, 32);
    } else {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.fill();

    // Draw game elements and UI
    drawLeaves(ctx);
    drawUI(ctx);

    if (!gameOverRef.current) {
      if (!pausedRef.current) {
        drawBasket(ctx);
        moveLeaves();
        checkCollisions(canvas);
      } else {
        // Pause overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "50px Quicksand";
        ctx.textAlign = "center";
        ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
      }
    } else {
      // Render Game Over modal using unified function
      drawGameOverModal(ctx, canvas, scoreRef.current, highScoreRef.current, kritikaScoreRef.current);
    }

    // Request the next animation frame
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  // --- Event Handlers and Setup ---
  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Set paddle (basket) dimensions based on canvas width
    basket.current.width = canvas.width / 5;
    basket.current.height = basket.current.width / 4;
    basket.current.x = canvas.width / 2 - basket.current.width / 2;
    basket.current.y = canvas.height - basket.current.height - canvas.height * 0.05;

    // --- Input Handlers ---
    // Mouse movement
    const handleMouseMove = (e) => {
      if (gameOverRef.current) return;
      const rect = canvas.getBoundingClientRect();
      basket.current.x = e.clientX - rect.left - basket.current.width / 2;
      basket.current.x = Math.max(0, Math.min(canvas.width - basket.current.width, basket.current.x));
    };

    // Touch movement for tap and drag
    const handleTouchMove = (e) => {
      if (gameOverRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      basket.current.x = touch.clientX - rect.left - basket.current.width / 2;
      basket.current.x = Math.max(0, Math.min(canvas.width - basket.current.width, basket.current.x));
    };

    // Device tilt for mobile: adjust basket based on gamma
    const handleTilt = (e) => {
      if (gameOverRef.current) return;
      const tilt = e.gamma;
      if (tilt !== null) {
        basket.current.x += tilt * 0.5;
        basket.current.x = Math.max(0, Math.min(canvas.width - basket.current.width, basket.current.x));
      }
    };

    // Handle clicks for toggling pause or restarting the game
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      if (gameOverRef.current) {
        // Check if click occurred within the Play Again button
        const buttonWidth = 150;
        const buttonHeight = 50;
        let playAgainX, playAgainY;
        if (canvas.width < 768) {
          playAgainX = canvas.width / 2 - buttonWidth / 2;
          playAgainY = canvas.height / 2 + 60;
        } else {
          playAgainX = canvas.width / 2 - buttonWidth / 2;
          playAgainY = canvas.height / 2 + 20;
        }
        const inPlayAgain =
          x > playAgainX &&
          x < playAgainX + buttonWidth &&
          y > playAgainY &&
          y < playAgainY + buttonHeight;
        if (inPlayAgain) {
          startGame();
        }
      } else {
        // Toggle pause during active gameplay
        setPaused((prev) => !prev);
      }
    };

    // Register event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("click", handleClick);
    window.addEventListener("deviceorientation", handleTilt);

    // Start the game loop and leaf creation interval
    intervalRef.current = setInterval(() => {
      if (!gameOverRef.current && !pausedRef.current) createLeaf(canvas);
    }, 1000);
    requestRef.current = requestAnimationFrame(gameLoop);

    // Cleanup on unmount: remove event listeners and clear intervals
    return () => {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("deviceorientation", handleTilt);
    };
  }, [started]);

  return (
    <div className="meteor-game-container">
      <canvas ref={canvasRef} className="meteor-game-canvas" />
    </div>
  );
};

export default MeteorRushGame;
