let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#comp-score");

const computerChoice = () => {
  const compOptions = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return compOptions[randomIndex];
};

const drawGame = () => {
  // console.log("game was draw");
  msg.innerText = "Game was Draw, Play Again";
  msg.style.backgroundColor = "#023e8a";
};

const showWinner = (userWon, userChoice, compChoice) => {
  if (userWon) {
    userScore++;
    userScoreMsg.innerText = userScore;
    // console.log("You Win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreMsg.innerText = compScore;
    // console.log("You Lose!");
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}}`;
    msg.style.backgroundColor = "red";
  }
};

const gamePlay = (userChoice) => {
  console.log("user choice=", userChoice);
  const compChoice = computerChoice();
  console.log("comp choice=", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWon = true;
    if (userChoice === "rock") {
      userWon = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWon = compChoice === "scissors" ? false : true;
    } else {
      userWon = compChoice === "rock" ? false : true;
    }
    showWinner(userWon, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});
