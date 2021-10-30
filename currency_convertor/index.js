let inputAmount = document.getElementById("ogCurrency");
let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let exchangeRate = document.getElementById("exchangeRate");
let exchange = document.getElementById("exchange");
let outputTxt = document.getElementById("outputTxt");
let currencyFrom = document.getElementById("currencyFrom");
let currencyTo = document.getElementById("currencyTo");

//modal
let btn = document.getElementById("exchangeBtn");
let modal = document.getElementById("myModal");
let span = document.getElementById("close");

//Date
let today = new Date();
let date = today.getFullYear() + " - " + (today.getMonth()+1) + " - " + today.getDate();

//functions and evenlisteners
exchange.addEventListener("click",()=>{
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
    calculate();
});

let toAmount = 0;
function calculate(){
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;
	let closeModal = document.getElementById("close");
	
    
	if(fromCurrencyValue === toCurrencyValue){
		btn.onclick = function(){
			modal.style.display = "block";
		};
		closeModal.onclick = function(){
			modal.style.display = "none";
		};
		window.onclick = function(event){
			if(event.target == modal){
				modal.style.display = "none";
		    }
	    } ;
	}else{
    fetch(`https://open.er-api.com/v6/latest/${fromCurrencyValue}`)
    .then(res => res.json())
    .then(res => {
        const rate = res.rates[toCurrencyValue];
        exchangeRate.value = `${rate}`;
        toAmount = (inputAmount.value * rate).toFixed(3);
        currencyFrom.innerText= `${inputAmount.value} ${fromCurrencyValue}`;
        currencyTo.innerText = `${toAmount} ${toCurrencyValue}`;
        outputTxt.style.display="block";
    });
	}
}


document.getElementById("exchangeBtn").addEventListener("click",()=>{
    calculate();
});

document.getElementById("displayDate").innerHTML = date;

//	  alert("Please choose two different currencies");
	//      if(fromCurrencyValue === toCurrencyValue){
