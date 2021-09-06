//Modal variables and functions
let modal = document.getElementById("submitModal");
let btn = document.getElementById("submitBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block";
}

span.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target === modal){
		modal.style.display = "none";
	}
}

document.addEventListener("keyup", (event) => {
	if(event.key === "Escape"){
		modal.style.display = "none";
	}
});
