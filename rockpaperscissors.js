let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 10) % 3;

    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function playRound(player, computerSelection) {
    if (player === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        return `Draw! You both chose ${player}`;
    } else if ((player === "rock" && computerSelection === "scissors") || (
    player === "scissors" && computerSelection === "paper") || (
    player === "paper" && computerSelection === "rock")) {
        playerScore += 1;
        return win(player, computerSelection);
    } else {
        computerScore += 1;
        return loss(computerSelection, player);
    }   
}

let win = (player, computer) => `You Win! ${player} beats ${computer}`;
let loss = (computer, player) => `You Lose! ${computer} beats ${player}`;


const buttons = document.querySelectorAll('button');

let results = document.querySelector('.currentScore');
const score = document.createElement('p');
score.textContent = playerScore.toString();
results.appendChild(score);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        if (gamesPlayed < 5) {
            playRound(button.id, getComputerChoice());
        }
        else {
            alert("Start a New Round!")
        }
        score.textContent = playerScore.toString();
        results.appendChild(score);
        gamesPlayed += 1;
        if (gamesPlayed === 5) game();
    }) 
})

let result = document.querySelector('.result');
const gameResult = document.createElement('p');

function game() {
    if (playerScore > computerScore) {
        gameResult.textContent = "You Win!";
    }
    else if (computerScore < playerScore) {
        gameResult.textContent = "You You Lose!";
    }
    else {
        gameResult.textContent = "It's a Draw!";
    }
    result.appendChild(gameResult);
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
}
