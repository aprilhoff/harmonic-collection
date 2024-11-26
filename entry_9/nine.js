let showText = document.querySelector(".textone");
let buttonClick = document.querySelector(".one");

let changeClass = () => {
    showText.classList.toggle("textshow"); 
};

buttonClick.addEventListener("click", changeClass);



let showTextTwo = document.querySelector(".texttwo");
let buttonClickTwo = document.querySelector(".two");
let changeClassTwo = () => {
    showTextTwo.classList.toggle("texttwoshow")
};
buttonClickTwo.addEventListener("click", changeClassTwo)



let showTextThree = document.querySelector(".textthree");
let buttonClickThree = document.querySelector(".three");
let changeClassThree = () => {
    showTextThree.classList.toggle("textthreeshow")
};
buttonClickThree.addEventListener("click", changeClassThree)


let showTextFour = document.querySelector(".textfour");
let buttonClickFour = document.querySelector(".four");
let changeClassFour = () => {
    showTextFour.classList.toggle("textfourshow")
};
buttonClickFour.addEventListener("click", changeClassFour)


let showTextFive = document.querySelector(".textfive");
let buttonClickFive = document.querySelector(".five");
let changeClassFive = () => {
    showTextFive.classList.toggle("textfiveshow")
};
buttonClickFive.addEventListener("click", changeClassFive)
