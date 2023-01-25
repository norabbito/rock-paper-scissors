const mapping = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
};

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  const choice = prompt('Choose a weapon (Rock, Paper, Scissors)', '');

  switch (choice.toLowerCase()) {
    case 'rock': return 0;
    case 'paper': return 1;
    case 'scissors': return 2;
    default: return undefined;
  }
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection + 1) % 3 === computerSelection) {
    return 'Computer wins!';
  }
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  return 'Player wins!';
}

function game() {
  for (let i = 0; i < 5; i += 1) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    if (playerSelection == null) break;

    console.log(`Player selection: ${mapping[playerSelection]}`);
    console.log(`Computer selection: ${mapping[computerSelection]}`);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
