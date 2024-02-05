function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function getPlayerChoice() {
    const playerChoice = prompt('What do you choose? Rock, Paper, Scissors?');
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    if (playerSelection === computerSelection) {
        console.log('The game ended up in a draw!');
        return [playerScore, computerScore];
    }

    let result;

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        
        playerScore++;
        result = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`;
    }

    console.log(result);
    return [playerScore, computerScore];
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        [playerScore, computerScore] = playRound(playerSelection, computerSelection, playerScore, computerScore);
    }

    if (playerScore > computerScore) {
        console.log(`You won ${playerScore} to ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lost ${playerScore} to ${computerScore}!`);
    } else {
        console.log(`It was a draw ${playerScore} to ${computerScore}!`);
    }
}

playGame();