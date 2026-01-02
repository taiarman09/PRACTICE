const questions = [
    {
        question: "HTML ka full form kya hai?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlink Text Markup", correct: false },
            { text: "Home Tool Markup", correct: false }
        ]
    },
    {
        question: "CSS ka use kis liye hota hai?",
        answers: [
            { text: "Logic ke liye", correct: false },
            { text: "Structure ke liye", correct: false },
            { text: "Styling ke liye", correct: true },
            { text: "Database ke liye", correct: false }
        ]
    }
];

const questionEl = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
    answered = false;
    nextBtn.disabled = true;
    answerBtn.innerHTML = "";

    const q = questions[currentQuestion];
    questionEl.innerText = q.question;

    q.answers.forEach(ans => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = ans.text;
        btn.dataset.correct = ans.correct;

        btn.addEventListener("click", selectAnswer);

        li.appendChild(btn);
        answerBtn.appendChild(li);
    });
}

function selectAnswer(e) {
    if (answered) return;   // ✅ ek hi baar select
    answered = true;

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    // ✅ sab buttons disable + correct answer green
    Array.from(answerBtn.children).forEach(li => {
        const btn = li.firstChild;
        btn.disabled = true;

        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
    });

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.innerText = `Your Score: ${score} / ${questions.length}`;
    answerBtn.innerHTML = "";
    nextBtn.innerText = "Restart";

    nextBtn.onclick = () => {
        currentQuestion = 0;
        score = 0;
        nextBtn.innerText = "Next";
        showQuestion();
    };
}

showQuestion();
