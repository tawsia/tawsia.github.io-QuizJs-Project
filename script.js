const quizData = [
    {
        question: " How old is  Earth?",
        a : "22000yr",
        b: " 15000yr",
        c: "50000yr",
        d: "33000yr",
        correct: "b",

    }, {
        question : " Which is the best programming language?",
        a : "Python",
        b : "C",
        c : "Java",
        d : "JavaScript",
        correct : "d",
    },{
        question :  " Who is the President of India?",
        a: "Donald Trump",
        b: "Narendra Modi",
        c: "Imran Khan",
        d: "Rahul Gandhi",
        correct : "b",
    },{
       question :" What does HTML stand for ?",
       a: "Hypertext Markup Language",
       b: "Cascading Style Sheet",
       c: "Application Programming Interface",
       d: "Json File",
       correct : "a",


    },{
        question : " In Which year Javascript was launched?",
        a: "2017",
        b: "2013",
        c: "1990",
        d: " None of the Above",
        correct : "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
}
);





