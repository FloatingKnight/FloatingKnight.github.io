// Set up the canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set up the snake
const snake = [{x: 150, y: 150}, {x: 140, y: 150}, {x: 130, y: 150}, {x: 120, y: 150}, {x: 110, y: 150}];

// Set up the apples
let apples = [{x: 300, y: 300}];

// Set up the score
let score = 0;

// Set up the direction
let dx = 10;
let dy = 0;

// Set up the speed
let speed = 100;

// Set up the game loop
setInterval(() => {
  // Move the snake
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  const didEatApple = snake[0].x === apples[0].x && snake[0].y === apples[0].y;
  if (didEatApple) {
    // Increase the score
    score += 10;
    // Generate a new apple
    apples = [{x: getRandomInt(10, canvas.width - 10), y: getRandomInt(10, canvas.height - 10)}];
  } else {
    // Remove the tail
    snake.pop();
  }

  // Draw everything
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'lightgreen';
  snake.forEach(segment => ctx.fillRect(segment.x, segment.y, 10, 10));
  ctx.fillStyle = 'red';
  apples.forEach(apple => ctx.fillRect(apple.x, apple.y, 10, 10));
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 25);
}, speed);

// Set up keyboard controls
document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      dx = 0;
      dy = -10;
      break;
    case 'ArrowDown':
      dx = 0;
      dy = 10;
      break;
    case 'ArrowLeft':
      dx = -10;
      dy = 0;
      break;
    case 'ArrowRight':
      dx = 10;
      dy = 0;
      break;
  }
});

// Helper function to get a random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
