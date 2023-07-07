'use strict';

const randomNumber = Math.trunc(Math.random() * 10) + 1;
let points = 10;

document.querySelector('.check').addEventListener
('click', function () {

    const guessingNumber = Number(document.querySelector('.number-input').value);

    // No Input
    if (!guessingNumber) {

        document.querySelector('.guess-message').
        textContent = 'Input some number!';

    // Player won
    } else if (guessingNumber === randomNumber) {

        document.querySelector('.guess-message').
        textContent = 'Right!';
        points++;
        document.querySelector('.score').textContent = points;

    // Too High
    } else if (guessingNumber > randomNumber) {

        if (points > 1) {
            document.querySelector('.guess-message').textContent =
            'Too much';
            points--;
            document.querySelector('.score').textContent = points;
        } else {
            document.querySelector('.guess-message').textContent =
            'Game Over!';
        }

    // Too low
    } else if (guessingNumber < randomNumber) {

        if (points > 1) {
            document.querySelector('.guess-message').textContent =
            'Too few';
            points--;
            document.querySelector('.score').textContent = points;
        } else {
            document.querySelector('.guess-message').textContent =
            'Game Over!';
            document.querySelector('.score').textContent = 0;
        }

    }
});

