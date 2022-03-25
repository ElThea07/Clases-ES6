////IMPORTAMOS LA CLASE IMPUESTOS
import Impuestos from "./impuestos.js";

//EXPORTAMOS LA CLASE CLIENTE CON SU CONSTRUCTOR
export default class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
      
        //SI NOMBRE A SIDO DEFINIDO DISTINTO A UN STRING
      if (typeof nombre != "string"){
          console.log("Ingrese un 'texto' de nombre");
        }
        
        //SI ES DIFERENTE A ("impuesto" CONTIENE "Impuesto")
      if (!(impuesto instanceof Impuestos)){
          console.log(`Ingrese correctamente el impuesto de ${nombre}`);
        }
    }

    //GET NOMBRE
    get nombre(){
      return this._nombre;
    }
    //SET NOMBRE
    set nombre(newNombre){
      this._nombre = newNombre;
    } 

    //FUNCION PARA CALCULAR IMPUESTOS
    calcularImpuesto(){
      return ((this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21);
    }
  }