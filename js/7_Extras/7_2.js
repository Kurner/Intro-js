const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Donne un chiffre : '))
let nextTerm;
let n1 = 0;
let n2 = 1;

function fibonacci(){
   
    nextTerm = n1 + n2;

    while(n >= nextTerm)
    {
        console.log(nextTerm);

        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }

    return nextTerm;
}

console.log(fibonacci());