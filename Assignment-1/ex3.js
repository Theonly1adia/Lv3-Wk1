const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctNumber = Math.floor(Math.random() * 10) + 1;  
let attempts = 3;

function guessNumber() {
    rl.question(`Guess the number between 1 and 10. You have ${attempts} attempts left: `, (guess) => {
        const userGuess = parseInt(guess);

        if (userGuess === correctNumber) {
            console.log("Congratulations! You guessed the correct number!");
            rl.close();
        } else {
            attempts--;
            if (attempts > 0) {
                console.log(`Incorrect! You have ${attempts} attempts left.`);
                guessNumber();  // Prompt again for another guess
            } else {
                console.log("Sorry, you lose! The correct number was " + correctNumber);
                rl.close();
            }
        }
    });
}

guessNumber();  
