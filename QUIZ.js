const quizData = [
    {
        question: " 1. Which Language runs in a  web browser?",
        a: "java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "2. What does CSS stand for?",
        a: "Central style sheet",
        b: "Cascading Style Sheet",
        c: "Cascading special sheet",
        d: "Cars suvs sailboat",
        correct: "b",
    },
    {
        question: "3. What does HTML Stands fro?",
        a: "hypertext markup language",
        b: "hypertext markdown language",
        c: "hyperloop markup language",
        d: "hypertext markside language",
        correct: "a"  
    },
    {
        question: "4. What year was javascript lunched?",
        a: "1996",
        b: "1995",
        c: "1997",
        d: "2005",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");

const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");

const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElements) => {
        if (answerElements.checked) answer = answerElements.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
};
loadQuiz ();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onClick= "history.go(0)" Did you want to  again</button>
      ` }
    }
});