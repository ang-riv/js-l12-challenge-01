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

const selectRandomImage = function(images){
    // creates a random number for the index in the array that is multiplied by the number of images then rounds down
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);

    const randomImage = images[randomIndex];
    console.log(randomImage);

    // shows the image along with the author text
    
    displayImage(randomImage);
    
};

const displayImage = function(randomImage) {
    // select the author property from the randomImage object
    const author = randomImage.author;
    //console.log(author);

    const imageAddress = randomImage.download_url;
    //console.log(imageAddress);

    // now manipulating DOM elements
    authorSpan.innerText = author;
    img.setAttribute("src", imageAddress);

    // show the image container
    imgDiv.classList.remove("hide");
};

// click event
button.addEventListener("click", function(){
    // program won't retrieve the data until the button is pressed!
    getImage();
});

