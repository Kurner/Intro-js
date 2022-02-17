const readlineSync = require("readline-sync");

let numberOne = new Number(readlineSync.question('Premier nombre ?'));
let numberTwo = new Number(readlineSync.question('Seconde chiffre ?'));
console.log(Math.trunc(numberOne / numberTwo));