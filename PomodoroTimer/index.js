let timeStatus = document.getElementById("status");
let start = document.getElementById("start");
let displayTimer = document.getElementById("timerDisplay");
let reset = document.getElementById("reset");
let workTimeAmount = document.getElementById("workTimeLength");
let breakTimeAmount = document.getElementById("breakTimeLength");

let countdown = 0;
let seconds =  1500;
let workTime = 25;
let breakTime = 5;
let isBreak = true;
let isPaused = true;

//start and reset even listeners

start.addEventListener("click", () =>{
	clearInterval(countdown);
	isPaused = !isPaused;
	if(!isPaused){
		countdown = setInterval(timer, 1000);
	}
});

reset.addEventListener("click", () => {
	clearInterval(countdown);
	seconds = workTime * 60;
	countdown = 0;
	isPaused = true;
	isBreak = true;
});

//Timer Countdown
function timer(){
	seconds --;
	if(seconds < 0){
		clearInterval(countdown);
		seconds = (isBreak ? breakTime : workTime) * 60;
		isBreak = !isBreak;
		countdown = setInterval(timer, 1000);
	}
}

//Changes to Work and Break Times

let increment = 1;
let incrementFunctions =
    {"#addTime": function () { workTime = Math.min(workTime + increment, 60);},
     "#subtractTime": function () { workTime = Math.max(workTime - increment, 5);},
     "#addBreakTime": function () { breakTime = Math.min(breakTime + increment, 60);},
     "#subtractBreakTime": function () { breakTime = Math.max(breakTime - increment, 5);}};

for (var key in incrementFunctions){
	if(incrementFunctions.hasOwnProperty(key)){
		document.querySelector(key).onclick = incrementFunctions[key];
	}
}

//HTML updating

function countdownDisplay() {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  displayTimer.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

}

function buttonDisplay() {
  if (isPaused && countdown === 0) {
    start.textContent = "START";
  } else if (isPaused && countdown !== 0) {
    start.textContent = "Continue"; 
  } else {
    start.textContent = "Pause";
  }
}

function updateHTML() {
  countdownDisplay();
  buttonDisplay();
  isBreak ? timeStatus.textContent = "Keep On Working" : timeStatus.textContent = "Take a Break!";
  workTimeAmount.textContent = workTime;
  breakTimeAmount.textContent = breakTime;  
}

window.setInterval(updateHTML, 100);
document.onclick = updateHTML;