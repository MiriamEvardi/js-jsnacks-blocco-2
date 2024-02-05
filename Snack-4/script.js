//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo.

let userNumber = Number(prompt("Inserisci un numero"));

userNumber = +userNumber;


if (userNumber % 2 === 0) {

    document.getElementById("number").innerText = userNumber + " è pari.";

} else {

    let nextNumber = userNumber + 1;
    document.getElementById("number").innerHTML = "Il numero inserito è dispari. Il numero successivo è: <br>" + nextNumber;
}