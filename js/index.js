function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function getPlayerChoice() {
    const playerChoice = prompt('What do you choose? Rock, Paper, Scissors?');
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('#results');
    let playerScore = parseInt(document.querySelector('#player-score').textContent);
    let computerScore = parseInt(document.querySelector('#computer-score').textContent);
    
    if (playerSelection === computerSelection) {
        results.textContent = 'The game ended up in a draw!';
        return;
    }

    let result;

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        
        result = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
        playerScore++;
    } else {
        result = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`;
        computerScore++;
    }

    if (playerScore === 5 || computerScore === 5) {
        const buttonsContainer = document.querySelector('.buttons');
        const resetButton = document.querySelector('#reset');
        
        resetButton.style.display = 'block';
        resetButton.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            results.textContent = '';
            document.querySelector('#player-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = computerScore;
            buttonsContainer.style.display = 'flex';
            resetButton.style.display = 'none';
            document.querySelector('#results').textContent = 'Make your Choice!'
        });


        buttonsContainer.style.display = 'none';

        if (playerScore > computerScore) {
            result = 'You won the game!';
        } else {
            result = 'You lost the game!';
        }
    }

    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#computer-score').textContent = computerScore;

    results.textContent = result;
    return;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    });
});