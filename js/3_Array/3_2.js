const readlineSync = require("readline-sync");

let arr1 = [1,2,3,4,5];
let arr2 = [100,101,102];

let somme1 = 0;
let somme2 = 0;

let length1 = arr1.length;
let length2 = arr2.length;

for (let elem of arr1)
{
    somme1 += elem;
}
for (let elem of arr2)
{
    somme2 += elem;
}

console.log(somme1 / length1);
console.log(somme2 / length2);