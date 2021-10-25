// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types

let count = document.getElementById("count");
let input = document.getElementById("txtid");
let character = document.getElementById("charCount");
let sentence = document.getElementById("sentences");
let longestWord = document.getElementById("longestWord");
let longestWordCount = document.getElementById("shortestWord");

//characters
let howManyCharacters = (str) =>{
  let characterCount = 0;

  if(input.value != ""){
    return str.match(/(.)/g).length;
  }else{
    return characterCount;
  }
  character.textContent = characterCount
};

/*
let howManyCharacters = (text) =>{
};
*/

//determining if input is a word
let isItAWord = (str) => {
  let alphaNumericFound = false;
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  };
  return alphaNumericFound;
};

//word counter
let wordCounter = (text) => {
  text = input.value.split(' ');
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (!text[i] == ' ' && isItAWord(text[i])) {
      wordCount++;
    }
  }
  count.innerText = wordCount;
};

//longest word
function longestWordText(str) {
  if (input.value != "") {
    const strSplit = str.split(" ");
    let longestWord = strSplit.sort(function (a, b) {
      return b.length - a.length;
    });
    return longestWord[0];
  }
}

//longest word count
let longestWordCharacters = (str) => {
  if (input.value != "") {
    const splitStr = str.split(" ");
    let longestCharacters = 0;
    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i].length > longestCharacters) {
        longestCharacters = splitStr[i].length;
      }
    }
    return longestCharacters;
  }
};

//sentence counter
let sentenceCounter = (words) =>{
  if (words) {
    var sentences = input.value.split(/[.|!|?]+/g);
    sentence.innerHTML = sentences.length - 1;
  } else {
    sentence.innerHTML = 0;
  }
};

input.addEventListener("keyup", () => {
  wordCounter(input.value);
  character.textContent = howManyCharacters(input.value);
  longestWord.textContent = longestWordText(input.value);
  sentenceCounter(input.value);
  longestWordCount.textContent = longestWordCharacters(input.value);

});

//input.addEventListener("keyup", function(e){
//  wordCounter(e.target.value);
//  howManyCharacters(e.target.value);
//});

//  count.textContent = wordCounter(input.value); 
