const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let colorsArray = []; 

rl.question("What is your name? ", (inputName) => {
    rl.question("What is your first favorite color? ", (color1) => {
        colorsArray.push(color1);
        rl.question("What is your second favorite color? ", (color2) => {  
            colorsArray.push(color2);
            rl.question("What is your third favorite color? ", (color3) => {  
                colorsArray.push(color3);
                console.log(`Hi, ${inputName}! Your favorite colors are:`);

                
                for (let i = 0; i < colorsArray.length; i++) {
                    console.log(`${i + 1}. ${colorsArray[i]}`);
                }

                rl.close();
            });
        });
    });
});
