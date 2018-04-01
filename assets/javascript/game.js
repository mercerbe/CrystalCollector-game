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
console.log(generatedScore);

//Generate crystal values btwn 1-12
var crystalOne = Math.floor((Math.random() * 12) + 1);
$("#crystalOne").attr("value")

//User Score update

//check win (if userScore = generatedScore)


//Restart button
$("#restartButton").on("click", function() {
  location.reload(true);

});


});
