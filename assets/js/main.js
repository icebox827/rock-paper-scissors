function computerPlay() {
  const random = ['rock', 'paper', 'scissors'];
  return random[Math.floor(Math.random() * 3)];
}

const playerPlay = userMove => {
  const rockBtn = document.querySelector('#rock').addEventListener('click', () => {
    userMove = 'rock';
  });

  const paperBtn = document.querySelector('#paper').addEventListener('click', () => {
    userMove = 'paper';
  });

  const scissorsBtn = document.querySelector('#scissors').addEventListener('click', () => {
    userMove = 'scissors';
  });

  return userMove;
};

function playRound(playerSelection, computerSelection) {
  const result = document.getElementById('result');

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

  const playerSelection = playerPlay(userMove);
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

game();