const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Constants and code remain the same as before...
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
pacmanImage.src = 'path/to/your/character.png';

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

// Touch event handling for mobile
let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener('touchstart', (event) => {
  event.preventDefault();
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

canvas.addEventListener('touchend', (event) => {
  event.preventDefault();
  const touchEndX = event.changedTouches[0].clientX;
  const touchEndY = event.changedTouches[0].clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal swipe
    if (deltaX > 0) {
      keys[39] = true; // Right arrow key
      keys[37] = false; // Reset left arrow key
    } else {
      keys[37] = true; // Left arrow key
      keys[39] = false; // Reset right arrow key
    }
    keys[38] = false; // Reset up arrow key
    keys[40] = false; // Reset down arrow key
  } else {
    // Vertical swipe
    if (deltaY > 0) {
      keys[40] = true; // Down arrow key
      keys[38] = false; // Reset up arrow key
    } else {
      keys[38] = true; // Up arrow key
      keys[40] = false; // Reset down arrow key
    }
    keys[37] = false; // Reset left arrow key
    keys[39] = false; // Reset right arrow key
  }
});

canvas.addEventListener('touchmove', (event) => {
  event.preventDefault();
});
