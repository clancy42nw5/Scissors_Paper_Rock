const spr = document
const btnScissors = document
const btnPaper = document
const btnRock = document
const playerChoice = document.querySelector('.playerChoice');
const opponentChoice = document.querySelector('.opponentChoice');
const winOrLose = document.querySelector('.winOrLose');
const userResults = document.querySelector('#userResults');
const computerResults = document.querySelector('#computerResults');
const bestOfFive = document.querySelector('.bestOfFive');
const userGames = document.querySelector('#userGames');
const computerGames = document.querySelector('#computerGames');

let playerSelection = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        button.classList.add('activated');
        playRound();
    });
});

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
    if (playerSelection == "btnRock") {
        return "rock";
    } else if (playerSelection == "btnPaper") {
        return "paper";
    } else if (playerSelection == "btnScissors") {
        return "scissors";
    }
}

let computerScore = 0;
let userScore = 0;
let userGameScore = 0;
let computerGameScore = 0;

function playRound() {
    bestOfFive.textContent = "Best of Five..."
    //highlight the button that was clicked
    let playerSelection = getUserChoice();
    playerChoice.textContent = "You chose " + playerSelection + "!";
    let computerSelection = getComputerChoice();
    opponentChoice.textContent = "The computer chose " + computerSelection + "!";
    if (playerSelection == computerSelection) {
        winOrLose.textContent = "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winOrLose.textContent = "You win! Rock beats scissors.";
        userScore++;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        winOrLose.textContent = "You lose! Paper beats rock.";
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winOrLose.textContent = "You win! Paper beats rock.";
        userScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        winOrLose.textContent = "You lose! Scissors beats paper.";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winOrLose.textContent = "You win! Scissors beats paper.";
        userScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        winOrLose.textContent = "You lose! Rock beats scissors.";
        computerScore++;
    } 
    userResults.textContent = userScore;
    computerResults.textContent = computerScore;
    if (userScore == 5) {
        bestOfFive.textContent = "YOU WIN THE ROUND";
        userGameScore++
        userGames.textContent = userGameScore;
        computerGames.textContent = computerGameScore;
        userScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        bestOfFive.textContent = "YOU LOSE THE ROUND";
        computerGameScore++
        userGames.textContent = userGameScore;
        computerGames.textContent = computerGameScore;
        userScore = 0;
        computerScore = 0;
    }
}

/*function game() {
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

game(); */



