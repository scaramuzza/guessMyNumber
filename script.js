'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number😎";
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let hightScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        displayMessage("⛔ Type a number!");

        // when player wins
    } else if (guess == secretNumber) {
        displayMessage("🦉 Congratulations!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;

        if (score > hightScore) {
            hightScore = score;
            document.querySelector(".highscore").textContent = hightScore;
        };

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too Hight!" : "Too Low!");
            score = score - 1; // score--
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lose the game!");
            document.querySelector(".score").textContent = 0;
        };
    };
});

document.querySelector(".again").addEventListener("click", againFunction);

function againFunction() {
    location.reload();
};



