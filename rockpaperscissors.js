let playerScore = 0;
let computerScore = 0;

let win = (player, computer) => `You Win! ${player} beats ${computer}`;
let loss = (computer, player) => `You Lose! ${computer} beats ${player}`;

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

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Player's Choice: ").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log("Player Wins!")
    }
    else if (computerScore < playerScore) {
        console.log("Computer Wins!")
    }
    else {
        console.log("It's a Draw!")
    }
}

game();