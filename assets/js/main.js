function computerPlay () {
  const random = ['rock', 'paper', 'scissors']
  return random[Math.floor(Math.random() * 3)]
}

const playerSelection = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
    return userInput
  } else {
    return 'Invalid choice! Please try again'
  }
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Tie! Try again'
  } else {
    return 'You lose! Nice try'
  }
}
