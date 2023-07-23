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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 'You are Even!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return 'You win! Rock beats Scissor';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return 'You lose! Scissor beats Paper';
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissor';
    } else {
        return 'You win! Scissor beats Paper!';
    }
}

function getUserChoice() {
    let userChoice = prompt('Take your choice');
    userChoice = userChoice.toLowerCase()
    while (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissor') {
        userChoice = prompt('Take a valid choice! rock, paper ,scissor');
        userChoice = userChoice.toLowerCase()
    }
    return userChoice;        
}

function scoring(result, userScore, computerScore) {
    if (result.substring(0,7) == 'You win') {
        return 1;
    } else if (result.substring(0,8) == 'You lose') {
        return 2;
    }
}

function whoWon(userScore, computerScore) {
    if (userScore > computerScore) {
        return `You won! your's score: ${userScore} computer's score: ${computerScore}`;
    } else if (userScore < computerScore) {
        return `'You Lose! your's score: ${userScore} computer's score: ${computerScore}`;    
    } else {
        return `You and the computer are even! ${userScore} points each`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let userChoice;
    let computerChoice;
    let result;
    for(let i=0; i<5; i++) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        result = playRound(userChoice, computerChoice);
        let points = scoring(result, playerScore, computerScore);
        if (points == 1) {
             ++playerScore
        } else if (points == 2) {
             ++computerScore
        };
        console.log(result);
        console.log(playerScore + ' ' + computerScore);
    }
    console.log(whoWon(playerScore, computerScore));
}

game();
