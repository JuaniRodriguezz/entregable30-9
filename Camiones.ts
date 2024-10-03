import { Ruedas } from "./Ruedas";
import { Vehiculo } from "./Vehiculos";

export class Camion extends Vehiculo{ 
    protected acoplado:boolean=false; 
    protected tipoCarga:string="vacio";  
    constructor(marca:string, modelo:string,tipo:string,ruedas?:Ruedas, acoplado?:boolean, tipoCarga?:string){
        super(marca, modelo,tipo,ruedas);
        if(acoplado!=undefined){
            this.acoplado=acoplado;
        }
        if(tipoCarga!=undefined){
            this.tipoCarga=tipoCarga;
        }
    }
   

    //Getters
    getAcoplado():boolean{
        return this.acoplado;
    }
    getTipoCarga():string{
        return this.tipoCarga;
    }

    //Setters
    setAcoplado(acoplado:boolean):void{
        this.acoplado=acoplado;
    }
    setTipoCarga(tipoCarga:string):void{
        this.tipoCarga=tipoCarga;
    }
}