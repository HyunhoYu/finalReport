const images = [
    "airjordan.jpg",
    "crosswalk.jpg",
   
    "add2.avif",
    "The man.jpg",
    "greek.jpg",
    "add1.avif",
    "add3.avif",
    "add4.avif",
    "add5.avif"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./${chosenImage}`;

document.body.appendChild(bgImage);
