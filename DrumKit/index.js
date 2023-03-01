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

//Detecting button press
var drumNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color="white";
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Listening to the keypress event
/*In this case when the document or the entire web site page detects a key press then the document will call this function. 
Now when that happens we can get it to send us some information that it will only know once the event happens namely say which
button was clicked or which keyboard key was pressed. 
*/
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
//    var activeButton = document.querySelector("."+ currentKey).classList.toggle("pressed");
var activeButton = document.querySelector("."+ currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);

}
// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
