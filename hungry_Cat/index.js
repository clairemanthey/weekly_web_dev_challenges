
let catColor = document.getElementById("cat");

document.getElementById("fish").addEventListener("click", changeColor);

function changeColor(){
	catColor.style.fill = "black";
}


let interval = setInterval(function(){
	catColor.style.fill = "red";
}, 15000);