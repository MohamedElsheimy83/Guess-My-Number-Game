'use strict';

const generateRandom = () => Math.floor(Math.random() * 20 + 1);
let randomNumber = generateRandom();
let score = 20;
let highscore = 0;
let endGame = false;

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

const end = () => {
  setMessage('😭 You lost the game!');
  document.querySelector('body').style.backgroundColor = 'red';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (endGame === true) {
    setMessage('😎 Click Again to Replay!');
    return;
  } else if (!guess) {
    setMessage('⛔ No number!');
  } else if (score === 0) {
    end();
  } else if (guess === randomNumber) {
    setMessage('🎉 Correct Number!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    endGame = true;
  } else if (guess > randomNumber) {
    setMessage('😟 Too high!');
    score--;
    setScore(score);
    if (score === 0) end();
  } else if (guess < randomNumber) {
    setMessage('😟 Too low!');
    score--;
    setScore(score);
    if (score === 0) end();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  endGame = false;
  randomNumber = generateRandom();
  score = 20;
  setScore(score);
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
