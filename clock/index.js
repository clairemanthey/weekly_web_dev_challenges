setInterval(currentTime, 1000);

function currentTime(){
	let date = new Date();
	
	let secDiv = document.getElementById("sec");
	let sec = date.getSeconds()/60;
	secDiv.style.transform = "rotate("+(sec*360) + "deg)";
	
	let minDiv = document.getElementById("min");
	let min = (date.getMinutes() + sec)/60;
	minDiv.style.transform = "rotate("+(min*360) + "deg)";


	
	let hourDiv = document.getElementById("hour");
	let hour = (date.getHours() + min)/12;
	hourDiv.style.transform = "rotate("+(hour*360)+"deg)";
}

currentTime();
/*
Description:
    Your job is to fix this broken clock!
    Right now it's only right twice a day.

Skills: 
    CSS Transforms, JavaScript Dates, setTimeout()/setInterval(), HTML/CSS in JavaScript
import { now } from './utility.js'

let currentDate = new Date();
let time = currentDate.getHourse() + 

const getClockTemplate = id => `<div id="clock-${id}"" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
</div>`

const startClock = () => {
    document.body.innerHTML = getClockTemplate(0)
}

startClock()

*/