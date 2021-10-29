/*
DESCRIPTION:
In this challenge you are asked to change how the logo looks when you click 
the three buttons. This is an excellent challenge for styling elements in 
JavaScript, not CSS.

If the user clicks the first button, I want the text on the 
logo to become black. If the user clicks the second button, 
I want the logo background to become red. If the user clicks the third button,
I would like you to add a shadow to the logo.

event listeners, getElementById, operators

*/

// Write your code here 👇


//button one
let clicksOne = 0;

let one = document.getElementById("logo"); 
let two = document.getElementById("text");
function buttonClicks(){
	clicksOne ++;
	if (clicksOne % 2){
		one.style.backgroundColor = "white";
		two.style.color = "black";		
	} else{
		two.style.color = "white";
		one.style.backgroundColor = "black";
	}
}

//button two
let clicksTwo = 0;
function buttonClicksTwo(){
	clicksTwo ++;
	if (clicksTwo % 2){
		one.style.backgroundColor = "white";
		two.style.color = "red";
	} else{
		one.style.backgroundColor = "red";
		two.style.color = "white";
	}
}

//button three
let clicksThree = 0;
function buttonClicksThree(){
	clicksThree ++;
	if (clicksThree % 2){
		two.style.textShadow = "5px 5px 1px #003153";
		two.style.color = "white";
	}else{
		two.style.color = "#003153";
		two.style.textShadow = "5px 5px 1px white";
	}
}

//reset button
function resetclick(){
	two.style.color = "white";
	one.style.backgroundColor = "#FF8600";
	two.style.textShadow = "0 0 0";
}

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use eventlisteners on the buttons to envoke functions
3. change the properties of the logo using JavaScript

STRETCH GOALS:
- If any of the buttons are clicked a second time, I want the change they 
  are responsible for to be reversed.
- Can you improve the overall design?

*/
