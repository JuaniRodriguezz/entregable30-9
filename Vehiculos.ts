import { Ruedas } from "./Ruedas";

export class Vehiculo{
    private marca:string;
    private modelo:string;
    private tipo:string;
    private ruedas:Ruedas[];

    constructor(marca:string, modelo:string,tipo:string,ruedas?:Ruedas){
        this.marca=marca;
        this.modelo=modelo; 
        this.tipo=tipo;       
        this.ruedas=[];
    }
    
    //Getters
    getMarca():string{
        return this.marca;
    }
    getModelo():string{
        return this.modelo;
    }
    getTipo():string{
        return this.tipo;
    }
    getRuedas():Ruedas[]{
        return this.ruedas;
    }
    //Setters
    setMarca(marca:string):void{
        this.marca=marca;
    }
    setModelo(modelo:string):void{
        this.modelo=modelo;
    }
    setTipo(tipo:string):void{
        this.tipo=tipo;
    }
    setRuedas(ruedas:Ruedas[]):void{
        this.ruedas=ruedas;
    }   

}
