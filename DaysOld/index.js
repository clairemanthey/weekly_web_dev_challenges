document.getElementById('bdayForm').addEventListener('submit', calculateDays);
	
    
function calculateDays(e){
	var year = document.getElementById('year').value;
	var month = document.getElementById('month').value;
	var day = document.getElementById('day').value;
		//birth date
	var birthAr = [];
	birthAr.push(year, month, day);
	var dateBirth = birthAr.join("-"); 
	var birth = new Date(dateBirth);
		
	var today = new Date();
	var millisec = today - birth;
    var days = ((millisec/86400000).toFixed(0));
	var old = (days/365.242199).toFixed(3);
	var weeks = (days/7).toFixed(2);
	var monthResult = (old*12).toFixed(2);
		
	var leap = [];
      
	e.preventDefault();

	let isItLeap = () => {	
	var year = Number(document.getElementById('year').value);
	
	  if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)){
			leap.push(year);
			console.log(leap.length);}	
	  };
		
		if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)){
			leap.push(year);
			}
		  
	if ((month == 2) && (day > 28) && (leap.length == 0)){
     alert("Please enter valid date!");
		return false;
        } 	
		
	if ((month == 2) && (day > 29) && (leap.length != 0)) {
     alert("Please enter valid date!");
	 return false;
    	}	
		
   if(birth > today) {
	   document.getElementById("displayResult").innerHTML = "You have been born yet!";
	return false; 
   }
   
   if(birth = today){
	   document.getElementById("displayResult").innerHTML = "You are " + days + "days old! " + "Happy Birthday";
	   return false;

   }
		
   if ((day > 30) && ((month == 4) || (month == 6)|| (month == 9) || (month == 11))) {
		document.getElementById("displayResult").innerHTML = "Please enter valid date!";
		return false;
        }
		
   else {
		document.getElementById("displayResult").innerHTML = 
		"<strong>You are</strong> " + "<strong>" + days + "</strong>"+ " <strong>days old!</strong>";
	   }	
	} 
	