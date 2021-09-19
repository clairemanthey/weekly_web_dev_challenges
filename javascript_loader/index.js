let loadBTN = document.getElementById("btn");
let rotate = document.getElementById("loader");
let time = document.querySelector(".timer");
let timeLeft = document.getElementById("timeLeft");
let timeStart = 7;

loadBTN.addEventListener("click",() =>{
	rotate.classList.toggle("gateSpin");
	time.style.visibility = "visible";

	if(rotate.classList.contains("gateSpin")){
		loadBTN.innerHTML = "Loading...";
		loadBTN.style.backgroundColor = "lightgrey";

		const timeOut = setInterval(spin, 1000);
		function spin(){
			if (timeStart == 0){
				timeLeft.innerText = 7;
				timeStart = 7;
				time.style.visibility = "hidden";
				clearInterval(timeOut);
			}else{
				timeStart--;
				timeLeft.innerText = timeStart;
			}
		}

		setTimeout( () => {
			rotate.classList.toggle("gateSpin");
			loadBTN.innerHTML = "Ready";
			loadBTN.style.backgroundColor = "#5eecd6";
		}, 7000);
	}
});