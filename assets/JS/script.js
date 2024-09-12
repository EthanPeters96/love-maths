// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    // get all the buttons in the HTML and store them in the variable buttons
    for (let button of buttons) {
        // loop through all the buttons and add an event listener to them
        button.addEventListener("click", function () {
            // add an event listener to the button that listens for a click
            if (this.getAttribute("data-type") === "submit") {
                // if the button clicked has a data-type of submit, alert "You clicked Submit!"
                alert("You clicked Submit!"); // alert "You clicked Submit!" when the button is clicked
            } else {
                // if the button clicked does not have a data-type of submit, alert "You clicked [gameType]"
                let gameType = this.getAttribute("data-type"); // get the data-type of the button clicked and store it in the variable gameType
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // Creates two random numbers between 1 and 25 and stores them in variables
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "divide") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}
