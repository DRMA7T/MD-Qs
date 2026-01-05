let score = 0;
let answeredQuestions = 0;

function selectOption(option, selectedNumber) {
    const question = option.parentElement;
    if (question.classList.contains("answered")) return;

    const correctAnswer = question.getAttribute("data-answer");
    const options = question.querySelectorAll(".option");

    options.forEach(opt => opt.classList.add("disabled"));

    if (selectedNumber == correctAnswer) {
        option.classList.add("correct");
        score++;
    } else {
        option.classList.add("wrong");
        options[correctAnswer - 1].classList.add("correct");
    }

    question.classList.add("answered");
    answeredQuestions++;
    // Show explanation
    const explanation = question.querySelector(".explanation");
    if (explanation) explanation.style.display = "block";

    // Check how many answered qsuestions
    const totalQuestions = document.querySelectorAll(".question").length;
    if (answeredQuestions === totalQuestions) {
        showScore(totalQuestions);
    }
}

function showScore(totalQuestions) {
    const scoreBox = document.getElementById("scoreBox");
    scoreBox.style.display = "block";
    scoreBox.innerHTML = `Your Score: ${score} / ${totalQuestions}`;
}
