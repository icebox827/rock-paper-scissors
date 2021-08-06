const userScore = 0;
const computerScore = 0;
const user = document.getElementById('user-score');
const computer = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.getElementById('result');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors')

function computerPlay() {
  const random = ['rock', 'paper', 'scissors'];
  return random[Math.floor(Math.random() * 3)];
}

function playerPlay() {
  rockBtn.addEventListener('click', () => {
    playerRound('rock');
    console.log(playRound())
  });

  paperBtn.addEventListener('click', () => {
    playerRound('paper');
    console.log(playRound())
  });

  scissorsBtn.addEventListener('click', () => {
    playerRound('scissors');
    console.log(playRound())
  });
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    result.innerHTML = 'Tie! Try again';
    console.log(result)
    return result;
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      result.innerHTML = 'You lose! Nice try';
      console.log(result)
      return result;
    } else {
      result.innerHTML = 'You win!';
      console.log(result)
      return result;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      result.innerHTML = 'You lose! Nice try';
      console.log(result)
      return result;
    } else {
      result.innerHTML = 'You win!';
      console.log(result)
      return result;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      result.innerHTML = 'You lose! Nice try';
      console.log(result)
      return result;
    } else {
      result.innerHTML = 'You win!';
      console.log(result)
      return result;
    }
  }
}

function game() {
  const game = document.getElementById('game');
  
  game.appendChild(result);
  
}

game();