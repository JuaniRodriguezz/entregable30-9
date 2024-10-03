import { Vehiculo } from "./Vehiculos";
import { Ruedas } from "./Ruedas";
import { RegistroAutomotor } from "./RegistroAutomotor";
import { Moto } from "./Motos";
import { Camion } from "./Camiones";

let auto1:Vehiculo=new Vehiculo("Audi", "A4","Auto", new Ruedas(4));
let moto1:Moto=new Moto("Honda", "X5","Moto", new Ruedas(2), false);
let camion1:Camion=new Camion("Mercedes", "A6","Camion", new Ruedas(6), true, "Ganado");

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
moto1.setCasco(true);
camion1.setMarca("Volkswagen");
camion1.setAcoplado(false);
camion1.setTipoCarga("Sin carga");
console.log("Vehiculos luego de modificarlos: ", registro.obtenerAuto());
