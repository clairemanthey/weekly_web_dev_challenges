const cats = [
    {
        name: 'Ruby',
        thumbnail: 'imgs/beagleOne.jpg',
        lnk: 'https://www.pawschicago.org/',
    },
     {
        name: 'Jasper',
        thumbnail: 'imgs/beagleTwo.jpg',
        lnk: 'https://www.gotbeagles.org/',
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'Cricket',
        thumbnail: 'imgs/beagleThree.jpg',
        lnk: 'https://beagle.rescueme.org/Illinois',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    }
];

const main = document.querySelector("main");

cats.forEach( cat => {
   let box = document.createElement("div");
   box.classList.add("catProfile");

   let image = document.createElement("img");
   image.setAttribute("src", cat.thumbnail);
   image.setAttribute("class", "profilePic");
   box.appendChild(image);

   let name = document.createElement("h2");
   let txt = document.createTextNode(cat.name);
   name.appendChild(txt);
   box.appendChild(name);

   let connect = document.createElement('a');
   connect.textContent = "Connect";
   connect.setAttribute("href", cat.lnk);
   connect.setAttribute("target", "_blank");
   connect.setAttribute("class", "connect");
   box.appendChild(connect);


   main.appendChild(box);
});