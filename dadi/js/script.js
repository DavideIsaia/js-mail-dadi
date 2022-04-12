// generare un numero random da 1 a 6, sia per il giocatore sia per il computer
const userDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log("Il dado del giocatore è", userDice);

const pcDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log("Il dado del computer è", pcDice);

// stabilire il vincitore, in base a chi fa il punteggio più alto
let result;
if (userDice > pcDice) {
    result = "Hai vinto!";
} else if (userDice < pcDice) {
    result = "Hai perso!";
} else if (userDice == pcDice) {
    result = "Pareggio!";
}

// stampo il risultato
console.log(result);