const readlineSync = require("readline-sync");

let arr1 = [1,2,3,4,5];

let arrMin = Math.min(...arr1);
let arrMax = Math.max(...arr1);
console.log(arrMin, arrMax);
