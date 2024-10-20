const displayTime = document.querySelector(".counter p");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("restart");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  displayTime.textContent = formattedTime;
}

function start() {
  if (timer === null) {
    timer = setInterval(stopWatch, 1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function restart() {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.textContent = "00:00:00";
}

playButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
restartButton.addEventListener("click", restart);
