var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.round(Math.random() * 3);
  // console.log(randomNumber);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`)
    .fadeOut(250)
    .fadeIn(250);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

  $(".btn").on("click", function(event) {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
  });
}

nextSequence();
