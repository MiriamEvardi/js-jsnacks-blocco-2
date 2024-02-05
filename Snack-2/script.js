//Genera un numero casuale tra 1 e 100
let randomNumber = Math.floor(Math.random() * 100 + 1);

let guessNumber;
let userAttempt = 0;

do {
    // e poi chiedi all'utente di indovinare il numero.
    guessNumber = prompt("Indovina il numero da 1 a 100");

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {

        alert("Inserisci un numero valido!");

    } else {
        userAttempt++;
    }

    if (guessNumber > randomNumber) {
        //Il programma poi deve far comparire un messaggio "il numero è troppo alto"
        alert("Il numero è troppo alto, riprova");

    } else if (guessNumber < randomNumber) {
        //oppure "il numero è troppo basso"
        alert("Il numero è troppo basso, riprova");

    } else {
        //Quando l'utente trova il numero, fateglielo sapere!
        alert("Hai indovinato!");
    }

    //il ciclo si ripete finchè il numero dell'utente non è uguale al numero random
} while (userAttempt !== randomNumber);