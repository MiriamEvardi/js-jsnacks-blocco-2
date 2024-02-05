//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
//Continua a chiedere i numeri all’utente e a inserirli nell’array
//fino a quando la somma degli elementi è minore di 50

let array = [];
let sum = 0;


while (sum < 50) {
    let userNumber = prompt("Inserisci un numero");

    let number = + userNumber;

    if (isNaN(number)) {

        alert("Inserisci un numero valido.");

    } else {
        array.push(number);
        sum += number;
    }
}

document.getElementById("number-sum").innerText = "La parola più corta è: " + array;