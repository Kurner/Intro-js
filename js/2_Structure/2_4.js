const readlineSync = require("readline-sync");

let numbers = 1;
while (numbers <= 100)
{
    if(numbers %2 == 0)
    {
        console.log(numbers/2)
    }
    else
    {
        console.log(numbers*3)
    }
    numbers++
}