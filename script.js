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
    //assign r p or s based on ranges


function playRound(playerSelection, computerSelection) {
    switch (playedHands) {
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

const computerSelection = computerPlay();
const playerSelection = "rock";
const playedHands = (playerSelection + " " + computerSelection);
// case insensitive version - const playerSelection = input.toLowerCase();;

console.log(playRound(playerSelection, computerSelection));