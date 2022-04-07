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
let prezzo = (chilometri * 0.21);

console.log (prezzo);

/* 4. 20% minorenni - 5. 40% +65 anni */
if(età < 18){
  prezzo = (prezzo / 100) *80;
} else if(età > 65){
  prezzo = (prezzo /100) *60;
} 

console.log (prezzo);

let prezzofinale = prezzo.toFixed(2);

document.getElementById("soldi").innerHTML = " " + prezzofinale;
