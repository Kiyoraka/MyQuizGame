// assets/js/quiz.js
class Quiz {
    constructor(topic) {
        switch(topic) {
            case 'html':
                this.questions = htmlQuestions;
                break;
            case 'css':
                this.questions = cssQuestions;
                break;
            case 'js':
                this.questions = jsQuestions;
                break;
            case 'erd':
                this.questions = erdQuestions;
                break;
            case 'dfd':
                this.questions = dfdQuestions;
                break;
            case 'php':
                this.questions = phpQuestions;
                break;
            case 'sql':
                this.questions = sqlQuestions;
                break;
            default:
                this.questions = htmlQuestions;
        }
        
        this.score = 0;
        this.currentQuestion = 0;
        const activePanel = document.querySelector('.content-panel.active');
        this.quizContainer = activePanel.querySelector('.quiz-container');
        this.sounds = {
            correct: new Audio('assets/sound/Correct.wav'),
            incorrect: new Audio('assets/sound/Wrong.wav')
        };
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
                <div class="result-overlay">
                    <div class="feedback-text"></div>
                    <div class="correct-answer" style="display: none;"></div>
                </div>
            </div>
        `;

        this.quizContainer.innerHTML = questionHTML;

        const options = this.quizContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', (e) => this.handleAnswer(e));
        });
    }

    handleAnswer(event) {
        const button = event.target;
        const isCorrect = button.getAttribute('data-correct') === 'true';
        
        // Disable all options and highlight correct answer
        const options = this.quizContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = true;
            if (option.getAttribute('data-correct') === 'true') {
                option.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
                option.style.color = '#00ff00';
            }
        });

        // Show result and play sound
        this.showResult(isCorrect);

        if (isCorrect) {
            this.score++;
            button.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
            button.style.color = '#00ff00';
        } else {
            button.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            button.style.color = '#ff0000';
        }

        // Move to next question or show final score after 5 seconds
        setTimeout(() => {
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.renderQuestion();
            } else {
                this.showFinalScore();
            }
        }, 5000);
    }

    showResult(isCorrect) {
        const sound = isCorrect ? this.sounds.correct : this.sounds.incorrect;
        sound.currentTime = 0;
        sound.play();

        const feedbackElement = this.quizContainer.querySelector('.feedback-text');
        feedbackElement.textContent = isCorrect ? 'CORRECT!' : 'INCORRECT!';
        feedbackElement.className = 'feedback-text ' + (isCorrect ? 'correct' : 'incorrect');
        feedbackElement.style.display = 'block';

        setTimeout(() => {
            feedbackElement.style.display = 'none';
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

document.addEventListener('DOMContentLoaded', () => {
    const htmlTopic = document.getElementById('topic1');
    if (htmlTopic.classList.contains('active')) {
        new Quiz('html');
    }
});