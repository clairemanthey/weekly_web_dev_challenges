let beachBtn = document.getElementById("beachBtn");
let beachtitle = document.getElementById("title");
let body = document.getElementsByTagName("body");
//arrays

const beachImages = [
      "beachImgs/beachImageOne.jpg",
      "beachImgs/beachImageTwo.jpg",
      "beachImgs/beachImageThree.jpg",
      "beachImgs/beachImageFour.jpg",
      "beachImgs/beachImageFive.jpg",
      "beachImgs/beachImageSix.jpg",
      "beachImgs/beachImageSeven.jpg",
      "beachImgs/beachImageEight.jpg",
      "beachImgs/beachImageNine.jpg",
      "beachImgs/beachImageTen.jpg",
];

const beachFonts = [
      "",
      "Brush Script MT, cursive",
      
      "Comic Sans MS, cursive",
      "American Typewriter, serif"
];

function makeItABeach(){
let index = Math.floor(Math.random() * beachImages.length);
document.body.setAttribute("style", "background-image: url('"+beachImages[index]+"'); background-repeat: no-repeat;background-size: 100% 100%");


// document.body.style.background = "url('"+beachImages[index]+"') no-repeat center center";

//      let beachRandum = Math.floor(Math.random() * beachImages.length);
//      document.body.style.background = "beachImgs/beachImageTen.jpg"
//      body.style = beachImages[beachRandum];
//      beachBtn.style.background = beachImages[beachRandum];


}

beachBtn.addEventListener("click", makeItABeach); 

/*
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      let pix = Math.floor(Math.random() * 80);
      let randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
      let randompix = 'pix'
  //alert(pix);
      document.body.style.backgroundColor = randomRGBA;
      beachBtn.style.backgroundColor = randomRGBA;

*/

//Modal

let modal = document.getElementById("modal");
let modalBtn = document.getElementById("creditInfo");
let span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function(){
      modal.style.display = "block";
};

span.onclick = function(){
      modal.style.display = "none";
};

window.onclick = function(event){
      if(event.target == modal){
            modal.style.display = "none";
      }
};

document.addEventListener("keyup", (event) => {
      if(event.key === "Escape"){
            modal.style.display = "none";
      }
});
