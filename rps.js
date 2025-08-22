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

function playRound(humanChoice, computerChoice) {
    const cScore = document.getElementById("computerScore");
    const hScore = document.getElementById("humanScore");
    const result = document.getElementById("result");

    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!";
        return;
    }

    switch(humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                result.textContent = "You win! Rock beats Scissors.";
            } else {
                computerScore++;
                result.textContent = "You lose! Paper beats Rock.";
            }
            break;

        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                result.textContent = "You win! Paper beats Rock.";
            } else {
                computerScore++;
                result.textContent = "You lose! Scissors beats Paper.";
            }
            break;

        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
                result.textContent = "You win! Scissors beats Paper.";
            } else {
                computerScore++;
                result.textContent = "You lose! Rock beats Scissors.";
            }
            break;

        default:
            result.textContent = "Invalid choice!";
            return;
    }

    hScore.textContent = "Human: " + humanScore;
    cScore.textContent = "Computer: " + computerScore;
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        playRound(btn.id, getComputerChoice());
        if (humanScore >= 5 || computerScore >= 5){
            btns.forEach((btn) => {
                btn.disabled = true;
                if (humanScore >= 5){
                    result.textContent = "Human wins";
                }
                else {
                    result.textContent = "Computer wins";
                }
            });
        }
    });
});
