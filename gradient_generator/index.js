let loadBTN = document.getElementById("btn");
let rotate = document.getElementById("loader");
let time = document.getElementById("timer");
let timeLeft = time.innerText;
let interval;

loadBTN.addEventListener("click", startJSLoader);

function startJSLoader(){
	rotate.classList.toggle("gateSpin");
	if(rotate.classList.contains("gateSpin")){
		loadBTN.innerText ="Loading...";
		countDown();
		time.innerText = "Your page is loading";

	}else{
		loadBTN.innerText = "Load";
	}
}

function countDown(){
	interval = setInterval(startCountDown, 5000);
}

function startCountDown(){
	if(timeLeft > 1 ){
		timeLeft -= 1;
	}else{
		clearInterval(interval);
		rotate.classList.remove("gateSpin");
		time.innerText = "Your Page is Ready";
		loadBTN.innerText = "load";
	}
}