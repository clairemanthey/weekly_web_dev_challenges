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
