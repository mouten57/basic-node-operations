const commands = require('./commands.js')

//prompt user for input
process.stdout.write('prompt > ');

//stdin 'data' event triggers after user types a line
process.stdin.on('data', (userInput) => {
    userInput = userInput.toString().trim();
    //evaluateCmd is a function which will be implemented in commands.js
    commands.evaluateCmd(userInput);
});