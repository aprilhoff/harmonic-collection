let button = document.querySelector(".button");
let images = [
    "images/one.png",
    "images/two.png",
    "images/three.png",
    "images/four.png",
    "images/fixe.png",
    "images/six.png",
    "images/seven.png",
];
let body = document.querySelector("body");


let newBackground = () => {
    let randomIndex = Math.floor(Math.random() *images.length);
    let randomImage = images[randomIndex];
    body.style.backgroundImage = `url(${randomImage})`;
};

button.addEventListener("click", newBackground);