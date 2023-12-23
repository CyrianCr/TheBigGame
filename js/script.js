let out = document.getElementById("sortie");
let interval; // Define interval outside so it can be cleared and reset
let timerInitialized = false; // To ensure the timer starts only once
let but = document.getElementById("timer");

// Function to start or reset the timer
function startTimer() {
    clearInterval(interval); // Clear any existing intervals
    let timeLeft = 10; // Reset time to 10 seconds
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;

    interval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(interval);
            alert('Temps écoulé ! Faites un choix rapidement la prochaine fois.');
            // Reset the game or prompt the user to restart/try again
            timerInitialized = false; // Allow the timer to be started again if necessary
        }
    }, 1000); // update every second
}

function handleChoiceClick() {
    // Start or reset the timer when a valid choice is made
    if (this.getAttribute("class") === "valid") {
        startTimer();
        this.style.backgroundColor = "green";
    } else if (this.getAttribute("class") === "false") {
        this.style.backgroundColor = "red";
        out.innerHTML = "BOUUUUUUUH GROS BEBE"; // Update the message for a wrong choice
        var audio = new Audio('./img/prout.mp3');
        audio.play();
        clearInterval(interval); // Stop the timer as the game is over
        // Consider additional game-over logic here
        timerInitialized = false; // Allow the timer to be started again if necessary
    }
}

// Attach the choice click handler to each choice element
for (let i = 1; i <= 10; i++) {
    let choice = document.getElementById(`choix${i}`);
    choice.addEventListener("click", handleChoiceClick);
}

// Start the timer when 'sortie' is clicked for the first time
but.addEventListener('click', function() {
    if (!timerInitialized) {
        startTimer();
        timerInitialized = true; // Prevents re-initialization until the game resets
    }
});
