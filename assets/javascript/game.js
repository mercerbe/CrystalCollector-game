//Global Variables
var wins = 0;
var losses = 0;
var userScore = 0;
var generatedScore = 0;
var minScore = 19;
var maxScore = 120;
var timeleft = 100;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;


//HTML
//document.getElementById("wins").innerHTML = wins;
//document.getElementById("losses").innerHTML = losses;
//document.getElementById("userScore").innerHTML = userScore;
//document.getElementById("generatedScore").innerHTML = generatedScore;



//Functions



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
$(".playButtonArea").on("click", "#crystalOne", function(){

});


//check win (if userScore = generatedScore)
if (userScore === generatedScore) {
  document.getElementById("wins").innerHTML = wins;
  setTimeout(function(){alert("You Win!");}, 300);
  wins++;
} else if (userScore > generatedScore) {
  document.getElementById("losses").innerHTML = losses;
  setTimeout(function(){alert("You Lose!");}, 300);
  losses++;
}

//Restart button
$("#restartButton").on("click", function() {
  location.reload(true);

});


});
