const readlineSync = require("readline-sync");

let $n = new Number(readlineSync.question('Un nombre ?'));
let arr = [];

function min(arr)
{
    return minArr = Math.min.apply(Math, arr);        
}

function max(arr)
{
    return maxArr = Math.max.apply(Math, arr);
}

function average(arr)
{
    var somme = 0;
    for (let elem of arr)
    {
        somme += elem
    }
    return avg = (somme/arr.length);
}

function multiRand($n)
{
    while($n > 0)
    {
        function rand10()
        {
            return Math.floor(Math.random() * 10);
        }

        arr.push(rand10());
        $n--;
    }

    let result = [average(arr), min(arr), max(arr)];
    return result;
}

multiRand($n);
console.log(multiRand());