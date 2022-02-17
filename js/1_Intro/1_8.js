const readlineSync = require("readline-sync");

let numberQuestions = 5;
let job = readlineSync.question('Quelle est votre classe de fantasy ? Q1/5');
let lieu = readlineSync.question('Où etes-vous ? Q2/5');
let enemy = readlineSync.question('Quel ennemi rencontrez vous ? Q3/5');
let attack = readlineSync.question('Comment vous attaque-t-il ? Q4/5');
let death = readlineSync.question('Comment mourrez-vous ? Q5/5');
console.log('Vous etes un ' + job + ' en plein milieu de ' + lieu + ' lorsque vous rencontrez un ' + enemy + ' qui vous attaque en ' + attack + ' vous succombez à cette assaut en ' + death);