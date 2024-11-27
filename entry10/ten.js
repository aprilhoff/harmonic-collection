let revealMom = document.querySelector(".mom");

let buttonMom = document.querySelector(".m");

let changeMom = () =>{
    revealMom.classList.toggle("momshow");
}

buttonMom.addEventListener("click",changeMom );

let revealDad = document.querySelector(".dad");
let buttonDad = document.querySelector(".p");
let changeDad = () =>{
    revealDad.classList.toggle("dadshow");
}
buttonDad.addEventListener("click", changeDad);



let revealMomDad = document.querySelector(".momdad");
let buttonMomDad = document.querySelector(".mp");
let changeMomDad = () =>{
    revealMomDad.classList.toggle("momdadshow");
}
buttonMomDad.addEventListener("click", changeMomDad);