const readlineSync = require("readline-sync");

// EXERCICE 2.1

// let age = new Number(readlineSync.question('Quel est votre age ?'));
// if (age > 18)
// {
//     console.log('You are an adult !');
// }
// else
// {
//     console.log('You are a child...');
// }

// EXERCICE 2.2

// let min = new Number(readlineSync.question('Chiffre min. ?'));
// let max = new Number(readlineSync.question('Chiffre max. ?'));
// let current = new Number(readlineSync.question('Chiffre actuel ?'));
// if(current > max)
// {
//     console.log('Espèce de singe... C\'est pas compliqué à comprendre pourtant...');
// }
// else if((current > min) && (current < max))
// {
//     console.log('Votre chiffre se situe entre les 2');
// }

// EXERCICE 2.3

// let numbers = 1;
// while (numbers <= 100)
// {
//     if(numbers %2 == 0)
//     {
//         console.log(numbers);             
//     }    
//     numbers++;
// }

// EXERCICE 2.4

// let numbers = 1;
// while (numbers <= 100)
// {
//     if(numbers %2 == 0)
//     {
//         console.log(numbers/2)
//     }
//     else
//     {
//         console.log(numbers*3)
//     }
//     numbers++
// }

// EXERCICE 2.5

// let numberAsk = new Number(readlineSync.question('Your favorite number ?'));
// while (numberAsk != 42)
// {
//     console.log('Are you sure ?')
//     numberAsk = new Number(readlineSync.question('Your favorite number ?'));
// }

// EXERCICE 2.6

// let number = readlineSync.question('Un chiffre entre 1 et 7 ? ');
// switch (number)
// {
//     case "1" :
//         console.log('Lundi');
//         break;
//     case "2" :
//         console.log('Mardi');
//         break;
//     case "3" : 
//         console.log('Mercredi');
//         break;
//     case "4" :
//         console.log('Jeudi');
//         break;
//     case "5" :
//         console.log('Vendredi');
//         break;
//     case "6" :
//         console.log('Samedi');
//         break;
//     case "7" :
//         console.log('Dimanche');
//         break;
//     default :
//         console.log('Vous avez du mal à comprendre hein...')
// }

// EXERCICE 2.7

// let i = 0;
// let n = 0;
// let nSomme = 0;
// while ( i < 3)
// {
//     n = new Number(readlineSync.question('Donne un chiffre là... '));
//     nSomme += n;
//     i++; 
// }
// console.log(nSomme);



