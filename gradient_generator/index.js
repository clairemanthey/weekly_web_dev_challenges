// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider. 
// - Use the gradient as the form background.

// Stretch goals:
// - Add more colors.
// - Add a 'Surprise Me' button which generates random gradients (and updates the inputs).
// - Check for contrast between the gradient and the text.

//Variables 
let css = document.getElementById("currentColors");
let colorOne = document.getElementById("picker-1");
let colorTwo = document.getElementById("picker-2");
let range = document.getElementById("range");
let body = document.getElementById("gradientBG");
let type = document.getElementById("gradient-selector");
let radioBtn = document.forms["radio"].elements["gradient-type"];
let radio = document.getElementById("radio");
let random = document.getElementById("random");
let inputRange = document.getElementById("range");
let angle = document.getElementById("angle");

const getRandomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const fromRGBtoHex = (rgb1, rgb2, rgb3) => {
	let hexOne = parseInt(rgb1).toString(16);
	let hexTwo = parseInt(rgb2).toString(16);
	let hexThree = parseInt(rgb3).toString(16);
	let hexOutput;
	if (hexOne.length == 1) {
		hexOne = "0" + hexOne;
	}
	if (hexTwo.length == 1) {
		hexTwo = "0" + hexTwo;
	}
	if (hexThree.length == 1) {
		hexThree = "0" + hexThree;
	}
	hexOutput = "#" + hexOne + hexTwo + hexThree;
	return hexOutput;
};

const setLinearGradient = () => {
	body.style.background =	"linear-gradient(" + range.value + "deg, " + colorOne.value + ", " + colorTwo.value	+ ")";
	css.textContent = body.style.background;
	inputRange.disabled = false;
	inputRange.classList.remove("input-disable");
	angle.classList.remove("input-disable");
};

const setRadialGradient = () => {
	body.style.background =	"radial-gradient("	+ colorOne.value	+ ", " + colorTwo.value + ")";
	css.textContent = body.style.background;
	inputRange.disabled = true;
	inputRange.classList.add("input-disable");
	angle.classList.add("input-disable");
};

const setConicGradient = () => {
	body.style.background =	"conic-gradient(from " + range.value + "deg, " + colorOne.value + ", " + colorTwo.value	+ ")";
	css.textContent = body.style.background;
	inputRange.disabled = false;
	inputRange.classList.remove("input-disable");
	angle.classList.remove("input-disable");
};

const selectGradient = () => {
       if(radioBtn.value === "linear") {
         setLinearGradient();
       }
       else if(radioBtn.value === "radial") {
         setRadialGradient();
       }
       else if(radioBtn.value === "conic") {
         setConicGradient();
	   }
	};
     
const getRandomGradient = () => {
	const getRandomHEX = () => {
		let rgb1 = getRandomInRange(0, 255);
		let rgb2 = getRandomInRange(0, 255);
		let rgb3 = getRandomInRange(0, 255);
		return fromRGBtoHex(rgb1, rgb2, rgb3);
	};
	let randomOne = getRandomHEX();
	let randomTwo = getRandomHEX();
	colorOne.value  = randomOne;
	colorTwo.value  = randomTwo;
	selectGradient();
};

getRandomGradient();
range.addEventListener("input", selectGradient);
random.addEventListener("click", getRandomGradient);
colorOne.addEventListener("input", selectGradient);
colorTwo.addEventListener("input", selectGradient);
radio.addEventListener("click", selectGradient);