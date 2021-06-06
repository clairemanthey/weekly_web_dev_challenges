// In this challenge, I want you to create a Dashboard for all our films. Each film should be
// displayed in our browser, in a box of its own with an image of the film of your choice, similar // to how it would
// look on Netflix.
// Please solve this using the film array, as this is an array exercise. Do not hardcode the names,
// even though it might be tempting!

const films = [
    {
		title: 'Jaws',
		pic: "https://upload.wikimedia.org/wikipedia/en/e/eb/JAWS_Movie_poster.jpg",
		lnk: "https://www.imdb.com/title/tt0073195/?ref_=fn_al_tt_1",
	},
	{
	    title: 'Alien',
		pic: "https://images-na.ssl-images-amazon.com/images/I/41VReP3cJoL._AC_.jpg",
		lnk: "https://www.imdb.com/title/tt0078748/?ref_=fn_al_tt_1",
	},
	{
		title: 'Bad Santa',
		pic: "https://images-na.ssl-images-amazon.com/images/I/51fj4yO9bKL._AC_.jpg",
		lnk: "https://www.imdb.com/title/tt0307987/?ref_=fn_al_tt_1",
	},
	{
		title: 'Casablanca',
		pic: "https://m.media-amazon.com/images/I/61-UNGpgYLL._AC_.jpg",
		lnk: "https://www.imdb.com/title/tt0034583/?ref_=nv_sr_srsg_0",
	},
	{
		title: 'Ghost',
		pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Ghost_%281990_movie_poster%29.jpg",
		lnk: "https://www.imdb.com/title/tt0099653/?ref_=fn_al_tt_1",
	},
	{
		title: 'Twister',
		pic: "https://upload.wikimedia.org/wikipedia/en/a/a5/Twistermovieposter.jpg",
		lnk: "https://www.imdb.com/title/tt0117998/?ref_=fn_al_tt_1",
	},
	{
		title: 'Legally Blonde',
		pic: "https://images-na.ssl-images-amazon.com/images/I/81DSXEfOZUL._RI_.jpg",
		lnk: "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
	},
	{
		title: 'Elf',
		pic: "https://flxt.tmsimg.com/assets/p32828_p_v10_am.jpg",
		lnk: "https://www.imdb.com/title/tt0319343/?ref_=fn_al_tt_1",
 	},	
	{
		title: 'Zoolander',
		pic: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Movie_poster_zoolander.jpg/220px-Movie_poster_zoolander.jpg",
		lnk: "https://www.imdb.com/title/tt0196229/?ref_=fn_al_tt_1",
	}
];
// your code goes here
//variables
const main = document.querySelector("main");

  films.forEach( film =>{
	  let box = document.createElement("div");
	  box.classList.add("movie-item");
	
  	  let title = document.createElement("h3");
	  let txt = document.createTextNode(film.title);
	  title.appendChild(txt);
	  box.appendChild(title);
	
  	  let image = document.createElement("img");
	  image.setAttribute("src", film.pic);
  	  box.appendChild(image);
	  
  	  let createLnk = document.createElement("a");
      createLnk.textContent = "imdb";
	  createLnk.setAttribute("href", film.lnk);
	  createLnk.setAttribute("target", "_blank");
	  createLnk.setAttribute("id", "hl");
	  box.appendChild(createLnk);

	  //not working
  
      main.appendChild(box) 
 });



// hint: use a for loop to create the boxes and add information to them.

//level up:
//1. Are you able to add your own personal rating to each film card too?
// let lnk = title.link(films.lnk);
// box.appendChild(lnk);
