var firstButton = document.querySelector("#button1");
var secondButton = document.querySelector("#button2");
var thirdButton = document.querySelector("#button3");
var fourthButton = document.querySelector("#button4");
var startGameButton = document.querySelector("#startGameButton");
var timer = document.getElementById("#timer");
var activeQuestion = document.getElementById(".questions");

var question1 = "How many feet are in 1500 meters?";
var question2 = "What is the second tallest mountain in the world?";
var question3 = "What is the answer to this math problem: 40 + 23 - 83 * 0 + 200 + 49 - 51?"
var gameOver = document.getElementById("#gameOverScreen")

var allQuestions = [question1, question2, question3, gameOver]
var correctButton = false;

var storedScores = [];
var timeScore = 0;
hideElements ();
startGameButton = document.addEventListener("click", function () {
    showQuestions();
    firstQuestion();
    secondQuestion();
    thirdQuestion();
})

function hideElements () {
    firstButton.style.display = "none";
    secondButton.style.display = "none";
    thirdButton.style.display = "none";
    fourthButton.style.display = "none";
    gameOverText.style.display = "none";
}
function showQuestions() {
   firstButton.style.display = "inline-flex";
   secondButton.style.display = "inline-flex";
   thirdButton.style.display = "inline-flex";
   fourthButton.style.display = "inline-flex";
   startGameButton.style.display = "none";
}

function firstQuestion() {
    activeQuestion = allQuestions[0];
    activeQuestion.style.display = "inline-flex";
    if (activeQuestion = allQuestions[0]) {
        firstButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        secondButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        thirdButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        fourthButton = document.addEventListener("click", function () {
            activeQuestion++;
        }); 
           
    }
}

function secondQuestion() {
    if (activeQuestion = allQuestions[1]) {
        firstButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        secondButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        thirdButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        fourthButton = document.addEventListener("click", function () {
            activeQuestion++;
        }); 
           
    }
}

function thirdQuestion() {
    if (activeQuestion = allQuestions[2]) {
        firstButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        secondButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        thirdButton = document.addEventListener("click", function () {
            activeQuestion++;
        });
            
        fourthButton = document.addEventListener("click", function () {
            activeQuestion++;
        }); 
           
    }
}
// if (activeQuestion = allQuestions[3]) {

// }

// function setScores() {
//     win.textContent = winCounter;
//     localStorage.setItem("scores", scores);
//   }

//   function getScores() {
//     var storedScores = localStorage.getItem("scores");
//     if (storedScores === null) {
//        scoreArray = [];
//     } else {
//       scoreArray = [storedScores];
//     }
//     // win.textContent = winCounter;
//   }
//   function countdown() {
//     var timeCount = 60;
//     timeCount.textContent = timer;
//     var timeInterval = setInterval(function () {
//       if (timeCount > 1) {
//         timer.textContent = timeCount + ' seconds remaining';
//         timeCount--;
//       } else if (timeCount === 1) {
//         timer.textContent = timeCount + ' second remaining';
//         timeCount--;
//       } else {
//         timer.textContent = '';
//       }
      
//     },1000)
// }

    