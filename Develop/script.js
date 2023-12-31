
var startGameButton = document.getElementById("startGameButton");
var timer = document.getElementById("timer");
var scoresList = document.querySelector("#scoresListButton");
var mainQuestion = document.querySelector("#question1");

// Adds questions object.
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
        question: "Game Over! Enter Initials For Your Score Then Press Enter!",
        options: []

    },
]
// Set up quiz variables.
var currentIndex = 0;
var storedScores = [];

var correctAnswers = 0;

var timeLeft = 30;
timer.textContent = timeLeft + " seconds remaining";

var initialsValue = null;

// The start game button which starts the timer, and displays questions.
startGameButton.addEventListener("click", function () {
    timerCountdown();
    updateQuestionText();
    clear();
    scoresList.style.display = "none";
})

// The function for the logic of the questions being right or wrong.
function updateQuestionText() {
    document.querySelector("#buttonArea").textContent = "";
    mainQuestion.style.display = "";
    mainQuestion.textContent = allQuestions[currentIndex].question;
    for (var i = 0; i < allQuestions[currentIndex].options.length; i++) {
        var questionButton = document.createElement("button");

        questionButton.textContent = allQuestions[currentIndex].options[i];

        document.querySelector("#buttonArea").appendChild(questionButton);
        questionButton.addEventListener("click", function (event) {
            var element = event.target;
            if (element.textContent === allQuestions[currentIndex].answer) {
                nextQuestion();
                correctAnswers++;
            } else {
                nextQuestion();
                timeLeft = timeLeft - 5;
            }
        })
    }

}
// The function for moving on to the next question.
function nextQuestion() {
    if (allQuestions[currentIndex].question === "Game Over! Enter Initials For Your Score Then Press Enter!") {
        return
    }
    currentIndex++;
    updateQuestionText();
}


// The function for the timer.
function timerCountdown() {
    timeLeft = 30;
    timeLeft--;
    var timeInterval = setInterval(function () {
        if (allQuestions[currentIndex].question === "Game Over! Enter Initials For Your Score Then Press Enter!") {
            timer.textContent = timeLeft + " Your Time Score";

            document.querySelector("#buttonArea").textContent = "";

            currentIndex = 0;

            clearInterval(timeInterval);

            var score = document.getElementById("score");
            score.textContent = correctAnswers + "/3 Correct Answers";
            score.style.display = "";
            getUserInitials();



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

            currentIndex = 0;

            clearInterval(timeInterval);

            var score = document.getElementById("score");
            score.textContent = correctAnswers + "/3 Correct Answers";
            getUserInitials();

        }
    }, 1000);
}

// The scores list button that displays the past scores.
scoresList.addEventListener("click", function () {
    viewPastScores();
    clear();
});
document.getElementById("reset").addEventListener("click", function () {
    window.location.reload();
});
// View the past scores function.
function viewPastScores() {
    timer.textContent = "";
    document.querySelector("#buttonArea").innerHTML = "";
    startGameButton.style.display = "none";

    mainQuestion.innerHTML = "";
    currentIndex = 0;
    var scoresSheet = document.getElementById("scoreSheet");
    var scoresSheetArrayValue = JSON.parse(localStorage.getItem("Stored Scores"));
    if (scoresSheetArrayValue !== "") {
        for (var i = 0; i < scoresSheetArrayValue.length; i++) {
            var element = document.createElement("p");
            element.textContent = scoresSheetArrayValue[i].name + ", " + scoresSheetArrayValue[i].time + " Time Left, " + scoresSheetArrayValue[i].score + "/3 Questions Correct";
            scoresSheet.appendChild(element);
        }
    }
}

// The function for saving the user initials and time to local storage.
function saveToLocalStorage() {

    const oldScores = JSON.parse(localStorage.getItem("Stored Scores")) || []
    var highScores = {
        name: initialsValue,
        score: " " + correctAnswers,
        time: " " + timeLeft,
    }
    oldScores.push(highScores);
    console.log(oldScores);
    localStorage.setItem("Stored Scores", JSON.stringify(oldScores));

}

function clear() {
    score.style.display = "none";
    startGameButton.style.display = "none";
}
// The function for promting and saving the users initials.
function getUserInitials() {
    var userInitials = document.createElement("input");
    var quizArea = document.getElementById("quizArea");
    quizArea.appendChild(userInitials);
    userInitials.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            initialsValue = userInitials.value
            saveToLocalStorage();
            clear();
            correctAnswers = 0;
            quizArea.removeChild(userInitials);
            mainQuestion.style.display = "none";
            startGameButton.style.display = "";
            startGameButton.textContent = "Play Again?";
            scoresList.style.display = "";
        }
    })
}