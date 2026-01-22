let questions = [
    {
        prompt: "PAST OR PRESENT NAME A FAMOUS DAD",
        answers: [
            { text: "GOD", points: 31 },
            { text: "DANNY TANNER", points: 20 },
            { text: "BANDIT HEELER", points: 17 },
            { text: "GEORGE WASHINGTON", points: 13 },
            { text: "DARTH VADER", points: 11 },
            { text: "FATHER TIME", points: 8 }
        ]
    },
    {
        prompt: "NAME SOMETHING A GOLFER MIGHT BLAME HIS BAD SHOT ON",
        answers: [
            { text: "WIND", points: 29 },
            { text: "CLUBS/EQUIPMENT", points: 25 },
            { text: "GRASS/COURSE", points: 19 },
            { text: "SUN IN EYES", points: 13 },
            { text: "DISTRACTED BY PARTNER", points: 8 },
            { text: "HAVEN'T PLAYED IN A WHILE", points: 6 }
        ]
    },
    {
        prompt: "NAME A HOUSE YOU WOULD NEVER WANT TO LIVE IN",
        answers: [
            { text: "DOGHOUSE", points: 26 },
            { text: "BIG HOUSE/JAIL", points: 23 },
            { text: "HAUNTED HOUSE", points: 21 },
            { text: "OUTHOUSE", points: 14 },
            { text: "SMALL HOUSE", points: 11 },
            { text: "GLASS HOUSE", points: 5 },
        ]
    }
];

// Load custom questions from localStorage
const savedQuestions = localStorage.getItem('customQuestions');
if (savedQuestions) {
    questions = questions.concat(JSON.parse(savedQuestions));
}

let currentQuestion = 0;
let teams = { team1: { name: 'Team 1', score: 0 }, team2: { name: 'Team 2', score: 0 } };

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.prompt;

    for (let i = 0; i < 6; i++) {
        document.getElementById(`answer${i+1}`).textContent = "_____";
    }
}

function revealAnswer(index) {
    const q = questions[currentQuestion];
    const answer = q.answers[index];
    document.getElementById(`answer${index+1}`).textContent =
        `${answer.text} - ${answer.points}`;
}

document.querySelectorAll(".reveal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index);
        revealAnswer(index);
    });
});

document.querySelectorAll(".award-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index);
        const team = btn.dataset.team;
        awardPoints(index, team);
    });
});

function awardPoints(index, team) {
    const q = questions[currentQuestion];
    const points = q.answers[index].points;
    teams[team].score += points;
    updateScoreDisplay();
    // Disable award buttons for this answer
    document.querySelectorAll(`.award-btn[data-index="${index}"]`).forEach(b => b.disabled = true);
}

document.getElementById("next-question").addEventListener("click", () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    loadQuestion();
});

// Setup game
document.getElementById("start-game").addEventListener("click", () => {
    const team1Name = document.getElementById("team1-name").value || 'Team 1';
    const team2Name = document.getElementById("team2-name").value || 'Team 2';
    teams.team1.name = team1Name;
    teams.team2.name = team2Name;
    updateScoreDisplay();
    document.getElementById("setup-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
});

function updateScoreDisplay() {
    document.getElementById("team1-display").textContent = teams.team1.name;
    document.getElementById("team1-score").textContent = teams.team1.score;
    document.getElementById("team2-display").textContent = teams.team2.name;
    document.getElementById("team2-score").textContent = teams.team2.score;
}

// Toggle add question form
document.getElementById("add-question-btn").addEventListener("click", () => {
    document.getElementById("add-question-container").style.display = "block";
    document.getElementById("game-container").style.display = "none";
});

document.getElementById("cancel-add").addEventListener("click", () => {
    document.getElementById("add-question-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
});

// Handle form submission
document.getElementById("add-question-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const prompt = document.getElementById("new-prompt").value;
    const answers = [];
    for (let i = 1; i <= 6; i++) {
        const text = document.getElementById(`answer${i}-text`).value;
        const points = parseInt(document.getElementById(`answer${i}-points`).value);
        answers.push({ text, points });
    }
    questions.push({ prompt, answers });
    saveQuestions();
    document.getElementById("add-question-form").reset();
    document.getElementById("add-question-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
});

function saveQuestions() {
    const customQuestions = questions.slice(3); // Save only custom ones, keep defaults
    localStorage.setItem('customQuestions', JSON.stringify(customQuestions));
}

loadQuestion();