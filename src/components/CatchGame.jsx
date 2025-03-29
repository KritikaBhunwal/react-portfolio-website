import React, { useEffect, useRef, useState } from "react";
import bgImage from "../assets/images/bg-image-blank.png"; // Import the background image

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

  // A ref to always have the latest highScore
  const highScoreRef = useRef(highScore);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  const basket = useRef({ x: 0, y: 0, width: 200, height: 40 });
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

  // Real-time high score update: whenever score exceeds current highScore, update it
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("catchGameHighScore", score);
    }
  }, [score, highScore]);

  // Load background image once using the imported image
  useEffect(() => {
    bgImageRef.current = new Image();
    bgImageRef.current.src = bgImage;
  }, []);

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
  };

  const createLeaf = (canvas) => {
    leaves.current.push({
      x: Math.random() * canvas.width,
      y: 20,
      radius: 20,
      speed: 2 + Math.random() * 3,
    });
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background image (if loaded) so it appears behind game elements
    if (bgImageRef.current && bgImageRef.current.complete) {
      ctx.drawImage(bgImageRef.current, 0, 0, canvas.width, canvas.height);
    }

    // Draw semi-transparent overlay so that the background shows through slightly
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
        // Draw pause overlay when paused
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "50px Quicksand";
        ctx.textAlign = "center";
        ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
      }
    } else {
      drawGameOver(ctx, canvas);
    }

    requestRef.current = requestAnimationFrame(gameLoop);
  };

  const drawBasket = (ctx) => {
    const { x, y, width, height } = basket.current;
    ctx.fillStyle = "#9990bb";
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
    ctx.fillText(`Score: ${scoreRef.current}`, 20, 30);
    ctx.fillText(`Lives: ${livesRef.current}`, 20, 60);
  };

  const drawGameOver = (ctx, canvas) => {
    // Draw game over overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#9990bb";
    ctx.font = "50px Chonburi";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 50);


    ctx.fillStyle = "#fff";
    ctx.font = "30px Quicksand";
    ctx.fillText(`Final Score: ${scoreRef.current}`, canvas.width / 2, canvas.height / 2);
    ctx.fillText(`High Score: ${highScoreRef.current}`, canvas.width / 2, canvas.height / 2 + 40);

    // Draw Play Again button
    // Draw Play Again button
    ctx.fillStyle = "#9990bb";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(canvas.width / 2 - 100, canvas.height / 2 + 80, 200, 50, 25); // Increased corner radius to 25
    } else {
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 80, 200, 50);
    }
    ctx.fill();

    ctx.fillStyle = "#fff";
    ctx.font = "25px Quicksand";
    ctx.fillText("Play Again", canvas.width / 2, canvas.height / 2 + 115);
  };

  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    // Set internal canvas dimensions based on rendered size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    basket.current.x = canvas.width / 2 - 100;
    basket.current.y = canvas.height - 100;

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
        // Check if "Play Again" button is clicked
        const inPlayAgainButton =
          x > canvas.width / 2 - 100 &&
          x < canvas.width / 2 + 100 &&
          y > canvas.height / 2 + 80 &&
          y < canvas.height / 2 + 130;
        if (inPlayAgainButton) {
          setScore(0);
          setLives(5);
          setGameOver(false);
          gameOverRef.current = false;
          leaves.current = [];
          requestRef.current = requestAnimationFrame(gameLoop);
        }
      } else {
        // Toggle pause if game is in progress
        setPaused((prev) => !prev);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    intervalRef.current = setInterval(() => {
      if (!gameOverRef.current) createLeaf(canvas);
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
    <div
      style={{
        margin: "4rem 4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        fontFamily: "Quicksand, sans-serif",
        backgroundColor: "#2d2d2d",
        backgroundImage: "url('/assets/images/bg-image-blank.png')",
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
    </div>
  );
};

export default CatchGame;
