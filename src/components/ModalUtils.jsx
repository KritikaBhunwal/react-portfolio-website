// Unified function to draw the Game Over modal.
// Accepts the canvas rendering context, canvas element, final score, and high score.
const drawGameOverModal = (ctx, canvas, finalScore, currentHighScore) => {
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
  
    // Draw scores
    if (isMobile) {
      const scoreFontSize = 20;
      ctx.fillStyle = "#fff";
      ctx.font = `${scoreFontSize}px Quicksand`;
      ctx.textAlign = "center";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width / 2, canvas.height / 2 - 40);
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width / 2, canvas.height / 2 - 10);
    } else {
      const scoreFontSize = 30;
      ctx.fillStyle = "#fff";
      ctx.font = `${scoreFontSize}px Quicksand`;
      ctx.textAlign = "left";
      ctx.fillText(`Final Score: ${finalScore}`, canvas.width * 0.1, canvas.height / 2 - 40);
      ctx.textAlign = "right";
      ctx.fillText(`High Score: ${currentHighScore}`, canvas.width * 0.9, canvas.height / 2 - 40);
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
  