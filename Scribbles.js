
// Working code example for user input
// For my code I will include an 'exit' code word to exit the console input (readline.close()?)
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });

  */
const prompt = require('prompt-sync')();
 
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);