let minuteTimer = document.querySelector(".minutes input");
let secondsTimer = document.querySelector(".seconds input");

let ring = document.querySelector(".ring");

let counting = false;

const startButton = document.querySelector(".start");
const settingsButton = document.querySelector(".settings");

startButton.addEventListener("click", start);
settingsButton.addEventListener("click", settings);

let counterInterval;

let secondsCounter = secondsTimer.value;
let minutesCounter = minuteTimer.value;

secondsTimer.addEventListener("input", function () {
  secondsCounter = secondsTimer.value;
});

minuteTimer.addEventListener("input", function () {
  minutesCounter = minuteTimer.value;
});

function start() {
  if (counting === true) {
    clearInterval(counterInterval);
    counting = false;
    startButton.textContent = "start";
    return;
  }
  if (counting === false) {
    counting = true;
    counterInterval = setInterval(countDown, 1000);
    startButton.textContent = "pause";
    return;
  }
}

function countDown() {
  secondsCounter--;
  //   console.log(secondsCounter);

  // if (secondsCounter < 10) {
  //   secondsCounter = 0 + secondsCounter;
  // }
  if (secondsCounter < 0) {
    secondsCounter = 59;
    minutesCounter--;
    // if (minutesCounter == 0 && secondsTimer.value == 0) {
    //   clearInterval(counterInterval);
    //   console.log("done!");
    //   counting = false;
    // }
  }

  secondsTimer.value = secondsCounter;
  minuteTimer.value = minutesCounter;

  if (secondsCounter == 0 && minutesCounter == 0) {
    console.log("done!");
    clearInterval(counterInterval);
    ring.classList.add("ending");
    counting = false;
    return;
  }

  console.table(minutesCounter, secondsCounter);
}

// const repeater = setInterval(() => {
//   console.log("hello");
// }, 5000);

function settings() {
  // console.log("Change the settings");
  secondsTimer.toggleAttribute("disabled");
  minuteTimer.toggleAttribute("disabled");
}
