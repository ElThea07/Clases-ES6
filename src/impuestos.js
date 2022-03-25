//EXPORTAMOS LA CLASE IMPUESTOS CON SU CONSTRUCTOR
export default class Impuestos {
    constructor(montoBrutoAnual, deducciones){
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones; 
    }
  
    //GET MONTOBRUTOANUAL
    get montoBrutoAnual(){
      return this._montoBrutoAnual;
    }
    //SET MONTOBRUTOANUAL
    set montoBrutoAnual(value){
      this._montoBrutoAnual = value;
    }
  
    //GET DEDUCCIONES
    get deducciones(){
      return this._deducciones;
    } 
    //SET DEDUCCIONES
    set deducciones(value){
      this._deducciones = value;
    }
  }