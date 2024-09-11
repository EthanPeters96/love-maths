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
                alert(`You clicked ${gameType}`);
            } // alert "You clicked [gameType]" when the button is clicked
        });
    }
});

function runGame() {}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}
