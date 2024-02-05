//Genera un numero casuale tra 1 e 100
let randomNumber = Math.floor(Math.random() * 100 + 1);
const buttonElement = document.querySelector("button");

let userAttempt = 0;


buttonElement.addEventListener('click',
    function () {
        do {
            // e poi chiedi all'utente di indovinare il numero.
            let guessNumber = Number(document.getElementById("userGuess").value);
            let messageElement = document.getElementById("message");

            if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {

                messageElement.innerText = "Inserisci un numero valido!";

            } else {
                userAttempt++;
            }

            if (guessNumber > randomNumber) {
                //Il programma poi deve far comparire un messaggio "il numero è troppo alto"
                messageElement.innerText = "Il numero è troppo alto. Riprova.";

            } else if (guessNumber < randomNumber) {
                //oppure "il numero è troppo basso"
                messageElement.innerText = "Il numero è troppo basso. Riprova.";

            } else {
                //Quando l'utente trova il numero, fateglielo sapere!
                messageElement.innerText = "Hai indovinato!";
            }

            //il ciclo si ripete finchè il numero dell'utente non è uguale al numero random
        } while (userAttempt !== randomNumber);
    }
)
