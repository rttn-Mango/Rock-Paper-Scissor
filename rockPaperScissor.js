function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function playerChoice() {

    let playerChoice = prompt('Rock, Paper, or Scissor?');
    while (!checkPlayerInput(playerChoice)) {
        alert('Invalid Input, Try Again.');
        playerChoice = prompt('Rock, Paper, or Scissor?')
    }
    return playerChoice;
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
        //console.log('Draw!');
        document.getElementById("result").textContent = ` Draw! `;
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper'
        || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissor'
        || playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'rock')
        //console.log('Computer Wins!');
        document.getElementById("result").textContent = ` Computer Wins! `;
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor'
        || playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper'
        || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')
        //console.log('Player Wins!');
        document.getElementById("result").textContent = `Player Wins! `;
}

function checkPlayerInput(playerChoice) {
    return playerChoice.toLowerCase() == 'rock' || playerChoice.toLowerCase() == 'paper' || playerChoice.toLowerCase() == 'scissor' ? true : false;
}

let clickedButton = document.querySelectorAll('.btn');
clickedButton.forEach((button) => {
    button.addEventListener('click', e => {
        let chosenButton = e.currentTarget;
        if (chosenButton.tagName == 'BUTTON')
            playRound(chosenButton.value);
    });
});

