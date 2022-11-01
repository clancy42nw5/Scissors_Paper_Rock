
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else if (computerChoice == 2) {
        return "scissors";
    }
}

function getUserChoice() {
    let userChoice = prompt ("Scissors, paper or rock?");
    if (userChoice.toLowerCase() == ("rock")) {
        return "rock";
    } else if (userChoice.toLowerCase() == ("paper")) {
        return "paper";
    } else if (userChoice.toLowerCase() == ("scissors")) {
        return "scissors";
    } else {
        alert ("Please enter a valid choice");
    }
}

let computerScore = 0;
let userScore = 0;

function playRound() {
    alert("Scissors, paper, rock!");
    let playerSelection = getUserChoice();
    alert("You chose " + playerSelection);
    let computerSelection = getComputerChoice();
    alert("The computer chose " + computerSelection);
    if (playerSelection == computerSelection) {
        alert ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert ("You win! Rock beats scissors.");
        userScore++;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert ("You lose! Paper beats rock.");
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert ("You win! Paper beats rock.");
        userScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert ("You lose! Scissors beats paper.");
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert ("You win! Scissors beats paper.");
        userScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert ("You lose! Rock beats scissors.");
        computerScore++;
    }
}

function game() {
    let counter = 0;
    while (counter <= 4) {
        playRound();
        counter++;
        console.log("User: " + userScore + " - computer: " + computerScore);
    }
        alert("You:" + userScore + " - computer:" + computerScore);
    if (userScore > computerScore) {
        alert ("You win!");
    } else if (userScore < computerScore) {
        alert ("You lose!");
    } else {
        alert ("It's a tie!");
    }
}

game();