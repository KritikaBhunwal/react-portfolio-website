import React, { useEffect, useRef, useState } from "react";
import bgImage from "/bg-image-blank.png"; // Import the background image
import "../styles/catchGame.css";

const CatchGame = () => {
  const canvasRef = useRef(null);
  const bgImageRef = useRef(null);
  const [started, setStarted] = useState(true); // Auto-start the game by default
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [highScore, setHighScore] = useState(
    () => Number(localStorage.getItem("catchGameHighScore")) || 0
  );

  // Keep high score updated
  const highScoreRef = useRef(highScore);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  // Refs for game objects
  const basket = useRef({ x: 0, y: 0, width: 180, height: 60 });
  const leaves = useRef([]);
  const intervalRef = useRef(null);
  const requestRef = useRef(null);

  const scoreRef = useRef(score);
  const livesRef = useRef(lives);
  const gameOverRef = useRef(gameOver);
  const pausedRef = useRef(paused);

  useEffect(() => {
    scoreRef.current = score;
    livesRef.current = lives;
    gameOverRef.current = gameOver;
  }, [score, lives, gameOver]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // Update high score in real time
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("catchGameHighScore", score);
    }
  }, [score, highScore]);

  // Load the background image
  useEffect(() => {
    bgImageRef.current = new Image();
    bgImageRef.current.src = bgImage;
  }, []);

  // Start (or restart) the game
  const startGame = () => {
    setScore(0);
    setLives(5);
    setGameOver(false);
    gameOverRef.current = false;
    setPaused(false);
    leaves.current = [];

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

  // Create a new ball (leaf)
  // On desktop (canvas.width ≥1440): fixed 30px radius; otherwise, 3% of canvas width.
  const createLeaf = (canvas) => {
    let ballRadius = canvas.width >= 1440 ? 30 : canvas.width * 0.03;
    leaves.current.push({
      x: Math.random() * canvas.width,
      y: ballRadius,
      radius: ballRadius,
      speed: 2 + Math.random() * 3,
    });
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background image if loaded
    if (bgImageRef.current && bgImageRef.current.complete) {
      ctx.drawImage(bgImageRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Draw semi-transparent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(0, 0, canvas.width, canvas.height, 32);
    } else {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.fill();

    drawLeaves(ctx);
    drawUI(ctx);

    if (!gameOverRef.current) {
      if (!pausedRef.current) {
        drawBasket(ctx);
        moveLeaves();
        checkCollisions(canvas);
      } else {
        // Draw pause overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#cbbfee";
        ctx.font = "30px Quicksand";
        ctx.textAlign = "center";
        ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
      }
    } else {
      drawGameOver(ctx, canvas);
    }
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  // Draw the paddle (basket)
  const drawBasket = (ctx) => {
    const { x, y, width, height } = basket.current;
    ctx.fillStyle = "#cbbfee";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(x, y, width, height, 32);
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

  const drawUI = (ctx) => {
    ctx.fillStyle = "#fff";
    ctx.font = "20px Quicksand";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${scoreRef.current}`, 20, 30);
    ctx.fillText(`Lives: ${livesRef.current}`, 20, 60);
  };

  // Draw the Game Over modal with scores and a "Play Again" button.
  // On desktop (canvas.width ≥768), scores are in one row; on smaller screens, in a column.
  const drawGameOver = (ctx, canvas) => {
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
        `Final Score: ${scoreRef.current}`,
        canvas.width / 2,
        canvas.height / 2 - 40
      );
      ctx.fillText(
        `High Score: ${highScoreRef.current}`,
        canvas.width / 2,
        canvas.height / 2 - 10
      );
    } else {
      const scoreFontSize = 30;
      ctx.fillStyle = "#fff";
      ctx.font = `${scoreFontSize}px Quicksand`;
      ctx.textAlign = "left";
      ctx.fillText(
        `Final Score: ${scoreRef.current}`,
        canvas.width * 0.1,
        canvas.height / 2 - 40
      );
      ctx.textAlign = "right";
      ctx.fillText(
        `High Score: ${highScoreRef.current}`,
        canvas.width * 0.9,
        canvas.height / 2 - 40
      );
    }

    // Play Again Button
    const buttonWidth = 150;
    const buttonHeight = 50;
    const buttonFontSize = isMobile ? 20 : 25;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#cbbfee"; // Use cbbfee for button background
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
    ctx.fillText("Play Again", playAgainX + buttonWidth / 2, playAgainY + buttonHeight / 2);
  };

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Set responsive paddle dimensions:
    // Desktop (canvas.width ≥1440): fixed 150x50; otherwise, use percentages.
    if (canvas.width >= 1440) {
      basket.current.width = 150;
      basket.current.height = 50;
    } else {
      basket.current.width = canvas.width * 0.2;
      basket.current.height = canvas.height * 0.04;
    }
    basket.current.x = canvas.width / 2 - basket.current.width / 2;
    basket.current.y = canvas.height - basket.current.height - canvas.height * 0.05;

    const handleMouseMove = (e) => {
      if (gameOverRef.current) return;
      const rect = canvas.getBoundingClientRect();
      basket.current.x = e.clientX - rect.left - basket.current.width / 2;
      basket.current.x = Math.max(
        0,
        Math.min(canvas.width - basket.current.width, basket.current.x)
      );
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;
      if (gameOverRef.current) {
        // Check if click is in the Play Again button area
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
        // Toggle pause during gameplay
        setPaused((prev) => !prev);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    // Create new balls at intervals (only if not paused or game over)
    intervalRef.current = setInterval(() => {
      if (!gameOverRef.current && !pausedRef.current) createLeaf(canvas);
    }, 1000);

    requestRef.current = requestAnimationFrame(gameLoop);

    return () => {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, [started]);

  return (
    <div className="catch-game-container">
      <canvas ref={canvasRef} className="catch-game-canvas" />
    </div>
  );
};

export default CatchGame;
