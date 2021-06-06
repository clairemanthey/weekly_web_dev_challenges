//import { testPurses } from "shortChangeTests.js";

function roll(min, max, floatFlag) {
   let r = Math.random() * (max - min) + min
   return floatFlag ? r : Math.floor(r)
}
/* 
   Learn more about this roll function and how to 
   derive it in my Practical Math for Front End 
   Developers course here on Scrimba :)
   
   https://scrimba.com/learn/practicalmath
*/


let testPurses = Array(5).fill(0).map(a => {
   return {
       quarters: roll(0, 15),
       dimes: roll(0, 30),
       nickels: roll(0, 40),
       pennies: roll(0, 50),
       price: Number(roll(0, 10, 1).toFixed(2))
   }
})

/* 
    Write a function enoughChange
    
    Given an object representing a coin purse, and a price
        it should return true/false depending on whether 
        or not you have enough change to complete a 
        purchase at the given price
    
    The function should also update the "counters"
        such that they reflect the quantities in
        the test case
        
    You should then use this function to update the 
        purchaseConfirmation div to display whether
        or not you can afford the purchase with the
        coin quantities provided
        
    Finally, create nextCase and previousCase 
        buttons to cycle through the test cases 
    
    Refresh the mini-browser or save this file to
        load new test cases!
*/

const purchaseConfirmation = document.getElementById("purchase-confirmation");
const quarterCounter = document.getElementById("quarter-count");
const dimeCounter = document.getElementById("dime-count");
const nickelCounter = document.getElementById("nickel-count");
const pennyCounter = document.getElementById("penny-count");
let updateTotals;
let sampleTest = testPurses[0];
console.log(sampleTest);

// Your code here 👇

let Test = 0;
const preTestCase = document.getElementById("previous-case");
const nextTestCase = document.getElementById("next-case");

purchaseConfirmation.innerText = enoughChange(sampleTest);

function enoughChange(/*parameters*/){
	//arguments
	//object
	let { quarters, dimes, nickels, pennies, price } = sampleTest;
	let total = purseTotal(quarters, dimes, nickels, pennies);
	newTotals(quarters, dimes, nickels, pennies);
	if (total >= price){
		purchaseConfirmation.style.backgroundColor = "green"; /*change color*/
		return `You have $${total} in coins, you can afford this $${price} purchase`;
	}else{
		purchaseConfirmation.style.backgroundColor = "darkred"; /*change*/
		return `You have $${total} in coins, you cannot afford this $${price} purchase`;
	}
}

//function to update totals
function newTotals(quarters, dimes, nickels, pennies){
	quarterCounter.innerText = `${quarters}`;
	dimeCounter.innerText = `${dimes}`;
	nickelCounter.innerText = `${nickels}`;
	pennyCounter.innerText = `${pennies}`;
}
 
 
//coin totals

function quarterTotal(count){
	return count * 0.25;
}

function dimeTotal(count){
	return count * 0.10;
}

function nickelTotal(count){
	return count * 0.05;
}

function pennyTotal(count){
	return count * 0.01;
}

//calculate purse total

function purseTotal(quarters, dimes, nickels, pennies){
	return(
	  Math.round(
	    (quarterTotal(quarters) +
		 dimeTotal(dimes) +
		 nickelTotal(nickels) +
		 pennyTotal(pennies)) * 100
	  ) / 100
	);
}

//eventlisteners for buttons
//button preCase, nextCase

preTestCase.addEventListener("click", () => {
	if (Test >= 1){
		preCase();
	}
});

nextTestCase.addEventListener("click", () => {
	if(Test <= testPurses.lenght - 2){
		nextCase();
	}
});

function preCase(){
	Test--;
	sampleTest = testPurses[Test];
	let{quarters, dimes, nickels, pennies, price} = sampleTest;
	updateTotals(quarters, dimes, nickels, pennies);
	purchaseConfirmation.innerText = enoughChange(price);
}

function nextCase(){
	Test++;
	sampleTest = testPurses[Test];
	let{quarters, dimes, nickels, pennies, price} = sampleTest;
	updateTotals(quarters, dimes, nickels, pennies);
	purchaseConfirmation.innerText = enoughChange(price);
}

