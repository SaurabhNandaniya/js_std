// just paste this thing on hiteshcoudharis .js file for solutions and output
//https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
// console.log({ submit, userInput, guessSlot, remaining, lowOrHi, startOver });

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //  console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // check value is valid
  if (isNaN(guess)) {
    alert('enter a valid number');
  } else if (guess < 1) {
    alert('enter more than 1');
  } else if (guess > 100) {
    alert('enter less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      guessClean(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
      guessClean(guess);
    }
  }
}

function checkGuess(guess) {
  //check the value low or high or exact
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`you guessed it too low`);
  } else if (guess > randomNumber) {
    displayMessage(`You guessed it too high`);
  }
}

function guessClean(guess) {
  // guess cleanup
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // dom thing update and all the updating thing
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
