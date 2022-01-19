let rockEl = document.getElementById("rock-el");
let paperEl = document.getElementById("paper-el");
let scissorsEl = document.getElementById("scissors-el");
let computerEl = document.getElementById("computer-el");
let playerEl = document.getElementById("player-el")
let gameplayEl = document.getElementById("gameplay-el");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let computerChoice;
let totalPlayer = 0;
let totalComputer = 0;
playerScore.textContent = 0;
computerScore.textContent = 0;

//This function resets the game and starts it over, allowing the player to select a new 
resetScore = () => {
    totalPlayer = 0;
    totalComputer = 0;
    playerScore.textContent = totalPlayer;
    computerScore.textContent = totalComputer;
    playerEl.textContent = "";
    computerEl.textContent = "";
    gameplayEl.textContent = "";
}
//This function generates a random choice for the computer player
getRandom = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        computerEl.textContent = "Computer player chose rock."
        computerChoice = "rock";
    } else if(randomNumber === 1) {
        computerEl.textContent = "Computer player chose paper."
        computerChoice = "paper";
    } else if(randomNumber === 2) {
        computerEl.textContent = "Computer player chose scissors."
        computerChoice = "scissors";
    }
    
}

//This function provides the logic for if the player chooses 'rock'
playerRock = () => {
    getRandom();
        playerEl.textContent = "You chose rock."
        if(computerChoice === "rock") {
            gameplayEl.textContent = "You and computer tied!"
        } else if(computerChoice === "paper") {
            gameplayEl.textContent = "You lose!"
            totalComputer = totalComputer + 1;
            computerScore.textContent = totalComputer;
        } else if(computerChoice === "scissors") {
            gameplayEl.textContent = "You win!"
            totalPlayer = totalPlayer + 1;
            playerScore.textContent = totalPlayer;
        }
    }
    
//This function provides the logic for if the player chooses 'paper'  
playerPaper = () => {
    getRandom();
    playerEl.textContent = "You chose paper."
        if(computerChoice === "rock") {
            gameplayEl.textContent = "You win!"
            totalPlayer = totalPlayer + 1;
            playerScore.textContent = totalPlayer;
        } else if(computerChoice === "scissors") {
            gameplayEl.textContent = "You lose!"
            totalComputer = totalComputer + 1;
            computerScore.textContent = totalComputer;
        } else if(computerChoice === "paper") {
            gameplayEl.textContent = "You and computer tied!"
        }
}

//This function provides the logic for if the player chooses 'scissors'
playerScissors = () => {
    getRandom();
    playerEl.textContent = "You chose scissors."
        if(computerChoice === "rock") {
            gameplayEl.textContent = "You lose!"
            totalComputer = totalComputer + 1;
            computerScore.textContent = totalComputer;
        } else if(computerChoice === "scissors") {
            gameplayEl.textContent = "You and computer tied!"
            newComputerScore.textContent++;
        } else if(computerChoice === "paper") {
            gameplayEl.textContent = "You win!"
            totalPlayer = totalPlayer + 1;
            playerScore.textContent = totalPlayer;
        }
}


