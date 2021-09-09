let meter = document.getElementById("energy");
let energyAmount = document.getElementById("energyInput");


energyAmount.addEventListener("input", function(){
	meter.value = energyAmount.value
})


let exerciseAmount = document.getElementById("exerciseTime");
let exerciseTime = document.getElementById("exercise")

exerciseTime.addEventListener("input", function(){
	exerciseAmount.value = exerciseTime.value;
})


let sleepAmount = document.getElementById("sleep");
let sleep = document.getElementById("sleepTime");

sleepAmount.addEventListener("input", function(){
	sleep.value = sleepAmount.value;
})