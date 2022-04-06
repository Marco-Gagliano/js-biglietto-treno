/*
BIGLIETTO DEL TRENO - PROCEDIMENTO:
  1* L'utente dovrà inserire una cifra pari ai kilometri che dovrà percorrere e la sua età
  2* il prezzo del biglietto sarà deciso da un calcolo ben definito (0,21€/km) 
  3* verrà poi effettutato uno sconto in base all'età dell'utente se applicabile:20% se minorenne, 40% se over 65
  4* l'importo finale verrà poi mostrato e nella sua completezza dei calcoli da far capire all'utente il perchè di quel prezzo 
*/

let distanceKm = prompt ("Prego, inserisca il numero di km che deve percorrere")
const priceForKm = 0.21;
let totPriceKm = distanceKm * priceForKm 

console.log(distanceKm, priceForKm, totPriceKm);

document.getElementById("biglietto").innerHTML =
`
<ul class="text-center">
    <li><h3>Dati inseriti:</h3></li>
    <li>Numero Km: ${distanceKm} km</li>
    <li>Costo euro per Km: ${priceForKm} €/km</li>
    <li>Prezzo totale del biglietto: ${totPriceKm} €</li>
  </ul>
`