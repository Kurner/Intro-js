const readlineSync = require("readline-sync");

let numberAsk = new Number(readlineSync.question('Your favorite number ?'));
while (numberAsk != 42)
{
    console.log('Are you sure ?')
    numberAsk = new Number(readlineSync.question('Your favorite number ?'));
}