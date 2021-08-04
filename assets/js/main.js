function computerPlay() {
  const random = ['rock', 'paper', 'scissors'];
  return random[Math.floor(Math.random() * 3)];
}

const playerSelection = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid choice! Please try again');
  }
  return userInput;
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
  const playerSelection = 'rock';
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}

game();