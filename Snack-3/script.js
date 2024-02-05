//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
//(Se iniziate con un array da 3 elementi e l'altro da 5
// eseguite istruzioni sinchè non ne hanno entrambi 5)


let pets = ["cat", " dog", " rabbit"];
let animals = ["horse", " elephant", " axolotl", " spider", " panda"];

while (pets.length !== animals.length) {

    if (pets.length < animals.length) {
        pets.push(prompt(" inserisci un animale domestico"));
    } else {
        animals.push(prompt("inserisci un animale non domestico"));
    }
}

document.getElementById("pets").innerText = "Pets: " + pets;
document.getElementById("animals").innerText = "Animals: " + animals;