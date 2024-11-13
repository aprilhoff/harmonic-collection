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


// let buttonColor = document.querySelector("#blue");
// let mainButton = document.querySelector(".button")

// let newColor = ()=> {
//     buttonColor.classList.toggle("bluebutton")
// }

// buttonColor.addEventListener("click", newColo)

let blueButton = document.querySelector("#blue");
let mainButton = document.querySelector("#mainButton");

let newButton = () =>{
    mainButton.classList.toggle("bluebutton")
}
blueButton.addEventListener("click",newButton)



let redButton = document.querySelector("#red");

let mainRedButton = document.querySelector("#mainButton");

let newRedButton = () =>{
    mainRedButton.classList.toggle("redbutton")
}
redButton.addEventListener("click",newRedButton)
