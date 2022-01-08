// JavaScript source code
const quizData = [{
    question: "How old is florin",
    a: "10",
    b: "17",
    c: "26",
    d: "50",
    correct: "c"
},
{
    question: "what's the best programming language",
    a: "java",
    b: "c",
    c: "python",
    d: "javaScript",
    correct: "a"
},
{
    question: "who is the president of the US",
    a: "Florin pop",
    b: "Donald trump",
    c: "Ivan saldano",
    d: "Mihai anderi",
    correct: "b"
},
{
    question: "what HTML stand for",
    a: "hyper text markup language",
    b: "cascading style sheet",
    c: "jason",
    d: "Application programming interface",
    correct: "a"
},
{
    question: "what year was javaScript launched",
    a: "2020",
    b: "2019",
    c: "2018",
    d: "non of above",
    correct: "d"
}
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("sub");
const answers = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
let currentQuiz = 0;
let score = 0;
let current_ques = 0;
let answer = undefined;
loadQuiz();
function loadQuiz() {
    deSelect();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData;
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuiz++;
    
};
function getSelected() {
    console.log("hello");
    
    let answer = undefined;
    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
        return answer;
    });
    
}
function deSelect() {
    answers.forEach((answerEl) => {
        answerEl.checked = false;
    });
};
submitBtn.addEventListener("click", () => {
    //check to see the answer 
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
    }
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly</h2> ${score}/${quizData.length} questions 
        <button onclick = "location.reload()">إعادة المحاولة </button>`
;
    }
    }
);
    
   

    
    
    
   
