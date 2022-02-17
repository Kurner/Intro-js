const readlineSync = require("readline-sync");

//Attends l'entrée de donnée dans calcSurface pour pouvoir les traiter
function calcSurface($largeur, $hauteur)
{
    //Traite les données récupérées et effecture la formule avant de retourner le résultat
    return (($largeur * $hauteur)/2);
}

//Affiche le résultat de la formule en fonction des données entrées dans calcSurface
console.log(calcSurface(3, 6))