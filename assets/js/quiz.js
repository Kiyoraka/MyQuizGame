// assets/js/quiz.js
class Quiz {
    constructor() {
        this.questions = htmlQuestions; // Updated to use htmlQuestions
        this.score = 0;
        this.currentQuestion = 0;
        this.quizContainer = document.querySelector('.quiz-container');
        this.init();
    }

    init() {
        this.renderQuestion();
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        
        const questionHTML = `
            <div class="question" id="question${this.currentQuestion + 1}">
                <h3>${this.currentQuestion + 1}. ${question.question}</h3>
                <div class="options">
                    ${question.options.map(option => `
                        <button class="option" data-correct="${option.correct}">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Clear previous content except score display and result overlay
        const scoreDisplay = this.quizContainer.querySelector('.score-display');
        const resultOverlay = this.quizContainer.querySelector('.result-overlay');
        this.quizContainer.innerHTML = '';
        if (scoreDisplay) this.quizContainer.appendChild(scoreDisplay);
        if (resultOverlay) this.quizContainer.appendChild(resultOverlay);

        // Add new question
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = questionHTML;
        this.quizContainer.insertBefore(tempDiv.firstElementChild, resultOverlay);

        // Add event listeners to new options
        const options = this.quizContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', (e) => this.handleAnswer(e));
        });
    }

    handleAnswer(event) {
        const button = event.target;
        const isCorrect = button.getAttribute('data-correct') === 'true';
        
        // Disable all options for current question
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.disabled = true);

        // Show result image
        this.showResult(isCorrect);

        // Update score if correct
        if (isCorrect) {
            this.score++;
        }

        // Move to next question or show final score
        setTimeout(() => {
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.renderQuestion();
            } else {
                this.showFinalScore();
            }
        }, 2000);
    }

    showResult(isCorrect) {
        const resultImage = document.getElementById('resultImage');
        resultImage.src = isCorrect ? 'assets/img/correct.png' : 'assets/img/wrong.png';
        resultImage.style.display = 'block';

        setTimeout(() => {
            resultImage.style.display = 'none';
        }, 1500);
    }

    showFinalScore() {
        this.quizContainer.innerHTML = `
            <div class="score-display">
                <h3>Your Score: ${this.score}/${this.questions.length}</h3>
            </div>
        `;
    }
}

// Initialize quiz when HTML topic is active
document.addEventListener('DOMContentLoaded', () => {
    const htmlTopic = document.getElementById('topic1');
    if (htmlTopic.classList.contains('active')) {
        new Quiz();
    }
});

// Initialize quiz when switching to HTML topic
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        if (item.getAttribute('data-topic') === '1') {
            new Quiz();
        }
    });
});