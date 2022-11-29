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

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return `Draw! You both chose ${player}`;
    } else if ((player === "rock" && computerSelection === "scissors") || (
        player === "scissors" && computerSelection === "paper") || (
        player === "paper" && computerSelection === "rock")) {
        return win(player, computerSelection);
    } else {
        return loss(computerSelection, player);
    }   
}

let win = (player, computer) => `You Win! ${player} beats ${computer}`;
let loss = (computer, player) => `You Lose! ${computer} beats ${player}`;

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));