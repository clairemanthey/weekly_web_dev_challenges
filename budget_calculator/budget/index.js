/* Instructions:

1. Wire up the budgeting tool so it tells the user whether or 
not they can afford an item based on their available funds. 💸
2. Style it as you wish 💅 

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
*/

//variables
let iHave = document.getElementById("have");
let howMuch = document.getElementById("cost");
let message = document.getElementById("message");
let btn = document.getElementById("submit");
let myModal = document.getElementById("myModal");
let closeModal = document.getElementById("close");

//functions
function doIHaveEnough(){
	if(howMuch.value.length == 0 || iHave.value.length == 0){
		myModal.style.display = "block";

		closeModal.onclick = function() {
			myModal.style.display = "none";
		};
		window.onclick = function(event){
			if(event.target == myModal){
				myModal.style.display = "none";
			}
		};		
	}else if(iHave.value >= howMuch.value){

		message.innerHTML = ("You Have Enough");

	}
	else{
		message.innerHTML = ("Keep On Saving<br> You Can Do It!!");
	}
}
//fire works function 


//eventlisteners
btn.addEventListener("click", () =>{
	doIHaveEnough();
});