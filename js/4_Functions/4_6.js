const readlineSync = require("readline-sync");

let a = new Number(readlineSync.question('Nombre à factorialiser ?'));

function factorial(a) {
    if (a < 0) 
          return -1;
    else if (a == 0) 
        return 1;
    else {
        return (a * factorial(a - 1));
    }
  }
 
factorial(5);
console.log(factorial(a));
