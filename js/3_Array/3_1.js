const readlineSync = require("readline-sync");

let arr1 = [1,2,3,4,5];
let arr2 = [100,101,102];
let arrSomme = 0;
let arrSomme2 = 0;

for (let arr of arr1)
{
    arrSomme += arr;
}
for (let arr of arr2)
{
    arrSomme2 += arr;
}
console.log(arrSomme);
console.log(arrSomme2);
