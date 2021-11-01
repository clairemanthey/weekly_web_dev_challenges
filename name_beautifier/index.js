let makeItPretty = document.getElementById("beautifierBtn");
let hex = document.getElementById("hex");
let name = document.getElementById("name");

const fontsArr = [
      "Impact,Charcoal,sans-serif",
      "Brush Script MT, cursive",
      "Luminari, fantasy",
      "Comic Sans MS, cursive",
      "American Typewriter, serif"
];
//font weight
const fontWeightArr = [
      "300",
      "400",
      "500",
      "600",
];


function makeItBeautiful(){
//font family
      let randnum = Math.floor(Math.random() * 5);
      name.style.fontFamily = fontsArr[randnum]; 
      makeItPretty.style.fontFamily = fontsArr[randnum];
//font color      
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      let pix = Math.floor(Math.random() * 80);
      let randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
      let randompix = 'pix';
  //alert(pix);
      name.style.color = randomRGBA;
      makeItPretty.style.backgroundColor = randomRGBA;
//weight
      let weight = Math.floor(Math.random() * 2);
      name.style.fontWeight = weight;


}
makeItPretty.addEventListener('click', makeItBeautiful);


// change font weight

//beach 

//global variables
