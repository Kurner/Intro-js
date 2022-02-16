const readlineSync = require("readline-sync");

//let userName = readlineSync.question('Can you give me your name please?');
//console.log("Hello " + userName);

// EXERCICE 1.2

//let name = "Fierarh";
//let firstName = "Myreina";
//let city = "Mor Dhona";
//console.log("Hello " + name + " " + firstName + " qui vient de " + city + " !");

// EXERCICE 1.3 - 1.4

//let firstName = readlineSync.question('Quel est ton prénom ?');
//let name = readlineSync.question('Ton nom ?');
//let city = readlineSync.question('Ta ville ?');
//console.log("Hello " + name + " " + firstName + " qui vient de " + city + " !");

//EXERCICE 1.5

//let numberOne = new Number(readlineSync.question('Premier nombre avec décimal ?'));
//let numberTwo = new Number(readlineSync.question('Seconde chiffre avec décimal ?'));
// new Number change les strings en nombre
//console.log(Math.trunc(numberOne * numberTwo));
//Math.trunc enlève la partie décimal d'un nombre)

//EXERCICE 1.6

//let numberOne = new Number(readlineSync.question('Premier nombre ?'));
//let numberTwo = new Number(readlineSync.question('Seconde chiffre ?'));
//console.log(Math.trunc(numberOne / numberTwo));

//EXERCICE 1.7

// let shoesSize = new Number(readlineSync.question('Quelle taille de chaussure ?'));
// let birthday = new Number(readlineSync.question('Votre année de naissance ?'));
// let calcul = ((((shoesSize * 2) + 5)*50)-birthday) + 1766;
// console.log(calcul);

//EXERCICE 1.8

// let numberQuestions = 5;
// let job = readlineSync.question('Quelle est votre classe de fantasy ? Q1/5');
// let lieu = readlineSync.question('Où etes-vous ? Q2/5');
// let enemy = readlineSync.question('Quel ennemi rencontrez vous ? Q3/5');
// let attack = readlineSync.question('Comment vous attaque-t-il ? Q4/5');
// let death = readlineSync.question('Comment mourrez-vous ? Q5/5');
// console.log('Vous etes un ' + job + ' en plein milieu de ' + lieu + ' lorsque vous rencontrez un ' + enemy + ' qui vous attaque en ' + attack + ' vous succombez à cette assaut en ' + death);