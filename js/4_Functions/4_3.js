const readlineSync = require("readline-sync");

let $n = new Number(readlineSync.question('Un nombre ?'));
let arr = [];

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
}

multiRand($n);
console.log(arr);