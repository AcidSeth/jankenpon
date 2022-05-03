let playerSelection;
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
    
//randomly return random number and assign rock, paper or scissors
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
        
    switch (randomNumber) {
        case 1: 
            return "rock";
        case 2: 
            return "paper"
        case 3:
            return "scissors"
    }
}

function playRound(computerSelection) {
    let playerInput = prompt("Throw a hand!");
    let playerSelection = playerInput.toLowerCase();
    if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
        computerScore = ++computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        playerScore = ++playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

// play 5 rounds calling playRound
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    } if ((playerScore === 5) || (computerScore === 5)) {
        return `Match end! ${playerScore} to ${computerScore}`;
    }
}

game();