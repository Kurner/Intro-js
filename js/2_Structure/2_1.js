const readlineSync = require("readline-sync");

let age = new Number(readlineSync.question('Quel est votre age ?'));
if (age > 18)
{
    console.log('You are an adult !');
}
else
{
    console.log('You are a child...');
}
