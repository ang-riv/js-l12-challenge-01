const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// getting the image
const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);

    // calling the number to get a random number
    selectRandomImage(images);
};

getImage();

const selectRandomImage = function(images){
    // creates a random number for the index in the array that is multiplied by the number of images then rounds down
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);

    const randomImage = images[randomIndex];
    //console.log(randomImage);
}