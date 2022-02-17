const readlineSync = require("readline-sync");

let shoesSize = new Number(readlineSync.question('Quelle taille de chaussure ?'));
let birthday = new Number(readlineSync.question('Votre année de naissance ?'));
let calcul = ((((shoesSize * 2) + 5)*50)-birthday) + 1766;
console.log(calcul);