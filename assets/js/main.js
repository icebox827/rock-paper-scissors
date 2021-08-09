const userScore = 0;
const computerScore = 0;
const user = document.getElementById('user-score');
const computer = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.getElementById('result');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function computerPlay() {
  const random = ['rock', 'paper', 'scissors'];
  return random[Math.floor(Math.random() * 3)];
}

function playerPlay() {
  rockBtn.addEventListener('click', () => {
    game('rock');
  });

  paperBtn.addEventListener('click', () => {
    game('paper');
  });

  scissorsBtn.addEventListener('click', () => {
    game('scissors');
  });
}

function win(playerSelection, computerSelection) {
  userScore++;
  user.innerHTML = userScore;
  computer.innerHTML = computerScore;
  result.innerHTML = `$(playerSelection) + 'beats' + $(computerSelection) + '. You win!'`;
}

function lose(playerSelection, computerSelection) {
  computerScore++;
  user.innerHTML = userScore;
  computer.innerHTML = computerScore;
  result.innerHTML = `$(playerSelection) + 'beats' + $(computerSelection) + '. You win!'`;
}

function draw(playerSelection, computerSelection) {
  user.innerHTML = userScore;
  computer.innerHTML = computerScore;
}

function game(playerSelection) {
  const computerSelection = computerPlay();
  switch(playerSelection + computerSelection) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win();
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose();
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw();
      break;
  }
}
