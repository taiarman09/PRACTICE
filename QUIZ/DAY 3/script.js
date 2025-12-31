const questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answer: [
            { text: "&lt;script&gt;", currect: true },
            { text: "&lt;scripting&gt;", currect: false },
            { text: "&lt;javascript&gt;", currect: false },
            { text: "&lt;js&gt;", currect: false },
        ]
    },
    {
        question: "Which of the following keyword is used to define a variable in Javascript?",
        answer: [
            { text: "var", currect: false },
            { text: "let", currect: false },
            { text: "Both A & B", currect: true },
            { text: "None of the above", currect: false },
        ]
    },
    {
        question: "What is the result of '5' + 3 in Javascript?",
        answer: [
            { text: "8", currect: false },
            { text: "53", currect: true },
            { text: "15", currect: false },
            { text: "NAN", currect: false },
        ]
    },
    {
        question: "Which function is used to print a message to the console in Javascript?",
        answer: [
            { text: "print()", currect: false },
            { text: "console.log()", currect: true },
            { text: "alert()", currect: false },
            { text: "log()", currect: false },
        ]
    },

]


let currect = 0;
let score = 0;

let questionEle = document.getElementById("question");
let answerbtn = document.getElementById("answer-button");
let nextbtn = document.getElementById("next-btn")


function start() {
    currect = 0;
    score = 0;

    nextbtn.innerHTML = "Next";
    showQuestion()
}


function showQuestion() {
    reset();


    let currectQuestion=questions[currect];
    let questionNo=question+1;

    questionEle.innerHTML=questionNo+". "+currectQuestion.question;

    const button = document.createElement("button");
    button.innerHTML=answer.text
}



function selectanswer(e) {
    const selectedbtn = e.target;
    const isCurrect = selectedbtn.dataset.currect === "true";

    if (isCurrect) {
        selectedbtn.classList.add("currect");
        score++
    } else {
        selectedbtn.classList.add("Incorrect")
    }


    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.currect === "true") {
            button.classList.add("currect")
        }
        button.disabled = true;
    })

    nextbtn.style.display = "block"

}