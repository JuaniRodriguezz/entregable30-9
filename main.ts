import { Vehiculos } from "./Vehiculos";
import { Ruedas } from "./Caracteristicas";
import { RegistroAutomotor } from "./RegistroAutomotor";

let auto1:Vehiculos=new Vehiculos("Audi", "A4","Auto", new Ruedas(4));
let moto1:Vehiculos=new Vehiculos("Honda", "X5","Moto", new Ruedas(2));
let camion1:Vehiculos=new Vehiculos("Mercedes", "A6","Camion", new Ruedas(6));

//Creamos registro
const registro=new RegistroAutomotor("Registro del centro");

//Agregamos vehiculos
registro.agregarVehiculo(auto1); 
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

//Vehiculos agregados
console.log("Vehiculos agregados: ", registro.obtenerAuto());

//Eliminamos vehiculos
console.log("---------------------------------------------------------");
registro.eliminarVehiculo("Audi", "A4");
console.log("Vehiculos luego de eliminar Audi A4: ", registro.obtenerAuto());

//Modificar vehiculos
console.log("---------------------------------------------------------");
moto1.setMarca("Zanella");
moto1.setModelo("Y63");
camion1.setMarca("Volkswagen");
console.log("Vehiculos luego de modificarlos: ", registro.obtenerAuto());
