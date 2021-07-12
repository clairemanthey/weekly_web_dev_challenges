
document.addEventListener('DOMContentLoaded', function () {

  let countdown;
  let overtime;
  let display = document.getElementById("display");
  let steepDisplay = document.getElementById("displayTime");
  let hourDisplay = document.getElementById("displayHour");
  let buttons = document.querySelectorAll("[data-time]");
  let comment = document.getElementById("displayTwo");

  function time(seconds) {
    steepDisplay.style.color = "black";
    clearInterval(countdown);
    clearInterval(overtime);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndHour(then);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        displayTimeOver();
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);
  }


  function displayTimeOver() {
    let minutesOver = 0;
    let secondsOver = 0;

    steepDisplay.textContent = "0:00";

    overtime = setInterval(() => {
      secondsOver++;
      if (secondsOver === 60) {
        secondsOver = 0;
        minutesOver++;
      }
      console.log({ minutesOver, secondsOver });
      let display = `Your tea is ready, enjoy`; 
      steepDisplay.textContent = display;
	  let displayTwoContent = "Click on a cup to steep your next cup of tea";
	  displayTwo.textContent = displayTwoContent; 
    }, 1000)

  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    console.log({ minutes, remainderSeconds });
    let display = `${minutes}:${((remainderSeconds < 10 && remainderSeconds >= 0) ? "0" : "")}${remainderSeconds} minutes until your tea is ready.`;
    document.title = display;
    steepDisplay.textContent = display;
  }

  function displayEndHour(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
  }

  function startTimer() {
    const seconds = parseInt(this.dataset.time);
    time(seconds);
    display.style.backgroundColor = "#F6E5CA";
    steepDisplay.style.color = "#540B0E";
    hourDisplay.style.color = "#B12F31";
  }

  buttons.forEach(button => button.addEventListener("click", startTimer));

});

//Modal

let modal= document.getElementById("steepTime");
let btn = document.getElementById("steepBtn");
let span = document.getElementById("close");

btn.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}