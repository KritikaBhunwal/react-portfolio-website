import React, { useEffect, useRef, useState } from "react";
import bgImage from "/bg-image-blank.png"; // Background image import
import "../styles/meteorRushGame.css";     // Import external stylesheet

const MeteorRushGame = () => {
  /* 
    ---------------------------------------------------
    1. Detect if user is Kritika based on URL parameter
    ---------------------------------------------------
  */
  const urlParams = new URLSearchParams(window.location.search);
  const isKritika = urlParams.get("user") === "kritika";

  /*
    ---------------------------------------------------
    2. Refs and State Initialization
    ---------------------------------------------------
      - canvasRef: reference to the <canvas> for drawing
      - basket: holds the paddle/basket properties
      - leaves: array of falling objects (the "meteors" or "leaves")
      - game control states: score, lives, paused, etc.
      - references (useRef) to keep track of mutable values in game loop
  */
  const canvasRef = useRef(null);
  const bgImageRef = useRef(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem("meteorRushGameHighScore")) || 0);
  const [kritikaScore, setKritikaScore] = useState(() => Number(localStorage.getItem("kritikaScore")) || 0);
  
  // Refs for mutable values:
  const highScoreRef = useRef(highScore);
  const basket = useRef({ x: 0, y: 0, width: 0, height: 0 });
  const leaves = useRef([]);
  const intervalRef = useRef(null);
  const requestRef = useRef(null);
  const scoreRef = useRef(score);
  const livesRef = useRef(lives);
  const gameOverRef = useRef(gameOver);
  const pausedRef = useRef(paused);
  const kritikaScoreRef = useRef(kritikaScore);

  /*
    ---------------------------------------------------
    3. Keep refs in sync with state
    ---------------------------------------------------
  */
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { gameOverRef.current = gameOver; }, [gameOver]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => { highScoreRef.current = highScore; }, [highScore]);
  useEffect(() => { kritikaScoreRef.current = kritikaScore; }, [kritikaScore]);

  /*
    ---------------------------------------------------
    4. Update High Score and (if Kritika) Kritika's Score
    ---------------------------------------------------
  */
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("meteorRushGameHighScore", score);
    }
    // If Kritika is playing, update her personal score
    if (isKritika && score > kritikaScore) {
      setKritikaScore(score);
      localStorage.setItem("kritikaScore", score);
    }
  }, [score, highScore, kritikaScore, isKritika]);

  /*
    ---------------------------------------------------
    5. Load the background image
    ---------------------------------------------------
  */
  useEffect(() => {
    bgImageRef.current = new Image();
    bgImageRef.current.src = bgImage;
  }, []);

  /*
    ---------------------------------------------------
    6. Unified Modal Drawing Function (Game Over)
    ---------------------------------------------------
      - Renders a semi-transparent overlay with:
         * Final Score
         * High Score
         * Kritika's Score (if applicable)
         * Play Again button
  */
  const drawGameOverModal = (ctx, canvas, finalScore, currentHighScore, kritikaScoreValue) => {
    const isMobile = canvas.width < 768;

    // Dark overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title text
    const titleFontSize = isMobile ? 36 : 48;
    ctx.fillStyle = "#cbbfee";
    ctx.font = `${titleFontSize}px Chonburi`;
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - (isMobile ? 80 : 100));

    // Score text
    ctx.fillStyle = "#fff";
    ctx.font = isMobile ? "20px Quicksand" : "28px Quicksand";
    if (isMobile) {
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width / 2, canvas.height / 2 - 30);
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width / 2, canvas.height / 2);
      if (isKritika) {
        ctx.fillText(`Kritika's Score: ${kritikaScoreValue}`, canvas.width / 2, canvas.height / 2 + 30);
      }
    } else {
      ctx.textAlign = "left";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 30);
      ctx.textAlign = "right";
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width * 0.9, canvas.height / 2 - 30);
      if (isKritika) {
        ctx.textAlign = "center";
        ctx.fillText(`Kritika's Score: ${kritikaScoreValue}`, canvas.width / 2, canvas.height / 2 + 10);
      }
    }

    // "Play Again" button
    const buttonWidth = 150;
    const buttonHeight = 50;
    const buttonFontSize = isMobile ? 20 : 25;
    const playAgainX = canvas.width / 2 - buttonWidth / 2;
    const playAgainY = isMobile ? canvas.height / 2 + 60 : canvas.height / 2 + 30;

    ctx.fillStyle = "#cbbfee";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(playAgainX, playAgainY, buttonWidth, buttonHeight, 25);
    } else {
      ctx.fillRect(playAgainX, playAgainY, buttonWidth, buttonHeight);
    }
    ctx.fill();

    ctx.fillStyle = "#3d3d3d";
    ctx.font = `${buttonFontSize}px Quicksand`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Play Again", playAgainX + buttonWidth / 2, playAgainY + buttonHeight / 2);
  };

  /*
    ---------------------------------------------------
    7. Game Control Functions
    ---------------------------------------------------
      - startGame: resets and initiates the game
      - createLeaf: spawns a new "leaf"/"meteor" object
  */
  const startGame = () => {
    setScore(0);
    setLives(3);
    setGameOver(false);
    gameOverRef.current = false;
    setPaused(false);
    leaves.current = [];

    // Clear any previous animation
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    // Start the game loop
    requestRef.current = requestAnimationFrame(gameLoop);

    // Spawn leaves at 1-second intervals
    intervalRef.current = setInterval(() => {
      if (!gameOverRef.current && !pausedRef.current) createLeaf(canvasRef.current);
    }, 1000);
  };

  // Create a new falling leaf
  const createLeaf = (canvas) => {
    const paddleLength = canvas.width / 5;
    const ballRadius = paddleLength / 6;
    leaves.current.push({
      x: Math.random() * canvas.width,
      y: ballRadius,
      radius: ballRadius,
      speed: 2 + Math.random() * 3,
    });
  };

  /*
    ---------------------------------------------------
    8. Drawing Functions
    ---------------------------------------------------
      - drawBasket: draws the player's basket (paddle)
      - drawLeaves: draws all falling leaves
      - drawUI: draws score and lives
  */
  const drawBasket = (ctx) => {
    const width = canvasRef.current.width / 5;
    const height = width / 4;
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

  const drawLeaves = (ctx) => {
    ctx.fillStyle = "#fff";
    leaves.current.forEach((leaf) => {
      ctx.beginPath();
      ctx.arc(leaf.x, leaf.y, leaf.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawUI = (ctx) => {
    ctx.fillStyle = "#fff";
    ctx.font = "20px Quicksand";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${scoreRef.current}`, 30, 50);
    ctx.fillText(`Lives: ${livesRef.current}`, 30, 80);
  };

  /*
    ---------------------------------------------------
    9. Game Mechanics
    ---------------------------------------------------
      - moveLeaves: updates leaf positions
      - checkCollisions: detects catching or missing leaves
  */
  const moveLeaves = () => {
    leaves.current.forEach((leaf) => {
      leaf.y += leaf.speed;
    });
  };

  const checkCollisions = (canvas) => {
    leaves.current = leaves.current.filter((leaf) => {
      const { x: bx, y: by, width } = basket.current;
      const caught =
        leaf.y + leaf.radius >= by &&
        leaf.x > bx &&
        leaf.x < bx + width;

      if (caught) {
        setScore((prev) => prev + 1);
        return false; // Remove leaf
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
        return false; // Remove leaf
      }
      return true; // Keep leaf
    });
  };

  /*
    ---------------------------------------------------
    10. Main Game Loop
    ---------------------------------------------------
      - Clears canvas
      - Draws background, leaves, UI
      - Handles paused or game over states
      - Continuously requests next frame
  */
  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background image (if loaded)
    if (bgImageRef.current && bgImageRef.current.complete) {
      ctx.drawImage(bgImageRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Translucent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw leaves and UI
    drawLeaves(ctx);
    drawUI(ctx);

    // Handle game states
    if (!gameOverRef.current) {
      if (!pausedRef.current) {
        drawBasket(ctx);
        moveLeaves();
        checkCollisions(canvas);
      } else {
        // Show "Paused" overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "50px Quicksand";
        ctx.textAlign = "center";
        ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
      }
    } else {
      // Show "Game Over" modal
      drawGameOverModal(ctx, canvas, scoreRef.current, highScoreRef.current, kritikaScoreRef.current);
    }

    // Request next frame
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  /*
    ---------------------------------------------------
    11. Event Handlers & Component Setup
    ---------------------------------------------------
      - Mouse/touch move to position the basket
      - Device tilt for mobile
      - Click to pause or restart if game over
      - Start the game on mount
  */
  useEffect(() => {
    const canvas = canvasRef.current;
    // Make the canvas fill its container dynamically
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Initial basket placement
    basket.current.width = canvas.width / 5;
    basket.current.height = basket.current.width / 5;
    basket.current.x = canvas.width / 2 - basket.current.width / 2;
    basket.current.y = canvas.height - basket.current.height - canvas.height * 0.05;

    // Mouse movement
    const handleMouseMove = (e) => {
      if (gameOverRef.current) return;
      const { left } = canvas.getBoundingClientRect();
      basket.current.x = e.clientX - left - basket.current.width / 2;
      basket.current.x = Math.max(0, Math.min(canvas.width - basket.current.width, basket.current.x));
    };

    // Touch movement
    const handleTouchMove = (e) => {
      if (gameOverRef.current) return;
      const { left } = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      basket.current.x = touch.clientX - left - basket.current.width / 2;
      basket.current.x = Math.max(0, Math.min(canvas.width - basket.current.width, basket.current.x));
    };

    // Device tilt (mobile)
    const handleTilt = (e) => {
      if (gameOverRef.current) return;
      const tilt = e.gamma;
      if (tilt !== null) {
        basket.current.x += tilt * 0.5;
        basket.current.x = Math.max(0, Math.min(canvas.width - basket.current.width, basket.current.x));
      }
    };

    // Click to pause or restart
    const handleClick = (e) => {
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      if (gameOverRef.current) {
        // "Play Again" button coords
        const buttonWidth = 150;
        const buttonHeight = 50;
        const playAgainX = canvas.width / 2 - buttonWidth / 2;
        const playAgainY = canvas.width < 768 ? canvas.height / 2 + 60 : canvas.height / 2 + 30;
        const clickedPlayAgain =
          x > playAgainX && x < playAgainX + buttonWidth &&
          y > playAgainY && y < playAgainY + buttonHeight;
        if (clickedPlayAgain) startGame();
      } else {
        setPaused((prev) => !prev);
      }
    };

    // Attach event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("click", handleClick);
    window.addEventListener("deviceorientation", handleTilt);

    // Start the game immediately
    startGame();

    // Cleanup
    return () => {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("deviceorientation", handleTilt);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="meteor-game-container">
      <canvas ref={canvasRef} className="meteor-game-canvas" />
    </div>
  );
};

export default MeteorRushGame;
