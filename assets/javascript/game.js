//Global Variables
var wins = 0;
var losses = 0;
var userScore = 0;
var generatedScore = 0;
var timeleft = 100;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

//Functions
function checkWin(){
  if (+$("#userScore").text() === +$("#generatedScore").text()) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    setTimeout(function(){alert("You Win!");}, 200);
    //restart game automatically
  };
  if (+$("#userScore").text() > +$("#generatedScore").text()) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    setTimeout(function(){alert("You Lose!");}, 200);
    //restart game automatically
  };

};


//Initialize Game
$(document).ready(function() {

//timer
var downloadTimer = setInterval(function timer(){
    document.getElementById("timer").value = 100 - --timeleft;
    if (timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);

//Generate Score btwn 19-120
var generatedScore = Math.floor((Math.random() * 120) + 1);
$("#generatedScore").append(generatedScore);
console.log("Match: " + generatedScore);

//Generate crystal values btwn 1-12
var crystalOne = Math.floor((Math.random() * 12) + 1);
$("#crystalOne").attr("value", crystalOne);
console.log("Crystal One: " + crystalOne);

var crystalTwo = Math.floor((Math.random() * 12) + 1);
$("#crystalTwo").attr("value", crystalTwo);
console.log("Crystal Two: " + crystalTwo);

var crystalThree = Math.floor((Math.random() * 12) + 1);
$("#crystalThree").attr("value", crystalThree);
console.log("Crystal Three: " + crystalThree);

var crystalFour = Math.floor((Math.random() * 12) + 1);
$("#crystalFour").attr("value", crystalFour);
console.log("Crystal Four: " + crystalFour);


//User Score update
$("#crystalOne").on("click", function(){
  var addOne = +$("#crystalOne").attr("value") + +$("#userScore").attr("value");
  $("#userScore").text(addOne);
  $("#userScore").attr("value", addOne);
  console.log("Your Score is: " + addOne);
  //check win (if userScore = generatedScore)
  checkWin();
});


$("#crystalTwo").on("click", function(){
  var addTwo = +$("#crystalTwo").attr("value") + +$("#userScore").attr("value");
  $("#userScore").text(addTwo);
  $("#userScore").attr("value", addTwo);
  console.log("Your Score is: " + addTwo);
  //check win (if userScore = generatedScore)
  checkWin();
});

$("#crystalThree").on("click", function(){
  var addThree = +$("#crystalThree").attr("value") + +$("#userScore").attr("value");
  $("#userScore").text(addThree);
  $("#userScore").attr("value", addThree);
  console.log("Your Score is: " + addThree);
  //check win (if userScore = generatedScore)
  checkWin();
});

$("#crystalFour").on("click", function(){
  var addFour = +$("#crystalFour").attr("value") + +$("#userScore").attr("value");
  $("#userScore").text(addFour);
  $("#userScore").attr("value", addFour)
  console.log("Your Score is: " + addFour);
  //check win (if userScore = generatedScore)
  checkWin();

});

//Restart button
$("#restartButton").on("click", function() {
  location.reload(true);
});

//Pause button



});
