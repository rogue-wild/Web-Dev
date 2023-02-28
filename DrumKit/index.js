// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }

// or you can write an anonymous function

// document.querySelector("button").addEventListener("click", function (){ 
//     alert("I got CLicked");});


// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);

var drumNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
    this.style.color="white";

    });
} 


// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();