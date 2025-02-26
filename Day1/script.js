const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your name?", (inputName) => {
    rl.question("What is your favorite movie?", (inputMovie) => {
        console.log(`Hello, ${inputName}! I think ${inputMovie} is a great movie!`);
        rl.close();
    });
    
});