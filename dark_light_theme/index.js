/*  Dark Theme */

let toggle = document.getElementById("toggle");
let body = document.body;

toggle.addEventListener("input", (e) => {
	const isChecked = e.target.checked;
	if(isChecked){
		body.classList.add("dark");
	}else{
		body.classList.remove("dark");
	}
});

/*  Modal  */

let modal = document.getElementById("modal");
let modalBtn = document.getElementById("modalBtn");
let span= document.getElementsByClassName("close")[0];

modalBtn.addEventListener("click", (e) => {
	modal.style.display = "block";
});

span.addEventListener("click",(e) => {
	modal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if(event.target == modal){
		modal.style.display = "none";
	}
});

window.addEventListener("keydown", (e) => {
	if(event.key = "Escape"){
		modal.style.display = "none"
	}
});
