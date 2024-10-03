import { Ruedas } from "./Ruedas";
import { Vehiculo } from "./Vehiculos";

export class Moto extends Vehiculo{ 
    protected casco:boolean=false;   
    constructor(marca:string, modelo:string,tipo:string,ruedas?:Ruedas, casco?:boolean){
        super(marca, modelo,tipo,ruedas);
        if(casco!=undefined){
            this.casco=casco;
        }
    }

    //Getters
    getCasco():boolean{
        return this.casco;
    }

    //Setters
    setCasco(casco:boolean):void{
        this.casco=casco;
    }
}