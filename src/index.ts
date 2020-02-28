import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const runSolution = () => {
    rl.question('\n\n\nWhich solution would you like to see the answer for? (ctrl + c to exit) ', (answer) => {
        const formattedAnswer = answer.padStart(3, "0");

        try {
            const solution = require(`./solutions/${formattedAnswer}.ts`);
            solution;
        } catch (err) {
            console.error(`Solution ${formattedAnswer} cannot be found. Please try again.`);
        }

        runSolution();
    })
};

runSolution();