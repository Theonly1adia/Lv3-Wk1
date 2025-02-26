const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctNumber = 3;
let attempts = 3;

function askQuestion() {
    rl.question(`Guess the number between 1 and 10. You have ${attempts} attempts left: `, (guess) => {
        const userGuess = parseInt(guess);

        if (userGuess === correctNumber) {
            console.log("Congratulations! You guessed the correct number!");
            rl.close();
        } else {
            attempts--;
            if (attempts > 0) {
                console.log(`Incorrect! You have ${attempts} attempts left.`);
                askQuestion();  // Prompt again for another guess
            } else {
                console.log("Sorry, you lose! The correct number was " + correctNumber);
                rl.close();
            }
        }
    });
}

askQuestion();  // Start the game
