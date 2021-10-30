function roll(min, max, floatFlag) {
   let r = Math.random() * (max - min) + min;
   return floatFlag ? r : Math.floor(r);
}

let testPurses = Array(5).fill(0).map(a => {
   return {
       quarters: roll(0, 15),
       dimes: roll(0, 30),
       nickels: roll(0, 40),
       pennies: roll(0, 50),
       price: Number(roll(0, 10, 1).toFixed(2))
   };
});

const purchaseConfirmation = document.getElementById("purchase-confirmation");
const quarterCounter = document.getElementById("quarter-count");
const dimeCounter = document.getElementById("dime-count");
const nickelCounter = document.getElementById("nickel-count");
const pennyCounter = document.getElementById("penny-count");

// Your code here 👇

let Test = 0;
const preTestCase = document.getElementById("previous-case");
const nextTestCase = document.getElementById("next-case");
preTestCase.disabled = true;


let  enoughChange = ({quarters, dimes, nickels, pennies, price}) => {
    quarterCounter.textContent = quarters;
    dimeCounter.textContent = dimes;
    nickelCounter.textContent = nickels;
    pennyCounter.textContent = pennies;

    let totalPurse = (0.25 * quarters + 0.10 * dimes + 0.05 * nickels + 0.01 * pennies).toFixed(2);

    let isEnoughChange = price <= totalPurse;

    purchaseConfirmation.style.background = isEnoughChange ? "green" : "red";
    
    purchaseConfirmation.textContent = `With $${totalPurse} in coins, you ${isEnoughChange ? "can" : "cannot"} afford this $${price} purchase${isEnoughChange}`;
   
};

enoughChange(testPurses[Test]);

const handleClick = (offset) => {
    Test += offset;
    enoughChange(testPurses[Test]);
    
    preTestCase.disabled = Test === 0;
    nextTestCase.disabled = Test === 4;
};

preTestCase.addEventListener("click", () => handleClick(-1));
nextTestCase.addEventListener("click", () => handleClick(1));

enoughChange(testPurses[Test]);
 