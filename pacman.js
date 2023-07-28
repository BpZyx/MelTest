const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Constants
const SCREEN_WIDTH = canvas.width;
const SCREEN_HEIGHT = canvas.height;
const PACMAN_SPEED = 3;

// Colors
const BLACK = 'black';
const YELLOW = 'yellow';

// Load Pac-Man image
const pacmanImage = new Image();
pacmanImage.src = 'Bp.png';

// Pac-Man's starting position
let pacmanX = SCREEN_WIDTH / 2;
let pacmanY = SCREEN_HEIGHT / 2;

// Main game loop
function gameLoop() {
  clearCanvas();
  movePacman();
  drawPacman();
  requestAnimationFrame(gameLoop);
}

// Clear the canvas
function clearCanvas() {
  ctx.fillStyle = BLACK;
  ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
}

// Move Pac-Man
function movePacman() {
  if (keys[37]) {
    pacmanX -= PACMAN_SPEED; // Left arrow key
  } else if (keys[39]) {
    pacmanX += PACMAN_SPEED; // Right arrow key
  } else if (keys[38]) {
    pacmanY -= PACMAN_SPEED; // Up arrow key
  } else if (keys[40]) {
    pacmanY += PACMAN_SPEED; // Down arrow key
  }
}

// Draw Pac-Man
function drawPacman() {
  ctx.drawImage(pacmanImage, pacmanX, pacmanY);
}

// Keyboard event handling
const keys = {};
window.addEventListener('keydown', (event) => {
  keys[event.keyCode] = true;
});
window.addEventListener('keyup', (event) => {
  keys[event.keyCode] = false;
});

// Start the game loop
gameLoop();
