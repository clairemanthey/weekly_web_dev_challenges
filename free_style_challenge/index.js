let calculator = {
	displayValue: "0",
	firstOperand: null,
	waitingForSecondOperand: false,
	operator: null,
};

function inputDigit(digit) {
	const { displayValue, waitingForSecondOperand } = calculator;
	
	if (waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingForSecondOperand = false;
	} else {
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
	
	console.log(calculator);
}

function inputDecimal(dot) {
	if(calculator.waitingForSecondOperand === true){
		calculator.displayValue = "0";
		calculator.waitingForSecondOperand = false;
		return;
	}
	
	if(!calculator.displayValue.includes(dot)){
		calculator.displayValue += dot;
	}
}

function handleOperator(nextOperator) {
	let { firstOperand, displayValue, operator } = calculator;
    let inputValue = parseFloat(displayValue);

    if (firstOperand == null && !isNaN(inputValue)) {
		calculator.firstOperand = inputValue;

    } else if (operator) {
		let result = calculate(firstOperand, inputValue, operator);
	    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
	if (operator === '+') {
		return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

function resetCalculator(){
	calculator.displayValue = "0";
	calculator.firstOperand = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
	console.log(calculator);
}



function updateDisplay() {
	let display = document.querySelector('.calculatorScreen');
    display.value = calculator.displayValue;
}

updateDisplay();

let keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
	let { target } = event;
    let { value } = target;
    if (!target.matches("button")){
	  return;
    }
  
   switch(value){
	   case "+":
	   case "-":
	   case "*":
	   case "/":
	   case "=":
	     handleOperator(value);
	   break;
	   case ".":
	     inputDecimal(value);
	   break;
	   case "all-clear":
	     resetCalculator();
	   break;
	   default:
	   
	   if(Number.isInteger(parseFloat(value))){
		   inputDigit(value);
	   }
  }
    updateDisplay();
});