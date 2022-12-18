let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let computerChoice;

let win = (player, computer) => round.textContent = `Round ${gamesPlayed}: You Win! ${player} beats ${computer}`;
let loss = (computer, player) => round.textContent = `Round ${gamesPlayed}: You Lose! ${computer} beats ${player}`;
let draw = (computer) => round.textContent = `Round ${gamesPlayed}: It's a draw, you both chose ${computer}`;

const buttons = document.querySelectorAll('.gameButton');
let resultsBox = document.querySelector('.resultsBox');
const gameHistory = document.querySelector('.gameHistory');
let currentScore = document.querySelector('.currentScore');
const gameResult = document.createElement('h2');
const gameButton = document.createElement('button');
const score = document.createElement('h3');
currentScore.appendChild(score);
const round = document.createElement('h3');
gameHistory.appendChild(round);
gameButton.classList.add('gameButton');
gameButton.textContent = "New Game!";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gamesPlayed += 1;
        if (gamesPlayed < 6) {
            computerChoice = getComputerChoice();
            playRound(button.id, computerChoice);
            score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
            if (gamesPlayed === 5) game();
        }
        else {
            alert("Start a New Game!")
            return;
        }
    }) 
})

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 10) % 3;
    switch(randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(player, computerSelection) {
    if (player === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        return draw(computerSelection);
    } else if ((player === "Rock" && computerSelection === "Scissors") || (
    player === "Scissors" && computerSelection === "Paper") || (
    player === "Paper" && computerSelection === "Rock")) {
        playerScore += 1;
        return win(player, computerSelection);
    } else {
        computerScore += 1;
        return loss(computerSelection, player);
    }   
}

function game() {
    if (playerScore > computerScore) {
        gameResult.textContent = "GAME OVER - YOU WIN!";
    }
    else if (computerScore > playerScore) {
        gameResult.textContent = "GAME OVER - YOU LOSE!";
    }
    else {
        gameResult.textContent = "GAME OVER - IT'S A DRAW!";
    }
    resultsBox.appendChild(gameResult);
    resultsBox.appendChild(gameButton);

    gameButton.addEventListener('click', () => {
        newGame();
        currentScore.removeChild(score);
        resultsBox.removeChild(gameResult);
        resultsBox.removeChild(gameButton);
    })
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
    round.textContent = "";
    score.textContent = "";
}
