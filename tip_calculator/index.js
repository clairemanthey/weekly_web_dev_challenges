function tipTotalAmount(){
	let billTotal = document.getElementById("bill_value").value;
	let tipPercent = document.getElementById("tip_value").value;
	let people = document.getElementById("persons").value;
	
	if (billTotal === "" || tipPercent == 0){
		return window.alert ("Please enter bill total and the percent you would like to tip");
	}
	
	if(people === "" || people <= 1){
		people = 1;
		document.getElementById("each").style.display = "none";
	} else{
		document.getElementById("each").style.display = "block";
	}
	
	let total =(billTotal * tipPercent) / people;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);
	
	document.getElementById("result").style.display = "block";
	document.getElementById("total").innerHTML = total;
};

	document.getElementById("result").style.display = "block";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
	tipTotalAmount();
};
