// assets/js/quiz.js
class Quiz {
    constructor(topic) {
        // Set questions based on topic
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
        
        // Get the active panel's quiz container
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
        
        // Create question container
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
                </div>
            </div>
        `;

        // Clear previous content
        this.quizContainer.innerHTML = questionHTML;

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
        const options = this.quizContainer.querySelectorAll('.option');
        options.forEach(option => option.disabled = true);

        // Show result and play sound
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
        // Play the appropriate sound
        const sound = isCorrect ? this.sounds.correct : this.sounds.incorrect;
        sound.currentTime = 0; // Reset sound to start
        sound.play();

        // Show feedback text
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

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    const htmlTopic = document.getElementById('topic1');
    if (htmlTopic.classList.contains('active')) {
        new Quiz('html');
    }
});