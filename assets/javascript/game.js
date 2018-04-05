$(document).ready(function() {
  //Global Variables
  var wins = 0;
  var losses = 0;
  var userScore = 0;
  var generatedScore = 0;
  var timeLeft = 30;
  var gameTimer = null;

  //Functions

  //Initialize Game
  function startGame() {
    userScore = 0;
    $("#userScore").text(userScore);
    $("#userScore").attr("value", userScore);
    generatedScore = null;
    $("#generatedScore").text(generatedScore);
    $("#generatedScore").attr("value", generatedScore);
    var crystalOne = null;
    var crystalTwo = null;
    var crystalThree = null;
    var crystalFour = null;

    //reset timer
    timeLeft = 30;

    //Generate Score btwn 19-120
    var generatedScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $("#generatedScore").append(generatedScore);
    console.log("%c Match: " + generatedScore, 'background: green; color: white; display: block; padding: 0 20% 0 20%;');

    //Generate crystal values btwn 1-12
    var crystalOne = Math.floor((Math.random() * 12) + 1);
    $("#crystalOne").attr("value", crystalOne);
    console.log("%c Crystal One: " + crystalOne, 'background: red; color: white; display: block; padding: 0 20% 0 20%;');

    var crystalTwo = Math.floor((Math.random() * 12) + 1);
    $("#crystalTwo").attr("value", crystalTwo);
    console.log("%c Crystal Two: " + crystalTwo, 'background: purple; color: white; display: block; padding: 0 20% 0 20%;');

    var crystalThree = Math.floor((Math.random() * 12) + 1);
    $("#crystalThree").attr("value", crystalThree);
    console.log("%c Crystal Three: " + crystalThree, 'background: lightblue; color: white; display: block; padding: 0 20% 0 20%;');

    var crystalFour = Math.floor((Math.random() * 12) + 1);
    $("#crystalFour").attr("value", crystalFour);
    console.log("%c Crystal Four: " + crystalFour, 'background: blue; color: white; display: block; padding: 0 20% 0 20%;');


    //Restart button
    $("#restartButton").on("click", function() {
      location.reload(true);
    });

    //Pause button
    $("#pauseButton").on("click", function() {
      alert("Timer Paused...Press Return To Continue!")
    });

  };

  //timer
  var gameTimer = setInterval(timer, 1000);

  function timer() {
    if (timeLeft == 0){
      clearInterval(gameTimer);
      setTimeout(function() {
        alert("Out Of Time! You Lose!");
      }, 100);
      timeLeft == 30;
      losses++;
      document.getElementById("losses").innerHTML = losses;
      startGame();
    }else {
        timeLeft = timeLeft-1;
    $("#timer").html(timeLeft + " Seconds Remaining");
    $("#timer").attr("value", timeLeft);
    }
  };
//});
  timer();


  //check for wins
  function checkWin() {
    if (+$("#userScore").text() === +$("#generatedScore").text()) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      setTimeout(function() {
        alert("You Win!");
      }, 100);
      //restart game automatically
      startGame();

    };
    if (+$("#userScore").text() > +$("#generatedScore").text()) {
      losses++;
      document.getElementById("losses").innerHTML = losses;
      setTimeout(function() {
        alert("You Lose!");
      }, 100);
      //restart game automatically
      startGame();

    };

  };

  //User Score update
  $("#crystalOne").on("click", function() {
    var addOne = +$("#crystalOne").attr("value") + +$("#userScore").attr("value");
    $("#userScore").text(addOne);
    $("#userScore").attr("value", addOne);
    console.log("Your Score is: " + addOne);
    //check win (if userScore = generatedScore)
    checkWin();
  });


  $("#crystalTwo").on("click", function() {
    var addTwo = +$("#crystalTwo").attr("value") + +$("#userScore").attr("value");
    $("#userScore").text(addTwo);
    $("#userScore").attr("value", addTwo);
    console.log("Your Score is: " + addTwo);
    //check win (if userScore = generatedScore)
    checkWin();
  });

  $("#crystalThree").on("click", function() {
    var addThree = +$("#crystalThree").attr("value") + +$("#userScore").attr("value");
    $("#userScore").text(addThree);
    $("#userScore").attr("value", addThree);
    console.log("Your Score is: " + addThree);
    //check win (if userScore = generatedScore)
    checkWin();
  });

  $("#crystalFour").on("click", function() {
    var addFour = +$("#crystalFour").attr("value") + +$("#userScore").attr("value");
    $("#userScore").text(addFour);
    $("#userScore").attr("value", addFour)
    console.log("Your Score is: " + addFour);
    //check win (if userScore = generatedScore)
    checkWin();
  });

  startGame();

});


//notes
//get timer to cause loss
