// Remember: You rock! 🎸
//api https://foodish-api.herokuapp.com/images/dessert


document.getElementById("btn").addEventListener("click", function() {
    fetch('https://foodish-api.herokuapp.com/api/images/dessert')
    .then(response => response.json())
    .then(photo => {
        document.getElementById("dessert").src = photo.image;
    })
})

document.getElementById("btn").addEventListener("click", function(){
	document.getElementById("dessertTxt").innerHTML = "Does it look good?";
})
