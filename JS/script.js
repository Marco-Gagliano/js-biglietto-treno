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
let priceTicket = totPriceKm.toFixed(2)

console.log(distanceKm, priceForKm, totPriceKm, priceTicket);




alert ("In base alla sua età, potrebbe essere un applicato uno sconto sul prezzo del biglieto: il 20% se ha meno di 18 anni, il 40% se ha più di 65 anni")

let yourAge = prompt ("Prego, inserisca la età")

if (yourAge < 18){
  priceTicket = totPriceKm - (totPriceKm * 20 / 100);
} else if (yourAge > 65){
  priceTicket = totPriceKm - (totPriceKm * 40 / 100);
} else{
  priceTicket = totPriceKm;
}

const totalTicket = priceTicket.toFixed(2)

console.log(totalTicket);


document.getElementById("ticket-train").innerHTML =

`
<div class="text-center">
  <ul>
    <li><h3>Dati inseriti:</h3></li>
    <li>Numero Km: ${distanceKm} km</li>
    <li>Costo euro per Km: ${priceForKm} €/km</li>
    <li>Prezzo del biglietto: ${priceTicket} €</li>
  </ul>


  <ul>
    <li><h3>Sconto Applicabile:<h3></li>
    <li>Età inserita: ${yourAge} anni</li>
    <li>Sconto del 20%: </li>
    <li>Sconto del 40%: </li>
  </ul>


  <ul>
    <li><h3>Prezzo Totale: ${totalTicket} €<h3></li>
    <li><h5>Grazie per averci scelto. Buon Viaggio!<h5><li>
  </ul>
<div>
`
