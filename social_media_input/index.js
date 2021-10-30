let length = document.getElementById("string");
let btn = document.getElementById("btn");
let count = document.getElementById("counterFooter");
let txt = document.getElementById("txt");
let lnk = document.querySelector("a");

let endLength = (inputLength) => {
	txt.textContent = "";
	btn.classList.remove("buttonDisabled");
	if(inputLength > 350){
		btn.classList.add("buttonDisabled");
		txt.textContent = "Too Many";
		length.style.backgroundColor = "#FCA311";
	}else{
		length.style.backgroundColor = "#B9E8F4";
	}
};
/*event listeners*/

length.addEventListener("keydown", () => {
	count.textContent = `${350-length.textLength}/250`;
	endLength(length.textLength);
});