/*
DESCRIPTION:
In this challenge you are a magician that tells your audience that by pressing only
the first square on the left, you can change ALL 9 squares on the grid to be yellow.
Write a function using the .forEach() method that will do just that.

event listeners, Array work

*/

// Write your code here 👇
    
    
//write alert or alternative
let modal = document.getElementById("modalMessage");

let btn= document.getElementById("btn_one");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block";
};

span.onclick = function(){
	modal.style.display = "none";
};

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
};
//square color change

let childrenArray = Array.from(document.querySelector('.container').children);
let firstDiv = childrenArray[0];    
let secondDiv = childrenArray[1];
let thirdDiv = childrenArray[2];
let fourthDiv = childrenArray[3];
let fifthDiv = childrenArray [4];
let sixthDiv = childrenArray[5];
let seventhDiv = childrenArray[6];
let eightDiv = childrenArray[7];
let ninethDiv = childrenArray[8];
let newElement = document.createElement('h1');
let resetBtn = document.getElementById("btn_two");

firstDiv.addEventListener('click', () => {
	resetBtn.setAttribute('style', 'display: block');
    changeColors('#243021', 'yellow', "#bae1ff");        
});

secondDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block");
	changeColors("navy", "#00FF00", "#FF6D6A");
});

thirdDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block");
	changeColors("#1C0F13", "#099FFF", "#AC4FC6");
});

fourthDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block");
	changeColors("#232518", "#ff6600", "#587EDE");
});

fifthDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block");
	changeColors("#1A170E", "#ba8c2a", "#BB2AA1");
});

sixthDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block");
	changeColors("#040403", "#00FFFF", "#FF6D9E");
});

seventhDiv.addEventListener("click", () => {
	resetBtn.setAttribute("stye", "display: block");
	changeColors("#1F1300", "#00FF66", "#BD92FF");
});

eightDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block");
	changeColors("#0A210F", "#FF3300", "#00CCFF");
});

ninethDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block");
	changeColors("#322F20", "#0062FF", "#62FF00");
});

let changeColors = (color1, color2, color3) => {
	childrenArray.forEach( div => {
		div.style = `background-color: ${color2}; box-shadow: 5px 9px ${color3}`;
        document.body.style = `background-color: ${color1}`;
    });
};
    
let reset = () => {
	resetBtn.setAttribute('style', 'display: none');
    changeColors('#3F272B', '#8A2E4B');
};
    
    
resetBtn.addEventListener('click', () => {
	reset();
});
    