// const firstButton = document.querySelector("#button1");
// const secondButton = document.querySelector("#button2");
// const thirdButton = document.querySelector("#button3");
// const fourthButton = document.querySelector("#button4");
const startGameButton = document.getElementById("startGameButton");
const timer = document.getElementById("#timer");
// var activeQuestion = document.getElementById(".questions");

var gameOver = document.getElementById("#gameOverScreen")

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
        question: "What is the answer to this math problem: (40 + 23 - 83 + 200 + 49 - 51) * 0?",
        options: ["0", "252", "1000", "-1000"],
        answer: "0",
    },
    {
        question: "Game Over!",
    },
]
var currentIndex = 0;
var storedScores = [];
var timeScore = 0;
// hideElements ();
startGameButton.addEventListener("click", function () {
    // showQuestions();
    updateQuestionText();
    // secondQuestion();
    // thirdQuestion();
})


function updateQuestionText() {
    
    // allQuestions[0].style.display = "inline-flex";
    // for (var i = 0; i < allQuestions.length; i++) {

        document.querySelector("#buttonArea").textContent = "";

        var mainQuestion = document.querySelector("#question1");
        mainQuestion.textContent = allQuestions[currentIndex].question;

        for (var i = 0; i < allQuestions[currentIndex].options.length; i++) {
            var questionButton = document.createElement("button");
            
            questionButton.onclick = function() {
                nextQuestion();
            }
            
            questionButton.textContent = allQuestions[currentIndex].options[i];
            document.querySelector("#buttonArea").appendChild(questionButton);
        }
        
}

function nextQuestion () {
    currentIndex++;
    updateQuestionText();
}
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

    