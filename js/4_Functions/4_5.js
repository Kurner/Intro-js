const readlineSync = require("readline-sync");

function calcDistance(x1, x2, y1, y2)
{
    let y = x2 - x1;
    let x = y2 - y1;
        
    return (Math.sqrt(x * x + y * y));
}

let x1 = new Number(readlineSync.question('Coordoonnée X du premier point: '));
let y1 = new Number(readlineSync.question('Coordoonnée Y du premier point: '));

let x2 = new Number(readlineSync.question('Coordoonnée X du second point: '));
let y2 = new Number(readlineSync.question('Coordoonnée Y du second point: '));

console.log(calcDistance(x1, x2, y1, y2));