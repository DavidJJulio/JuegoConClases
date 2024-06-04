export class Criatura {
    #vida = this.#vidaMaxima;
    #vidaMaxima = 100;
    #ataque = 10;
    constructor(){
        this.setNombre = undefined
    }
    set setNombre(nom){
        this.nombre = nom;
    }
    set setVidaMaxima(puntos){
        this.#vidaMaxima += puntos;
    }
}