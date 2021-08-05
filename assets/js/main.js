function computerPlay() {
  const random = ['rock', 'paper', 'scissors'];
  return random[Math.floor(Math.random() * 3)];
}

const playerSelection = userMove => {
  const rockBtn = document.querySelector('#rock').addEventlistener('click', () => {
    userMove = 'rock';
  });

  const paperBtn = document.querySelector('#paper').addEventListener('click', () => {
    userMove = 'paper';
  });

  const scissorsBtn = document.querySelector('#scissors').addEventListener('click', () => {
    userMove = 'scissors';
  });

  if (userMove === 'rock' || userMove === 'paper' || userMove === 'scissors') {
    return userMove;
  } 
  return userMove;
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie! Try again';
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You lose! Nice try';
    } else {
      return 'You win!';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose! Nice try';
    } else {
      return 'You win!';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! Nice try';
    } else {
      return 'You win!';
    }
  }
}

function game() {
  const playerPlay = playerSelection();
  const computerSelection = computerPlay();
}

game();