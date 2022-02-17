const readlineSync = require("readline-sync");

let i = 0;
let n = 0;
let nSomme = 0;
while ( i < 3)
{
    n = new Number(readlineSync.question('Donne un chiffre là... '));
    nSomme += n;
    i++; 
}
console.log(nSomme);


