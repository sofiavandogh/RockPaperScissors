//choose one button to play
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

buttonRock.addEventListener('click', playComputer);
buttonPaper.addEventListener('click', playComputer);
buttonScissors.addEventListener('click', playComputer);

let scorePlayer = 0;
let scoreComputer = 0;
let computerSelection;
let playerSelection;

function playComputer() {
    const computerSelectionPara = document.querySelector('.computer-guess');
    const game = ["rock", "paper", "scissor"];
    computerSelection = game[Math.floor(Math.random() * game.length)];
    computerSelectionPara.textContent = 'Now, it is the Computer\'s turn: ' + computerSelection;
    playGame();
    getScores();
    getWinner();
}
if (scorePlayer === 5 || scoreComputer === 5) {
  scorePlayer === 0;
  scoreComputer === 0;
  playerPara.textContent = 'Player: ' + scorePlayer;
  computerPara.textContent = 'Computer: ' + scoreComputer;
}


function playGame() {
    playerSelection = buttonRock.id || buttonPaper.id || buttonScissors.id;

    if (playerSelection === "rock" && computerSelection == "paper") {
      alert("Paper wraps Rock, I win!");
      scoreComputer++;
    } else if (
      playerSelection == "paper" &&
      computerSelection == "scissor"
    ) {
      alert("Scissor cuts paper, I win!");
      scoreComputer++;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "rock"
    ) {
      alert("Rock destroys scissor, I win!");
      scoreComputer++;
    } else if (
      computerSelection == "rock" &&
      playerSelection == "paper"
    ) {
      alert("Paper wraps Rock, You win!");
      scorePlayer++;
    } else if (
      computerSelection == "paper" &&
      playerSelection == "scissors"
    ) {
      alert("Scissor cuts paper, You win!");
      scorePlayer++;
    } else if (
      computerSelection == "scissor" &&
      playerSelection == "rock"
    ) {
      alert("Rock destroys scissor, You win!");
      scorePlayer++;
    } else {
      alert("Nobody wins, it is a tie!");
      scorePlayer = scorePlayer;
      scoreComputer = scoreComputer;
    } 
}

function getScores() {
    const playerPara = document.querySelector('.player-score');
    const computerPara = document.querySelector('.computer-score');
    playerPara.textContent = 'Player: ' + scorePlayer;
    computerPara.textContent = 'Computer: ' + scoreComputer;
}

function getWinner() {
  const playerWinner = document.querySelector('#userWinner');
  const computerWinner = document.querySelector('#computerWinner');
  
  if (scorePlayer === 5 && scoreComputer < 5) {
    playerWinner.style.cssText = 'display: inline';

  } else if (scoreComputer === 5 && scorePlayer < 5) {
    computerWinner.style.cssText = 'display: inline';
  } 
 
  return;
}







/* outra forma de fazer
function computerPlay() {      
  return game[Math.floor(Math.random()*game.length)];
}
const game = ['rock', 'paper', 'scissor'];

function playRound(playerSelection, computerSelection) {
//if user chooses Rock and computer Paper, or paper and Scissor, or scissor and rock, computer wins
if(playerSelection == 'rock' && computerSelection == 'paper') {
  return ("Paper wraps Rock, I win!");
} else if(playerSelection == 'paper' && computerSelection == 'scissor') {
  return ('Scissor cuts paper, I win!');
} else if(playerSelection == 'scissor' && computerSelection == 'rock') {
  return ('Rock destroys scissor, I win!');
} else if(computerSelection == 'rock' && playerSelection == 'paper') {
  return ("Paper wraps Rock, You win!");
} else if(computerSelection == 'paper' && playerSelection == 'scissor') {
  return ('Scissor cuts paper, You win!');
} else if(computerSelection == 'scissor' && playerSelection == 'rock') {
  return ('Rock destroys scissor, You win!');
} else {
    return ('Nobody wins, it is a tie!');
}
}

const playerSelection = "rock";
computerSelection = computerPlay();
alert(playRound(playerSelection, computerSelection));
*/