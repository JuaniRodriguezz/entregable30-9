import { Vehiculos } from "./Vehiculos";
import { Ruedas } from "./Caracteristicas";

export class RegistroAutomotor{    
    private nombre:string;
    private vehiculos:Vehiculos[];

    constructor(nombre:string, vehiculos?:Vehiculos[]){
        this.nombre=nombre;
        if(vehiculos!=undefined){
            this.vehiculos=vehiculos;
        }else{
            this.vehiculos=[];
        }
    }

    getNombre():string{
        return this.nombre;
    }
    agregarVehiculo(vehiculo:any):void{
        this.vehiculos.push(vehiculo);
    }
    eliminarVehiculo(marca:any, modelo:any):void{
        this.vehiculos=this.vehiculos.filter(vehiculo=>vehiculo.getMarca()!==marca);
        this.vehiculos=this.vehiculos.filter(vehiculo=>vehiculo.getModelo()!==modelo);
    } 
    
    obtenerAuto():Vehiculos[]{
        return this.vehiculos;
    }
}