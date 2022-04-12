// riempio un array
const eMail = ["spiderman@boolean.it", "ironman@boolean.it", "blackpanther@boolean.it", "wonderwoman@boolean.it", "batman@boolean.it", "hulk@boolean.it", "thor@boolean.it"];
console.log(eMail);

// chiedo all’utente la sua e-mail
const userMail = prompt("Inserisci la tua email (esempio@boolean.it)");
console.log(userMail);

// controllo che sia presente nell'array
let mailFound = false;
for (let i = 0; i < eMail.length; i++) {
    const thisMail = eMail[i];
    if (thisMail === userMail) {
        mailFound = true;
    }
}
console.log("Qualcuna delle email nell'array coincide con la mia?", mailFound);

// stampo un messaggio finale fuori dal ciclo for
if ( mailFound === true ) {
    console.log("Benvenuto, puoi accedere!");
    alert ("Benvenuto, puoi accedere!");
} else {
    console.log("Spiacente, credenziali non valide.");
    alert ("Spiacente, credenziali non valide.");
}