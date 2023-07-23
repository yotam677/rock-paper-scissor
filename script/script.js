function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return 'rock';
    } else if (num == 2) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}


const buffer = document.querySelector('.buffer');
const score = document.querySelector('.score');
let userScore = 0;
let computerScore = 0;

function playRound() {    
    playerSelection = this.textContent;
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice()
    if (playerSelection == computerSelection) {
        buffer.textContent = 'You are Even!';    
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        buffer.textContent = 'You lose! Paper beats Rock';
        score.textContent = `User: ${userScore} Computer: ${++computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        buffer.textContent = 'You win! Rock beats Scissor';
        score.textContent = `User: ${++userScore} Computer: ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        buffer.textContent = 'You win! Paper beats Rock';
        score.textContent = `User: ${++userScore} Computer: ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        buffer.textContent = 'You lose! Scissor beats Paper';
        score.textContent = `User: ${userScore} Computer: ${++computerScore}`;
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        buffer.textContent = 'You lose! Rock beats Scissor';
        score.textContent = `User: ${userScore} Computer: ${++computerScore}`;
    } else {
        buffer.textContent = 'You win! Scissor beats Paper!';
        score.textContent = `User: ${++userScore} Computer: ${computerScore}`;
    }
}

function gameEnd() {
    if (userScore == 5) {
        console.log(1);
        buffer.textContent = `You won! game score is - user: ${userScore} computer: ${computerScore}`;
        userScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        console.log(1);
        buffer.textContent = `You lost! game score is - user: ${userScore} computer: ${computerScore}`;
        userScore = 0;
        computerScore = 0;
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissor.addEventListener('click', playRound);

score.addEventListener('DOMNodeInserted', gameEnd);



