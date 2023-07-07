// const firstButton = document.querySelector("#button1");
// const secondButton = document.querySelector("#button2");
// const thirdButton = document.querySelector("#button3");
// const fourthButton = document.querySelector("#button4");
var startGameButton = document.getElementById("startGameButton");
var timer = document.getElementById("timer");
var scoresList = document.querySelector("#scoresList");
var gameOver = document.getElementById("#gameOverScreen")
var mainQuestion = document.querySelector("#question1");
// var dataIndex = document.querySelector("")
var allQuestions = [
    {
        question: "How many feet are in 1500 meters?",
        options: ["4756", "1000", "N/A", "4921"],
        answer: "4921",
    },
    {
        question: "What is the second tallest mountain in the world?",
        options: ["Everest", "Kilimanjaro", "K2", "Coyola"],
        answer: "K2",
    },
    {
        question: "Solve for x: (40 + 200 + 49 - 51) * 0 = x",
        options: ["0", "252", "1000", "-1000"],
        answer: "0",
    },
    {
        question: "Game Over!",
        options: []

    },
]
var currentIndex = 0;
var storedScores = [];

var timeLeft = 30;
timer.textContent = timeLeft + " seconds remaining";

startGameButton.addEventListener("click", function () {
    timerCountdown();
    updateQuestionText();
    startGameButton.style.display = "none";
})


function updateQuestionText() {
    
        document.querySelector("#buttonArea").textContent = "";
        mainQuestion.textContent = allQuestions[currentIndex].question;
        for (var i = 0; i < allQuestions[currentIndex].options.length; i++) {
            var questionButton = document.createElement("button");
            
            questionButton.textContent = allQuestions[currentIndex].options[i];

            document.querySelector("#buttonArea").appendChild(questionButton);
            questionButton.addEventListener("click", function (event) {
                var element = event.target;
                if (element === allQuestions[currentIndex].answer) {
                    nextQuestion();
                } else {
                    nextQuestion();
                    timeLeft = timeLeft - 5;
                }
            })
            console.log(allQuestions[currentIndex].options)
        }
        
}

function nextQuestion () {
    if (allQuestions[currentIndex].question === "Game Over!") {
        return
    }
    currentIndex++;
    updateQuestionText();
}



function timerCountdown () {
timeLeft = 30;
timeLeft--;
var timeInterval = setInterval(function () {
    if (allQuestions[currentIndex].question === "Game Over!") {
        timer.textContent = timeLeft;
        document.querySelector("#buttonArea").textContent = "";
        startGameButton.style.display = "";
        startGameButton.textContent = "Play Again?";
        currentIndex = 0;
        clearInterval(timeInterval);
    } else if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;

    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;

    } else {
      timer.textContent = "Times Up!";
      mainQuestion.textContent = allQuestions[allQuestions.length - 1].question;
      document.querySelector("#buttonArea").textContent = "";
      startGameButton.style.display = "";
      startGameButton.textContent = "Play Again?";
      currentIndex = 0;
      clearInterval(timeInterval);
    }
  }, 1000);
}

// questionButton.setAttribute("data-index", i);
// questionButton.id = i;

// document.querySelector()
        // questionButton.addEventListener = ("click", function (event) {
        //     var element = event.target;
        //     if (element === allQuestions[currentIndex].answer) {
        //         nextQuestion();
        //     } else {
        //         nextQuestion();
        //         timeLeft = timeLeft - 5
        //     }
        // })

// for (var i = 0; i < storedScores.length; i++) {
//     var currentScore = storedScores[i];

//     var li = document.createElement("li");
//     li.textContent = currentScore;
//     li.setAttribute("data-index", i);

//     scoresList.appendChild(li);
//   }
  
//   scoreButton.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       todos.splice(index, 1);
  
//       // Store updated todos in localStorage, re-render the list
//       renderScoresList();
//     }
// });

// function saveToLocalStorage () {
//     localStorage.setItem("Stored Scores", JSON.stringify(storedScores));

// }
// function renderScoresList () {

// }

// if (questionButton.onclick != allQuestions[currentIndex].answer) { 
            //     timeLeft = timeLeft - 5;
            //     nextQuestion();
            // } else {
            //     nextQuestion
            // console.log(questionButton)
            // console.log(questionButton.textContent)

// function playAgain () {
//     if (allQuestions[currentIndex].question = "Game Over!") {
//         var playAgainButton = document.createElement("button");
//         document.querySelector("#buttonArea").appendChild(playAgainButton);
//         playAgainButton.textContent = "Play Again?";
        
//         playAgainButton.onclick = function () {
//             timerCountdown();
//             updateQuestionText();
//             startGameButton.style.display = "none";
//         }
//     }
// }


// function hideElements () {
//     firstButton.style.display = "none";
//     secondButton.style.display = "none";
//     thirdButton.style.display = "none";
//     fourthButton.style.display = "none";
//     gameOverText.style.display = "none";
// }
// function showQuestions() {
//    firstButton.style.display = "inline-flex";
//    secondButton.style.display = "inline-flex";
//    thirdButton.style.display = "inline-flex";
//    fourthButton.style.display = "inline-flex";
//    startGameButton.style.display = "none";
// }

// This fuction iterates to the next question when it's called


// function secondQuestion() {
//     if (activeQuestion = allQuestions[1]) {
//         firstButton = document.addEventListener("click", function () {
//             allQuestions++;
//         });
            
//         secondButton = document.addEventListener("click", function () {
//             allQuestions++;
//         });
            
//         thirdButton = document.addEventListener("click", function () {
//             allQuestions++;
//         });
            
//         fourthButton = document.addEventListener("click", function () {
//             allQuestions++;
//         }); 
           
//     }
// }

// function thirdQuestion() {
//     if (activeQuestion = allQuestions[2]) {
//         firstButton = document.addEventListener("click", function () {
//             allQuestions++;
//         });
            
//         secondButton = document.addEventListener("click", function () {
//             allQuestions++;
//         });
            
//         thirdButton = document.addEventListener("click", function () {
//             allQuestions++;
//         });
            
//         fourthButton = document.addEventListener("click", function () {
//             allQuestions++;
//         }); 
           
//     }
// }
// firstButton = document.addEventListener("click", function () {
        //     firstButton.textContent = allQuestions[currentIndex];
        //     currentIndex++;
        //     questionTest();
        // });
            
        // secondButton = document.addEventListener("click", function () {
        //     allQuestions++;
        // });
            
        // thirdButton = document.addEventListener("click", function () {
        //     allQuestions++;
        // });
            
        // fourthButton = document.addEventListener("click", function () {
        //     allQuestions++;
        // }); 
    // }
    // if (activeQuestion = allQuestions[0]) {
        // firstButton = document.addEventListener("click", function () {
        //     allQuestions++;
        // });
            
        // secondButton = document.addEventListener("click", function () {
        //     allQuestions++;
        // });
            
        // thirdButton = document.addEventListener("click", function () {
        //     allQuestions++;
        // });
            
        // fourthButton = document.addEventListener("click", function () {
        //     allQuestions++;
        // }); 
           
    // }
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

    