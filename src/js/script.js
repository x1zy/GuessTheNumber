'use strict';

const originalHearts = document.querySelector('.hearts').innerHTML;
let randomNumber = Math.trunc(Math.random() * 10) + 1;
let points = 0;
let highscore = 0;
let life = 3;

function removeLastHeart() {
    const hearts = document.querySelectorAll('.hearts img.heart');
    const lastHeart = hearts[hearts.length - 1];

    if (lastHeart) {
        lastHeart.parentNode.removeChild(lastHeart);
    }
}

function showGameOverModal() {
    const modal = document.querySelector('.modal');
    const modalScore = document.querySelector('.modal-score');
    const modalHighscore = document.querySelector('.modal-highscore');

    modalScore.textContent = points;
    modalHighscore.textContent = highscore;
    modal.style.display = 'block';
}

function resetGame() {
    randomNumber = Math.trunc(Math.random() * 10) + 1;
    points = 0;
    life = 3;

    document.querySelector('.score').textContent = points;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.guess-message').textContent = 'Start guessing!';
    document.querySelector('.number-input').value = '';

    const heartContainer = document.querySelector('.hearts');
    heartContainer.innerHTML = originalHearts;
}


document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);

    // No Input
    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Input some number!';
        return;
    }

    // Player won
    if (guessingNumber === randomNumber) {
        document.querySelector('.guess-message').textContent = 'Right!';
        points++;
        document.querySelector('.score').textContent = points;
        if (points > highscore) {
            highscore = points;
            document.querySelector('.highscore').textContent = highscore;
        }
        return;
    }

    // Too High or Too Low
    document.querySelector('.guess-message').textContent = (guessingNumber > randomNumber) ? 'Too much' : 'Too few';
        life--;
        points--;
    document.querySelector('.score').textContent = points;

    if (life > 0) {
        removeLastHeart();
    } else {
        document.querySelector('.guess-message').textContent = 'Game Over!';
        document.querySelector('.score').textContent = points;
        removeLastHeart();
        showGameOverModal();
    }
});

document.querySelector('.modal-replay').addEventListener('click', function() {
    resetGame();
    document.querySelector('.modal').style.display = 'none';
});

resetGame();




