// var number1 = Math.random();
// var number2 = Math.random();

// number1 = Math.floor((number1 * 6) + 1);
// number2 = Math.floor((number2 * 6) + 1);

// if(number1===1){
//     document.querySelector(".play1").src ="images/dice1.png";
// }
// else if(number1 ===2){
//     document.querySelector(".play1").src ="images/dice2.png";
// }
// else if(number1 ===3){
//     document.querySelector(".play1").src ="images/dice3.png";
// }
// else if(number1 ===4){
//     document.querySelector(".play1").src ="images/dice4.png";
// }
// else if(number1 ===5){
//     document.querySelector(".play1").src ="images/dice5.png";
// }
// else{
//     document.querySelector(".play1").src ="images/dice6.png";
// }

// if(number2===1){
//     document.querySelector(".play2").src ="images/dice1.png";
// }
// else if(number2 ===2){
//     document.querySelector(".play2").src ="images/dice2.png";
// }
// else if(number2 ===3){
//     document.querySelector(".play2").src ="images/dice3.png";
// }
// else if(number2 ===4){
//     document.querySelector(".play2").src ="images/dice4.png";
// }
// else if(number2 ===5){
//     document.querySelector(".play2").src ="images/dice5.png";
// }
// else{
//     document.querySelector(".play2").src ="images/dice6.png";
// }


// if(number1 > number2){
//     document.querySelector("h1").textContent ="Player1 wins";
// }
// else if(number2 > number1){
//     document.querySelector("h1").textContent ="Player2 wins";
// }
// else{
//     document.querySelector("h1").textContent ="It's a Draw";
// }

var number1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + number1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var number2 = Math.floor(Math.random()*6) + 1;

var randomImage2Src = "images/dice" + number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2Src);

if(number1 > number2){
        document.querySelector("h1").textContent ="Player1 wins🚩";
    }
    else if(number2 > number1){
        document.querySelector("h1").textContent ="Player2 wins🚩";
    }
    else{
        document.querySelector("h1").textContent ="It's a Draw🎌";
    }