var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Mayank",
    score: 3,
  },

  {
    name: "Atul",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "1. How many different categories does Monica have for her towels?",
  answer: "11"
}, {
  question: "2. What juice flavor did Ross burst on his first date with Rachel?",
  answer: "Crane Grape"
},
{
  question: "3. Which of Joey's sisters did Chandler fool around with?",
  answer: "Mary Angela"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " let's see if you know F.R.I.E.N.D.S");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();