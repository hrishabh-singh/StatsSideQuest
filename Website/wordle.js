const WORDS = [
  "ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN",
  "AGENT", "AGREE", "AHEAD", "ALARM", "ALBUM", "ALERT", "ALIKE", "ALIVE", "ALLOW", "ALONE",
  "ALONG", "ALTER", "AMONG", "ANGER", "ANGLE", "ANGRY", "APPLE", "APPLY", "ARENA", "ARGUE",
  "ARISE", "ARRAY", "ASIDE", "ASSET", "AVOID", "AWAKE", "AWARD", "AWARE", "BADLY", "BAKER",
  "BASES", "BASIC", "BASIS", "BEACH", "BEGAN", "BEGIN", "BEING", "BELOW", "BENCH", "BIRTH",
  "BLACK", "BLAME", "BLANK", "BLIND", "BLOCK", "BLOOD", "BOARD", "BOOST", "BOOTH", "BOUND",
  "BRAIN", "BRAND", "BRAVE", "BREAD", "BREAK", "BREED", "BRIEF", "BRING", "BROAD", "BROKE",
  "BROWN", "BUILD", "BUILT", "BUYER", "CABLE", "CARRY", "CATCH", "CAUSE", "CHAIN", "CHAIR",
  "CHAOS", "CHARM", "CHART", "CHASE", "CHEAP", "CHECK", "CHEST", "CHIEF", "CHILD", "CHOSE",
  "CIVIL", "CLAIM", "CLASS", "CLEAN", "CLEAR", "CLICK", "CLIMB", "CLOCK", "CLOSE", "CLOUD",
  "COACH", "COAST", "COULD", "COUNT", "COURT", "COVER", "CRAFT", "CRASH", "CRAZY", "CREAM",
  "CRIME", "CROSS", "CROWD", "CROWN", "CRUDE", "CURVE", "CYCLE", "DAILY", "DANCE", "DATED",
  "DEALT", "DEATH", "DEBUT", "DELAY", "DEPTH", "DOING", "DOUBT", "DOZEN", "DRAFT", "DRAMA",
  "DRANK", "DREAM", "DRESS", "DRILL", "DRINK", "DRIVE", "DROVE", "DYING", "EAGER", "EARLY",
  "EARTH", "EIGHT", "ELITE", "EMPTY", "ENEMY", "ENJOY", "ENTER", "ENTRY", "EQUAL", "ERROR",
  "EVENT", "EVERY", "EXACT", "EXIST", "EXTRA", "FAITH", "FALSE", "FAULT", "FIBER", "FIELD",
  "FIFTH", "FIGHT", "FINAL", "FIRST", "FIXED", "FLAME", "FLASH", "FLEET", "FLOOR", "FLUID",
  "FOCUS", "FORCE", "FORTH", "FORTY", "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD", "FRESH",
  "FRONT", "FROST", "FRUIT", "FULLY", "FUNNY", "GIANT", "GIVEN", "GLASS", "GLOBE", "GOING",
  "GRACE", "GRADE", "GRAND", "GRANT", "GRASS", "GREAT", "GREEN", "GROSS", "GROUP", "GROWN",
  "GUARD", "GUESS", "GUEST", "GUIDE", "HAPPY", "HARSH", "HEART", "HEAVY", "HENCE", "HORSE",
  "HOTEL", "HOUSE", "HUMAN", "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "ISSUE", "IVORY",
  "JOINT", "JUDGE", "KNOWN", "LABEL", "LARGE", "LASER", "LATER", "LAUGH", "LAYER", "LEARN",
  "LEAST", "LEAVE", "LEGAL", "LEVEL", "LIGHT", "LIMIT", "LOCAL", "LOGIC", "LOOSE", "LOWER",
  "LUCKY", "LUNCH", "LYING", "MAGIC", "MAJOR", "MAKER", "MARCH", "MATCH", "MAYOR", "MEANT",
  "MEDIA", "METAL", "MIGHT", "MINOR", "MINUS", "MIXED", "MODEL", "MONEY", "MONTH", "MORAL",
  "MOTOR", "MOUNT", "MOUSE", "MOUTH", "MOVIE", "MUSIC", "NEEDS", "NERVE", "NEVER", "NEWLY",
  "NIGHT", "NOISE", "NORTH", "NOVEL", "NURSE", "OCEAN", "OFFER", "OFTEN", "ORDER", "OTHER",
  "OUGHT", "PAINT", "PANEL", "PAPER", "PARTY", "PEACE", "PHASE", "PHONE", "PHOTO", "PIECE",
  "PILOT", "PITCH", "PLACE", "PLAIN", "PLANE", "PLANT", "PLATE", "POINT", "POUND", "POWER",
  "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROOF", "PROUD", "PROVE",
  "QUEEN", "QUICK", "QUIET", "QUITE", "RADIO", "RAISE", "RANGE", "RAPID", "RATIO", "REACH",
  "READY", "REFER", "RIGHT", "RIVAL", "RIVER", "ROBOT", "ROMAN", "ROUGH", "ROUND", "ROUTE",
  "ROYAL", "RURAL", "SCALE", "SCENE", "SCOPE", "SCORE", "SENSE", "SERVE", "SEVEN", "SHALL",
  "SHAPE", "SHARE", "SHARP", "SHEET", "SHELF", "SHELL", "SHIFT", "SHINE", "SHIRT", "SHOCK",
  "SHOOT", "SHORT", "SHOWN", "SIGHT", "SINCE", "SIXTH", "SIXTY", "SIZED", "SKILL", "SLEEP",
  "SLIDE", "SMALL", "SMART", "SMILE", "SMOKE", "SOLID", "SOLVE", "SORRY", "SOUND", "SOUTH",
  "SPACE", "SPARE", "SPEAK", "SPEED", "SPEND", "SPENT", "SPLIT", "SPOKE", "SPORT", "STAFF",
  "STAGE", "STAKE", "STAND", "START", "STATE", "STEAM", "STEEL", "STEEP", "STICK", "STILL",
  "STOCK", "STONE", "STOOD", "STORE", "STORM", "STORY", "STRIP", "STUCK", "STUDY", "STUFF",
  "STYLE", "SUGAR", "SUITE", "SUPER", "SWEET", "TABLE", "TAKEN", "TASTE", "TAXES", "TEACH",
  "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THICK", "THING", "THINK", "THIRD",
  "THOSE", "THREE", "THREW", "THROW", "TIGHT", "TIMES", "TITLE", "TODAY", "TOPIC", "TOTAL",
  "TOUCH", "TOUGH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREAT", "TREND", "TRIAL", "TRIBE",
  "TRICK", "TRIED", "TRIES", "TRUCK", "TRULY", "TRUST", "TRUTH", "TWICE", "UNDER", "UNDUE",
  "UNION", "UNITY", "UNTIL", "UPPER", "UPSET", "URBAN", "USAGE", "USUAL", "VALID", "VALUE",
  "VIDEO", "VIRUS", "VISIT", "VITAL", "VOICE", "WASTE", "WATCH", "WATER", "WHEEL", "WHERE",
  "WHICH", "WHILE", "WHITE", "WHOLE", "WHOSE", "WOMAN", "WOMEN", "WORLD", "WORRY", "WORSE",
  "WORST", "WORTH", "WOULD", "WOUND", "WRITE", "WRONG", "WROTE", "YIELD", "YOUNG", "YOUTH",
];

const WORD_SET = new Set(WORDS);
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

const WIN_MESSAGES = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];

const boardEl = document.getElementById("board");
const keyboardEl = document.getElementById("keyboard");
const toastContainer = document.getElementById("toast-container");
const endActionsEl = document.getElementById("end-actions");
const newGameBtn = document.getElementById("new-game-btn");

let targetWord, guesses, currentGuess, currentRow, gameOver, keyStatuses;

function pickTargetWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function buildBoard() {
  boardEl.innerHTML = "";
  for (let r = 0; r < MAX_GUESSES; r++) {
    const row = document.createElement("div");
    row.className = "board-row";
    row.id = `row-${r}`;
    for (let c = 0; c < WORD_LENGTH; c++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.id = `tile-${r}-${c}`;
      row.appendChild(tile);
    }
    boardEl.appendChild(row);
  }
}

function buildKeyboard() {
  keyboardEl.innerHTML = "";
  KEYBOARD_ROWS.forEach((rowKeys) => {
    const row = document.createElement("div");
    row.className = "keyboard-row";
    rowKeys.forEach((key) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.key = key;
      btn.id = `key-${key}`;
      if (key === "ENTER") {
        btn.textContent = "Enter";
        btn.className = "key wide";
      } else if (key === "BACKSPACE") {
        btn.textContent = "⌫";
        btn.className = "key wide";
      } else {
        btn.textContent = key;
        btn.className = "key";
      }
      btn.addEventListener("click", () => handleKey(key));
      row.appendChild(btn);
    });
    keyboardEl.appendChild(row);
  });
}

function showToast(message, duration = 1500) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

function resetGame() {
  targetWord = pickTargetWord();
  guesses = [];
  currentGuess = "";
  currentRow = 0;
  gameOver = false;
  keyStatuses = {};
  endActionsEl.hidden = true;
  buildBoard();
  buildKeyboard();
}

function updateRowDisplay() {
  for (let c = 0; c < WORD_LENGTH; c++) {
    const tile = document.getElementById(`tile-${currentRow}-${c}`);
    const letter = currentGuess[c] || "";
    tile.textContent = letter;
    tile.classList.toggle("filled", Boolean(letter));
  }
}

function shakeCurrentRow() {
  const row = document.getElementById(`row-${currentRow}`);
  row.classList.add("shake");
  setTimeout(() => row.classList.remove("shake"), 500);
}

function evaluateGuess(guess) {
  const result = new Array(WORD_LENGTH).fill("absent");
  const targetLetters = targetWord.split("");
  const guessLetters = guess.split("");

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = "correct";
      targetLetters[i] = null;
      guessLetters[i] = null;
    }
  }

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === null) continue;
    const idx = targetLetters.indexOf(guessLetters[i]);
    if (idx !== -1) {
      result[i] = "present";
      targetLetters[idx] = null;
    }
  }

  return result;
}

const STATUS_PRIORITY = { absent: 0, present: 1, correct: 2 };

function updateKeyboardStatuses(guess, result) {
  for (let i = 0; i < WORD_LENGTH; i++) {
    const letter = guess[i];
    const status = result[i];
    const current = keyStatuses[letter];
    if (!current || STATUS_PRIORITY[status] > STATUS_PRIORITY[current]) {
      keyStatuses[letter] = status;
    }
  }
  Object.entries(keyStatuses).forEach(([letter, status]) => {
    const keyEl = document.getElementById(`key-${letter}`);
    if (keyEl) {
      keyEl.classList.remove("correct", "present", "absent");
      keyEl.classList.add(status);
    }
  });
}

function revealRow(guess, result) {
  for (let c = 0; c < WORD_LENGTH; c++) {
    const tile = document.getElementById(`tile-${currentRow}-${c}`);
    tile.style.animationDelay = `${c * 250}ms`;
    tile.classList.add("flip");
    setTimeout(() => {
      tile.classList.add(result[c]);
    }, c * 250 + 250);
  }
}

function endGame(won) {
  gameOver = true;
  setTimeout(() => {
    if (won) {
      showToast(WIN_MESSAGES[currentRow] || "Well done", 2500);
    } else {
      showToast(`The word was ${targetWord}`, 3000);
    }
    endActionsEl.hidden = false;
  }, WORD_LENGTH * 250 + 400);
}

function submitGuess() {
  if (currentGuess.length !== WORD_LENGTH) {
    showToast("Not enough letters");
    shakeCurrentRow();
    return;
  }

  if (!WORD_SET.has(currentGuess)) {
    showToast("Not in word list");
    shakeCurrentRow();
    return;
  }

  const result = evaluateGuess(currentGuess);
  revealRow(currentGuess, result);
  updateKeyboardStatuses(currentGuess, result);
  guesses.push(currentGuess);

  const won = result.every((status) => status === "correct");

  if (won) {
    endGame(true);
    return;
  }

  currentRow += 1;
  currentGuess = "";

  if (currentRow >= MAX_GUESSES) {
    endGame(false);
  }
}

function handleKey(key) {
  if (gameOver) return;

  if (key === "ENTER") {
    submitGuess();
    return;
  }

  if (key === "BACKSPACE") {
    currentGuess = currentGuess.slice(0, -1);
    updateRowDisplay();
    return;
  }

  if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
    currentGuess += key;
    updateRowDisplay();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const key = event.key.toUpperCase();
  if (key === "ENTER") {
    handleKey("ENTER");
  } else if (key === "BACKSPACE") {
    handleKey("BACKSPACE");
  } else if (/^[A-Z]$/.test(key)) {
    handleKey(key);
  }
});

newGameBtn.addEventListener("click", resetGame);

resetGame();
