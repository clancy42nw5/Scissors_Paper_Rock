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

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('activated');
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        button.classList.add('activated');
        playRound();
    });
    button.addEventListener('transitionend', removeTransition);
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else if (computerChoice == 2) {
        return "Scissors";
    }
}

function getUserChoice() {
    if (playerSelection == "btnRock") {
        return "Rock";
    } else if (playerSelection == "btnPaper") {
        return "Paper";
    } else if (playerSelection == "btnScissors") {
        return "Scissors";
    }
}

let computerScore = 0;
let userScore = 0;
let userGameScore = 0;
let computerGameScore = 0;

function playRound() {
    bestOfFive.textContent = "BEST OF FIVE"
    let playerSelection = getUserChoice();
    playerChoice.textContent = playerSelection;
    let computerSelection = getComputerChoice();
    opponentChoice.textContent = computerSelection;
    if (playerSelection == computerSelection) {
        winOrLose.textContent = "It's a tie";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        winOrLose.textContent = "Rock beats Scissors";
        userScore++;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        winOrLose.textContent = "Paper beats Rock";
        computerScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        winOrLose.textContent = "Paper beats Rock";
        userScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        winOrLose.textContent = "Scissors beats Paper";
        computerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        winOrLose.textContent = "Scissors beats Paper";
        userScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        winOrLose.textContent = "Rock beats Scissors";
        computerScore++;
    } 
    userResults.textContent = userScore;
    computerResults.textContent = computerScore;
    if (userScore == 3) {
        bestOfFive.textContent = "YOU WIN THE ROUND";
        userGameScore++
        userGames.textContent = userGameScore;
        computerGames.textContent = computerGameScore;
        userScore = 0;
        computerScore = 0;
    }
    if (computerScore == 3) {
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



