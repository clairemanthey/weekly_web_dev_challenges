//Modal
let modal = document.getElementById("catModal");
let catSpan = document.getElementsByClassName("close")[0];
let btn = document.getElementById("btncat");

btn.onclick = function(){
	modal.style.display = "block";
};

catSpan.onclick = function(){
	modal.style.display = "none";
};

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
};

let lionModal = document.getElementById("LionModal");
let lionBtn = document.getElementById("btnLion");

let lionSpan = document.getElementsByClassName("lionClose")[0];

lionBtn.onclick = function(){
	lionModal.style.display = "block";
};

lionSpan.onclick = function(){
	lionModal.style.display = "none";
};

window.onclick = function(event){
	if(event.target == lionModal){
		lionModal.style.display = "none";
	}
};

let tigerModal = document.getElementById("tigerModal");
let tigerBtn = document.getElementById("btnTiger");
let tigerSpan = document.getElementsByClassName("tigerClose")[0];

tigerBtn.onclick = function(){
	tigerModal.style.display = "block";
};

tigerSpan.onclick = function(){
	tigerModal.style.display = "none";
};

window.onclick = function(event){
	if(event.target == tigerModal){
		tigerModal.style.display = "none";
	}
};

//Toggle

function check() {
  let checkBox = document.getElementById("priceChange");
  let text1 = document.getElementsByClassName("priceOne");
  let text2 = document.getElementsByClassName("priceTwo");

  for (let i = 0; i < text1.length; i++) {
	  if (checkBox.checked == false) {
		  text1[i].style.display = "block";
          text2[i].style.display = "none";
    }else if (checkBox.checked == true) {
		text1[i].style.display = "none";
        text2[i].style.display = "block";
    }
  }
}
check();

//cat modal price change
function catModalCheck(){
	let catCheckBox = document.getElementById("catModalPriceChange");
	let modalText1 = document.getElementsByClassName("catModalPriceOne");
	let modalText2 = document.getElementsByClassName("catModalPriceTwo");
	
	for (let i = 0; i < modalText1.length; i++){
		if (catCheckBox.checked == false){
			modalText1[i].style.display = "block";
			modalText2[i].style.display = "none";
		}else if (catCheckBox.checked == true){
			modalText1[i].style.display = "none";
			modalText2[i].style.display = "block";		
		}
	}
}

catModalCheck();

//lion modal price change
function lionModalCheck(){
	let lionCheckBox = document.getElementById("lionSwitch");
	let modalLionText1 = document.getElementsByClassName("lionModalPriceOne");
	let modalLionText2 = document.getElementsByClassName("lionModalPriceTwo");
	
	for (let i = 0; i < modalLionText1.length; i++){
		if (lionCheckBox.checked == false){
			modalLionText1[i].style.display = "block";
			modalLionText2[i].style.display = "none";
		}else if (lionCheckBox.checked == true){
			modalLionText1[i].style.display = "none";
			modalLionText2[i].style.display = "block";		
		}
	}
}

lionModalCheck();

//tiger modal price change
function tigerModalCheck(){
	let tigerCheckBox = document.getElementById("tigerSwitch");
	let modalTigerText1 = document.getElementsByClassName("tigerModalPriceOne");
	let modalTigerText2 = document.getElementsByClassName("tigerModalPriceTwo");
	
	for (let i = 0; i < modalTigerText1.length; i++){
		if (tigerCheckBox.checked == false){
			modalTigerText1[i].style.display = "block";
			modalTigerText2[i].style.display = "none";
		}else if (tigerCheckBox.checked == true){
			modalTigerText1[i].style.display = "none";
			modalTigerText2[i].style.display = "block";		
		}
	}
}

tigerModalCheck();