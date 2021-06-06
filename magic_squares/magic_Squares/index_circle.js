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
}

span.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}
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
let tenthDiv = childrenArray[9];
let newElement = document.createElement('h1');
let resetBtn = document.getElementById("btn_two");

firstDiv.addEventListener('click', () => {
	resetBtn.setAttribute('style', 'display: block')
    changeColors('#F94144');        
});

secondDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block")
	changeColors("#F3722C");
});

thirdDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block")
	changeColors("#F8961E");
});

fourthDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block")
	changeColors("#F9844A");
});

fifthDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block")
	changeColors("#F9C74F");
});

sixthDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block")
	changeColors("#90BE6D");
});

seventhDiv.addEventListener("click", () => {
	resetBtn.setAttribute("stye", "display: block")
	changeColors("#43AA8B");
});

eightDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block")
	changeColors("#0AEFFF");
});

ninethDiv.addEventListener("click", () => {
	resetBtn.setAttribute("style", "display: block")
	changeColors("#580AFF");
});

let changeColors = (color2) => {
	childrenArray.forEach( div => {
		div.style = `background-color: ${color2}`
    })
}
    
let reset = () => {
	resetBtn.setAttribute('style', 'display: none');
    changeColors('#3F272B', '#8A2E4B');
}
    
    
resetBtn.addEventListener('click', () => {
	reset();
})
    

/*
document.addEventListener("DOMContentLoaded", () => {
   let squares = [...document.getElementsByClassName("container")[0].children]
   let firstSquare = squares[0]
   firstSquare.addEventListener("click",() => {
      squares.forEach(sq => {
         sq.style.backgroundColor = "#edeb12"
      });
   })
})

*/
/*

DETAILED INSTRUCTIONS 
1. Use JavaScript to turn elements into an Array
2. Use the .forEach() method to apply a change to all the elements
3. Listen out for when the first square is clicked

STRETCH GOALS:
- What else can you change about the squares?
- Can you improve the overall design?

*/
 