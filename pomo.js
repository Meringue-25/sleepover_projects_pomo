const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".start-button");
const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");

let myInterval;
let state = true;
let totalSeconds;

const Timer = () => {
  const sessionAmount = Number.parseInt(minuteDiv.textContent);

  if (state) {
    state = false;
    totalSeconds = sessionAmount * 60;

    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert("Session has already been started.");
  }
};

const updateSeconds = () => {
  totalSeconds--;

  let minutesLeft = Math.floor(totalSeconds / 60);
  let secondsLeft = totalSeconds % 60;

  minuteDiv.textContent = minutesLeft;
  secondDiv.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

  if (totalSeconds <= 0) {
    bells.play();
    clearInterval(myInterval);
  }
};

startBtn.addEventListener("click", Timer);
