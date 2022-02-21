const readlineSync = require("readline-sync");


function divisors()
{
    let n = new Number(readlineSync.question('Un chiffre positif : '));

    while(n <= 0)
    {
        n = new Number(readlineSync.question('ON A DIT POSITIF : '));
    }

    let divisors = [];
    for(let i = 2; i<n; i++)
    {
        if(n % i === 0)
        {
            divisors.push(i);
        }
    }
    return divisors.length > 1 ? divisors : `${n} is a prime number`
}

console.log(divisors())