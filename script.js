const quizQuestions = [
    {
        question: "Which of the following is considered the first line of defense in the immune system?",
        options: ["Antibodies", "Skin and mucous membranes", "T cells", " B cells"],
        correctAnswer: "Skin and mucous membranes"
    },
    {
        question: "What is the main function of antibodies?",
        options: ["To digest pathogens", "To bind to antigens and neutralize them", " To produce red blood cells", "To destroy host cells"],
        correctAnswer: "To bind to antigens and neutralize them"
    },
    {
        question: "Which type of cell is primarily responsible for the production of antibodies?",
        options: ["Macrophages", "B cells", "T cells", "Neutrophils"],
        correctAnswer: "B cells"
    },
    {
        question: "What is the role of helper T cells in the immune response?",
        options: ["They produce antibodies", "They phagocytize pathogens", "They activate other immune cells", "They kill infected cells"],
        correctAnswer: "They activate other immune cells"
    },
    {
        question: "Which of the following is an example of a physical barrier in the immune system?",
        options: ["White blood cells", "Stomach acid", "Skin", "Antibodies"],
        correctAnswer: "Skin"
    },
    {
        question: "What is the primary function of the spleen in the immune system?",
        options: [" Producing antibodies", "Filtering blood and removing old red blood cells", "Producing T cells", "Destroying pathogens in the intestines"],
        correctAnswer: "Filtering blood and removing old red blood cells"
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector("#question");
const optionsContainer = document.querySelector("#options-container");
const resultElement = document.querySelector("#result");
const scoreElement = document.querySelector("#score");

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    updateScoreDisplay();
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`;
    }

    updateScoreDisplay();

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        setTimeout(() => {
            resultElement.textContent = "";
            displayQuestion();
        }, 2700);
    } else {
        setTimeout(showFinalScore, 2700);
    }
}

function updateScoreDisplay() {
    scoreElement.textContent = `Current Score: ${score} out of 6`;
}

function showFinalScore() {
    questionElement.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    resultElement.textContent = "";
    scoreElement.textContent = `Final Score: ${score} out of ${quizQuestions.length}`;
}

displayQuestion();