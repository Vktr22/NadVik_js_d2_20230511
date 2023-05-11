class Termek {
    #adat;
    #divELEM;
    #buttonELEM;

    constructor(adat, szuloELEM){
        this.#adat = adat;
        
        this.#buttonELEM;
        szuloELEM.append(`<div class="divElem">
        <p class="pElem">${this.#adat.cim}</p>
     
        <p>${this.#adat.iro}</p>
     
        <p>${this.#adat.ar}</p>
        </div>`);
        this.#divELEM = szuloELEM.children(".divElem:last-child")
        this.#buttonELEM = this.#divELEM.children("button")
        this.#buttonELEM.on("click", () => {
            this.kattintasTrigger();
        });
    };

    getAdat(){
        return this.#adat;
    }

    kattintasTrigger(){
        let e = new CustomEvent ("kedvenc", {detail: this})
        window.dispatchEvent(e);
        
    }

}

export default Termek;