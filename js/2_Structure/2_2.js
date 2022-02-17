const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('Chiffre min. ?'));
let max = new Number(readlineSync.question('Chiffre max. ?'));
let current = new Number(readlineSync.question('Chiffre actuel ?'));
if(current > max)
{
    console.log('Espèce de singe... C\'est pas compliqué à comprendre pourtant...');
}
else if((current > min) && (current < max))
{
    console.log('Votre chiffre se situe entre les 2');
}