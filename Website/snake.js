const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const GRID_SIZE = 20;
const TILE_COUNT = canvas.width / GRID_SIZE;
const MOVE_INTERVAL_MS = 120;

const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");

let snake, direction, nextDirection, food, score, bestScore, gameOver, lastMoveTime;

function loadBestScore() {
  return Number(localStorage.getItem("snakeBestScore") || 0);
}

function saveBestScore(value) {
  try {
    localStorage.setItem("snakeBestScore", String(value));
  } catch (e) {
    // localStorage unavailable, ignore
  }
}

function randomFoodPosition() {
  let position;
  do {
    position = {
      x: Math.floor(Math.random() * TILE_COUNT),
      y: Math.floor(Math.random() * TILE_COUNT),
    };
  } while (snake.some((segment) => segment.x === position.x && segment.y === position.y));
  return position;
}

function resetGame() {
  snake = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };
  score = 0;
  gameOver = false;
  bestScore = loadBestScore();
  food = randomFoodPosition();
  scoreEl.textContent = score;
  bestScoreEl.textContent = bestScore;
}

function update() {
  direction = nextDirection;
  const head = {
    x: snake[0].x + direction.x,
    y: snake[0].y + direction.y,
  };

  const hitWall = head.x < 0 || head.x >= TILE_COUNT || head.y < 0 || head.y >= TILE_COUNT;
  const hitSelf = snake.some((segment) => segment.x === head.x && segment.y === head.y);

  if (hitWall || hitSelf) {
    gameOver = true;
    if (score > bestScore) {
      bestScore = score;
      saveBestScore(bestScore);
      bestScoreEl.textContent = bestScore;
    }
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 1;
    scoreEl.textContent = score;
    food = randomFoodPosition();
  } else {
    snake.pop();
  }
}

function draw() {
  ctx.fillStyle = "#111827";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ef4444";
  ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);

  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? "#4ade80" : "#22c55e";
    ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);
  });

  if (gameOver) {
    ctx.fillStyle = "rgba(17, 24, 39, 0.85)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f3f4f6";
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = "16px sans-serif";
    ctx.fillText("Press Space to restart", canvas.width / 2, canvas.height / 2 + 20);
  }
}

function gameLoop(timestamp) {
  if (!gameOver) {
    if (timestamp - lastMoveTime >= MOVE_INTERVAL_MS) {
      lastMoveTime = timestamp;
      update();
    }
    draw();
  }
  requestAnimationFrame(gameLoop);
}

const KEY_DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
};

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    if (gameOver) resetGame();
    return;
  }

  const newDirection = KEY_DIRECTIONS[event.key];
  if (!newDirection) return;

  const isOppositeDirection =
    newDirection.x === -direction.x && newDirection.y === -direction.y;
  if (!isOppositeDirection) {
    nextDirection = newDirection;
  }
});

resetGame();
lastMoveTime = 0;
requestAnimationFrame(gameLoop);
