const readlineSync = require("readline-sync");


let arr = [];

function arraySort(arr)
{
    let fini = false;
    while(!fini)
    {   
        fini = true;
        for(let i = 0; i < arr.length; i++)
        {
            let temp = 0;
            if(arr[i] > arr[i+1])
            {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                fini = false;
            }

        }      
    }      
    return arr;
}


let numberArray = [13,5,7,23,1,0];
console.log(arraySort(numberArray));