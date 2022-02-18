const readlineSync = require("readline-sync");

let serie = {};

function randomizeCast(afficheSerie)
{
    let stockActor = afficheSerie.cast;

    stockActor.sort(() => Math.random() - 0.5);

    let randomList = stockActor;
    return randomList;
}

function askTvSerie()
{
    let name = readlineSync.question('Nom du film ? ');
    let year = readlineSync.question('Année de création ? ');
    let cast = readlineSync.question('Acteurs du film ? ');

    serie.name = name;
    serie.year = year
    //.split() permet de séparer des chaines de caractères en fonction du caractère désigner (ici, un espace)
    serie.cast = cast.split(' ');

    //.stringify() permet de convertir une valeur JS en chaine JSON, les valeurs permettent de rentre un rendu plus visible/pretty
    var afficheSerie = JSON.stringify(serie, null, 6);
    return serie;
}

console.log(randomizeCast(askTvSerie()));