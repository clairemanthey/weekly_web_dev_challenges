/*button print "clicked" to console when clicked
let btn = document.getElementById("submitBtn");
let nameInput = document.getElementById("nameInput");
let email = document.getElementById("emailInput");
let openModal = document.getElementById("submitModal");
let closeModal = document.getElementsByClassName("close")[0];

let successModal = document.getElementById("successModal");
let closeSuccess = document.getElementById("closeSuccess")[0];
*/
document.getElementById("submitBtn").addEventListener("click", myFunction);

function myFunction(){
	console.log("Clicked");
}

