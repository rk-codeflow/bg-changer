const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

// Generate random color
function randomHex() {
  const chars = "0123456789ABCDEF";
  let hexColors = "#";
  for (i = 0; i < 6; i++) {
    hexColors += chars[Math.floor(Math.random() * 16)];
  }
  return hexColors;
}

let intervalId;

// fn to change background color
function startBgColor() {
  document.body.style.backgroundColor = randomHex();
  console.log(randomHex());
}

// start changing bgcolor
startBtn.addEventListener("click", function () {
  intervalId = setInterval(startBgColor, 1000);
});

// stop changing bgcolor
stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});
