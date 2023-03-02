var gamePattern = [];

var gameLevel = 1;
var buttonColours = ["green", "red", "yellow", "blue"];


function nextSequence() {
  var randomNumber = Math.random() * 3;
  randomNumber = Math.round(randomNumber);

  return randomNumber;
}

var randomChosenColor = buttonColours[randomNumber];

gamePattern.push(randomChosenColor);

$(document).keypress(function () {
  $("#level-title").text("Level " + gameLevel);
});
