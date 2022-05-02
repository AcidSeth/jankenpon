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
    switch 
}

const playerSelection = "rock";
// case insensitive version - const playerSelection = input.toLowerCase();;
computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));