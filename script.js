    //randomly return rock, paper or scissors
function computerPlay() {
    // return random number
    if (Math.floor(Math.random() * 4) == 1) {
        return "rock";
    }
        else if (Math.floor(Math.random() * 4) == 2) { 
            return "paper";
        }
        else {
            return "scissors";
        }
    }

    let playerScore = 0;
    let computerScore = 0;
    const computerSelection = computerPlay();
    const playerSelection = userPrompt();
    const playedHands = (playerSelection + " " + computerSelection);    

function playRound(playerSelection, computerSelection) {
    switch (playedHands.toLowerCase()) {
        case "rock scissors":
            return "You win! Rock smashes scissors.";
        case "paper rock":
            return "You win! Paper covers rock.";
        case "scissors paper":
            return "You win! Scissors cut paper.";
        case ("rock rock" || "paper paper" || "scissors scissors"):
            return "It's a tie!";
        default:
            return "You lose!";
    }
}

function scoreAdd() {
    if (playRound() == "You lose!") {
        computerScore++;
    } else if (playRound() == "It's a tie!"){
        return;
    } else {
        playerScore++;
        return playerScore;
    }
}

// play 5 rounds calling playRound, keep score and report winner/loser
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        scoreAdd();
    } if (playerScore === 5) {
        return `Congratulations! You won this match with ${playerScore} points.`;
    } else if (computerScore === 5) {
        return `Computer won this match with ${playerScore} points. Try again!`
    }
}

console.log(game());