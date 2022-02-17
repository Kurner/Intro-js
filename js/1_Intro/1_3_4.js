const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Quel est ton prénom ?');
let name = readlineSync.question('Ton nom ?');
let city = readlineSync.question('Ta ville ?');
console.log("Hello " + name + " " + firstName + " qui vient de " + city + " !");