var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).on("keypress", function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
  }
  started = true;
});

function nextSequence() {
  level += 1;
  $("#level-title").text(`level ${level}`);
  var randomNumber = Math.round(Math.random() * 3);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`)
    .fadeOut(250)
    .fadeIn(250);

  playSound(randomChosenColor);

  $(".btn").on("click", function(event) {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
  });
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function() {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}
