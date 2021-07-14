
let eyePicker = document.getElementById("colorOne");
let eye = document.getElementsByClassName("eye")[0];
let eyeTwo = document.getElementsByClassName("eye")[1];

eyePicker.addEventListener('change', function(){
	eye.style.background = this.value;
	eyeTwo.style.background = this.value;
});

let nosePicker = document.getElementById("colorThree");
let nose = document.getElementsByClassName("nose")[0];

nosePicker.addEventListener('change', function(){
	nose.style.background = this.value;
}); 

let earPicker = document.getElementById("colorTwo");
let ear = document.getElementById("right-ear");
let earTwo = document.getElementById("left-ear");

earPicker.addEventListener('change', function(){
	ear.style.background = this.value;
	earTwo.style.background = this.value;
});
