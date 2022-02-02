const quizData = [
    {
        question: " 1. HTML is a  ?",
        a: "Scripting language",
        b: "Programming language",
        c: "Markup language",
        d: "Network language",
        correct: "c",
    },
    {
        question: "2. Which tag is used for bold?",
        a: "<body>",
        b: "<bold>",
        c: "<Strong>",
        d: "<break>",
        correct: "b",
    },
    {
        question: "3. Which of them is not a datatype in Javascript ?",
        a: "Undefined",
        b: "Boolean",
        c: "Float",
        d: "Number",
        correct: "a"  
    },
    {
        question: "4. Which tag is used to write the Javascript code?",
        a: "<sp>",
        b: "<script",
        c: "<javascript>",
        d: "<java>",
        correct: "b"
    },
    {
        question: "5. What of them is a ternary operator?",
        a: "?*",
        b: "?:",
        c: ">?",
        d: "<?",
        correct: "b"
    },
    {
        question: "6. Who develop react.js?",
        a: "Apple",
        b: "Facebook",
        c: "Twitter",
        d: "Google",
        correct: "b"
    },
    {
        question: "7. React js is a?",
        a: "User interface layer in an application",
        b: "Data layer in an application",
        c: "Both A and B",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "8. Which of them is a  state in React js?",
        a: "A permanent storage",
        b: "Internal storage of the component",
        c: "Both A and B",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "9. Everything in react is ?",
        a: "Model",
        b: "Method",
        c: "Package",
        d: "Component",
        correct: "d"
    },
    {
        question: "10. React component can return how many components ?",
        a: "One",
        b: "Two",
        c: "Multiple",
        d: "Three",
        correct: "c"
    },

];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");

const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// const e_text = document.getElementById("e_text");

const submitButton = document.getElementById("buttons");
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
    // e_text.innerText = currentQuizData.e;
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
            <h2>You answered ${score}/${quizData.length} questions correctly <br> Did you want to try again </h2>
        <button onclick= "history.go(0)" Did you want to try again</button>
      ` }
    }
});