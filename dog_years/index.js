function calculateDogYears() {
  let humanAge = document.getElementById("age").value.trim();
    if (!humanAge.match(/^[1-9][0-9]?[0-9]?$/) || humanAge === '') {
      document.getElementById("exact_age").innerHTML = "Please enter your age as a number.";
      return;
    }

  let dogYears=humanAge * 10.5;

  document.getElementById("exact_age").innerHTML = "That means you are " + dogYears + " in dog years!";
}

document.getElementById("btn").onclick = function() { calculateDogYears(); };
