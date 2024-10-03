import { Vehiculo } from "./Vehiculos";
import { Ruedas } from "./Ruedas";

export class RegistroAutomotor{    
    private nombre:string;
    private vehiculos:Vehiculo[];

    constructor(nombre:string, vehiculos?:Vehiculo[]){
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
    
    obtenerAuto():Vehiculo[]{
        return this.vehiculos;
    }
}