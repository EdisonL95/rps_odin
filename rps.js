let computerScore = 0
let humanScore = 0

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
        default:
        return "unknown";  
    }
}       

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice){
      if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors.");
                return;
            } else if (computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock.");
                return;
            }
            break;

        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats Rock.");
                return;
            } else if (computerChoice === "scissors") {
                computerScore++;
                console.log("You lose! Scissors beats Paper.");
                return;
            }
            break;

        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
                console.log("You win! Scissors beats Paper.");
                return;
            } else if (computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beats Scissors.");
                return;
            }
            break;

        default:
            console.log("Invalid human choice!");
            return;
    }
}

const computerChoice = getComputerChoice().toLowerCase();
const humanChoice =  getHumanChoice().toLowerCase();

for (let i = 0; i < 5; i++){
    const humanChoice =  getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();
    playRound(humanChoice, computerChoice)
    console.log("Human: " + humanScore + " | " + "Computer: " + computerScore);
}
