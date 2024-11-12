
let reveal1 = document.querySelector(".change");
let reveal2 = document.querySelector(".change2");
let reveal3 = document.querySelector(".change3");
let reveal4 = document.querySelector(".change4");
let reveal5 = document.querySelector(".change5");


let buttonYes = document.querySelector("#yes");
let buttonYer = document.querySelector("#yer");
let buttonKrass = document.querySelector("#krass");
let buttonGute = document.querySelector("#gute");
let buttonScholli = document.querySelector("#scholli");

let changeClassYes = () => {
    reveal1.classList.toggle("bye");
}

let changeClassYer = () => {
    reveal2.classList.toggle("nein");
}

let changeClassKrass = () => {
    reveal3.classList.toggle("krass");
}

let changeClassGute = () => {
    reveal4.classList.toggle("gute");
}

let changeClassScholli= () => {
    reveal5.classList.toggle("scholli");
}


buttonYes.addEventListener("click", changeClassYes);
buttonYer.addEventListener("click", changeClassYer);
buttonKrass.addEventListener("click", changeClassKrass);
buttonGute.addEventListener("click", changeClassGute);
buttonScholli.addEventListener("click", changeClassScholli);