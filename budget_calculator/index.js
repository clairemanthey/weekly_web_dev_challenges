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
	}else if(iHave.value <= howMuch.value){

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