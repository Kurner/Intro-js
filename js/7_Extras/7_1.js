const readlineSync = require("readline-sync");

function random()
    {
        let numberToGuess = Math.floor(Math.random() * 101);
        return numberToGuess;
        console.log(numberToGuess);
    }


function guess(numberToGuess)
{
    
    let numberPlayer = new Number(readlineSync.question('Donner un chiffre : '))

    while(numberPlayer != numberToGuess)
    {
        if(numberPlayer > numberToGuess)
        {
            numberPlayer = new Number(readlineSync.question('Trop grand : '))
        }
        else if(numberPlayer < numberToGuess)
        {
            numberPlayer = new Number(readlineSync.question('Trop petit : '))
        }
    }

    if(numberPlayer == numberToGuess)
    {
        console.log("Bien joué !")
    }
}

guess(random());