const readlineSync = require("readline-sync");

let numberOne = new Number(readlineSync.question('Premier nombre avec décimal ?'));
let numberTwo = new Number(readlineSync.question('Seconde chiffre avec décimal ?'));
//new Number change les strings en nombre
console.log(Math.trunc(numberOne * numberTwo));
//Math.trunc enlève la partie décimal d'un nombre)