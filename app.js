//store options
const options = document.querySelectorAll('#options');

let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const playerInput = this.textContent;
    const computerSelection = ['Rock', 'Paper', 'Scissors'];
    const computerInput = computerSelection[Math.floor(Math.random() * 3)];
    playRound(playerInput, computerInput);
    const result = document.querySelector('.result');
    const options = document.querySelector('.options');


    const reset = document.querySelector('.reset');
    const button = document.createElement('button');
    button.classList.add('reset-button');
    button.textContent = 'Play Again';

    if (computerScore == 5) {
      options.style.display = 'none';
      result.textContent = 'Game Over, You Lost.';
      reset.appendChild(button);
      button.addEventListener('click', () => {
        window.location.reload();
      })
    }
    else if (playerScore == 5) {
      options.style.display = 'none';
      result.textContent = 'Game Over, You Won.';
      reset.appendChild(button);
      button.addEventListener('click', () => {
        window.location.reload();
      })
    }
  })
})


function playRound(playerInput, computerInput) {
  //select div
  const result = document.querySelector('.result');
  const playerCount = document.querySelector('.playerCount');
  const computerCount = document.querySelector('.computerCount')

  //result var
  const currentMatch = `${playerInput} VS ${computerInput}`;

  // Tie check
  if (playerInput === computerInput) {
    result.textContent = `${currentMatch}: is a Tie.`;
    return;
  }
  // Rock
  if (playerInput === "Rock") {
    if (computerInput === "Scissors") {
      result.textContent = `${currentMatch}: You won this round.`;
      playerScore++;
      playerCount.textContent = playerScore;
    } else {
      result.textContent = `${currentMatch}: You lost this round.`;
      computerScore++;
      computerCount.textContent = computerScore;
    }
  }
  // Paper
  else if (playerInput === "Paper") {
    if (computerInput === "Rock") {
      result.textContent = `${currentMatch}: You won this round.`;
      playerScore++;
      playerCount.textContent = playerScore;

    } else {
      result.textContent = `${currentMatch}: You lost this round.`;
      computerScore++;
      computerCount.textContent = computerScore;
    }
  }
  // Scissors
  else {
    if (computerInput === "Paper") {
      result.textContent = `${currentMatch}: You won this round.`;
      playerScore++;
      playerCount.textContent = playerScore;
    } else {
      result.textContent = `${currentMatch}: You lost this round.`;
      computerScore++;
      computerCount.textContent = computerScore;
    }
  }
}