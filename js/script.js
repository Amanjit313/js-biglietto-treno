/*

Biglietto Treno:

1. Quanti chilometri da fare
2. Età del passeggero
3. 0.21 euro al km
4. 20% minorenni
5. 40% +65 anni

Prezzo Finale in decimali

*/

/* 1. Quanti chilometri da fare */
const chilometri = parseInt(prompt("Quanti km vorrebbe percorrere?"));

console.log (chilometri);

/* 2. Età del passeggero */
const età = parseInt(prompt("Quanti anni hai?"));

console.log (età);

/* 3. 0.21 euro al km */
const prezzo = (chilometri * 0.21);

console.log (prezzo);

/* 4. 20% minorenni - 5. 40% +65 anni */
let sconto

if (età < 18){
  sconto = (prezzo / 100) *80;
} 

if (età > 17) {
  sconto = prezzo;
}

if (età > 65){
  sconto = (prezzo /100) *60;
} 

console.log (sconto);

let prezzofinale = sconto.toFixed(2);

document.getElementById("soldi").innerHTML = " " + prezzofinale;
