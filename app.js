const guessNumber = document.querySelector(".input-value");
const check = document.querySelector(".check");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score-num");
const highScoreDisplay = document.querySelector(".highscore-num");
const background = document.querySelector("body");
const reStart = document.querySelector(".again"); 

// Generating Random number Between 1 and 20.
let range = Math.floor(Math.random() * 20 + 1);

// setting score equal to 20.
let score = 10;

// setting highscore equal to 0 initially.
let highScore = 0;

// Checking the guess number and guess number 
check.addEventListener("click", () => {
  numberCheck();
});

function numberCheck() {
  // converting the input number guess into number.
  var guess = Number(guessNumber.value);

  console.log(score);
  console.log(guess);
  console.log(range);

  if (!guess) {
    message.textContent = "⛔ No number"
  }
  else if (guess === range) {
    message.textContent = "🎉 Correct Number!";
    number.textContent = range;
    background.style.backgroundColor = "#60b347";
    // setting High score 
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  }
  else if (guess < range) {
    message.textContent = "👎Too low";
    score--;
    scoreDisplay.textContent = score;
    looseGame();
  }
  else if (guess > range) {
    message.textContent = "🔥Too High";
    score--;
    scoreDisplay.textContent = score;
    looseGame();
  }
}

function looseGame() {
  if (score <= 0) 
    message.textContent = "You Loose the Game 👎👎"
}

// restart the Game from the beginnig

reStart.addEventListener("click", () => {
  restartGame();
})

function restartGame() {
  score = 10;
  scoreDisplay.textContent = score;
  message.textContent = "Guess the number??";
  number.textContent = "?";
  guessNumber.value = "";

  // Generating Random number Between 1 and 20.
  range = Math.floor(Math.random() * 20 + 1);

  // changing background color
  background.style.backgroundColor = "rgb(170, 103, 115)";

  
}


