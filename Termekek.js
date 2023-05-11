import Termek from "./termek.js";

class Termekek {
    #adatLista = [];
    #kedvencekLista = [];
    
    
    constructor(adatLista){
        this.#adatLista = adatLista;
        this.#kedvencekLista;
        

        const szuloELEM = $(".taroloElem");

        for (let index = 0; index < adatLista.length; index++) {
            const termek = new Termek(adatLista[index], szuloELEM);
        }
        $(window).on("kedvenc", (event) => {
            this.#kedvencekLista.push(event.detail);
            console.log(this.#kedvencekLista);
        })
    }
}

export default Termekek;