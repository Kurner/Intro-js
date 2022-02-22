const readlineSync = require("readline-sync");


let pizza = [];


function choixMenu()
{
    let choix = readlineSync.question((`Please choose your actions:

1 - List all the pizza flavors
2 - Add a new pizza flavor
3 - Remove a pizza flavor
4 - Exit this program

Enter your action's number:`));

    switch(choix)
    {
        case '1':
            listPizza();
            break;
        case '2':
            addPizza();
            break;
        case '3':
            removePizza();
            break;
        case '4':
            leave();
            break;
    }
}

function listPizza()
{
    if(pizza.length == 0)
    {
       console.log('Aucune pizza sur le menu pour le moment'); 
       return choixMenu();
    }
    else for(let i in pizza)
    {
        console.log(pizza[i]);
        return choixMenu();
    }
}

function addPizza()
{
    let pizzaAdd = readlineSync.question('Quelle pizza voulez-vous rajouté ? ');
    pizza.push(pizzaAdd);
    return choixMenu();
}

function removePizza()
{
    for(let i in pizza)
    {
        console.log(pizza[i]);
    }

    let pizzaDelete = new Number(readlineSync.question('Quelle pizza voulez-vous enlevé ? '));
    pizza.splice(pizzaDelete);
    return choixMenu();    
}

function leave()
{
    console.log('A la prochaine !')
}

// if(choix == 1)
// {
//     if(pizza.length == 0)
//     {
//        console.log('Aucune pizza sur le menu pour le moment'); 
//        return choixMenu();
//     }
//     else for(let i in pizza)
//     {
//         console.log(pizza[i]);
//         return choixMenu();
//     }
    
// }
// else if(choix == 2)
// {
//     let pizzaAdd = readlineSync.question('Quelle pizza voulez-vous rajouté ? ');
//     pizza.push(pizzaAdd);
//     return choixMenu();
// }
// else if(choix == 3)
// {
//     for(let i in pizza)
//     {
//         console.log(pizza[i]);
//         return choixMenu();
//     }

//     let pizzaDelete = new Number(readlineSync.question('Quelle pizza voulez-vous enlevé ? '));
//     pizza.splice(pizzaDelete);
//     return choixMenu();
// }
// else if(choix == 4)
// {
//     console.log('A la prochaine !')
// }

choixMenu();