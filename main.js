import Termekek from "./termekek.js";
import Asszinkron from "./Aszinkron.js";

$(function () {
    const asszinkron = new Asszinkron();
    asszinkron.adatbe("adat.json", beolvasas)
   // new Termekek(adatLista);    //a termék osztálynak a példányosítása    
})

function beolvasas(adat) {
    console.log(adat)
    console.log(adat.adatLista)
    new Termekek(adat.adatLista)
}

//new Termekek(adatLista)