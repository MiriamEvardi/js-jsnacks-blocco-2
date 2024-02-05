//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo.

let userNumber = Number(prompt("Inserisci un numero o più numeri fino a raggiungere o superare 50"));
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click",
    function () {
        if (!isNaN(userNumber)) {
            if (userNumber % 2 === 0) {

                document.getElementById("number").innerText = userNumber + " è pari.";

            } else {

                let nextNumber = userNumber + 1;
                document.getElementById("number").innerText = "Il numero inserito è dispari. Il numero successivo è: " + nextNumber;
            }
        } else {
            document.getElementById("number").innerText = "Inserisci un numero valido.";
        }
    }
)