'use strict';

/**
 * Function should work ---
 * Get number from input
 * Can check with the secret number - it should come from variable.
 * If input number is bigger than secret number, it will show too high, and less that that then will show too low. If match then wil show correct number!
 * There will be a score variable also, it will decrease always if the user guess the number wrong.
 * If number is correct then the background color will be change to green, HighScore will be set to the score and the ? mark will be change to the correct number.
 * Again -- all will be reset to the previous style and variable value except for the highScore.
 * User can't play more than the score number. If he reached that place, he will lost the game.
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  console.log('Working ');
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.transition = 'all 0.75s ease'; 

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = '0';
    }
  }
});

// reset
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
