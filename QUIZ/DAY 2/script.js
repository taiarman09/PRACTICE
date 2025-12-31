

// question and answer
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


// question answer and next button catch up id 

const questionEle = document.getElementById("question");
const answerbtn = document.getElementById("answer-button")
const nextbtn = document.getElementById("next-btn")


// currect answer and score value 0 se start

let currect = 0;
let score = 0

// function banaya hai start ka iske under currect and score ki value 0 and show question ko call karaya 
function start() {
    currect = 0
    score = 0
    nextbtn.innerHTML = "Next"
    showQuestion();
}
    
//  showfunction me reset function ko pahle call karaya

function showQuestion() {
    resetState()

    let currectQuestion = questions[currect]
    let questionNo = currect + 1;
    questionEle.innerHTML = questionNo + ". " + currectQuestion.question;
    currectQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerbtn.appendChild(button)
        if (answer.currect) {
            button.dataset.currect = answer.currect;
        }
        button.addEventListener("click", selectanswer)
    })
}


function selectanswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.currect === "true";

    // users option select kare usko color green and red me 

    if (isCorrect) {
        selectedbtn.classList.add("currect")
        score++
    }
    else {
        selectedbtn.classList.add("inCurrect")
    }

    // multiple option select nahi thay 
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.currect === "true") {
            button.classList.add("currect")
        }
        button.disabled = true;
    })
    nextbtn.style.display = "block"

}


// reset function me net btn none and while me option shoe hote hai 
function resetState() {
    nextbtn.style.display = "none"

    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild)
    }
}

start()


function showscore() {
    resetState();

    questionEle.innerHTML = `You scored ${score} out  of ${questions.length}`
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block"
}


function handlebtn() {
    currect++;
    if (currect < questions.length) {
        showQuestion()
    }
    else {
        showscore()
    }
}


nextbtn.addEventListener("click", () => {
    if (currect < questions.length) {
        handlebtn()
    }
    else {
        start()
    }
})



