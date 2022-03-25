//IMPORTAMOS LAS CLASES CLIENTE E IMPUESTOS
import Cliente from "./clientes.js";
import Impuestos from "./impuestos.js";


//CLIENTES E IMPUESTOS
let impuestos001 = new Impuestos(250, 10);
let cliente001 = new Cliente("ESTEBAN", impuestos001);

let impuestos002 = new Impuestos(500, 20);
let cliente002 = new Cliente("JAVIERA", impuestos002);

let impuestos003 = new Impuestos(750, 30);
let cliente003 = new Cliente("RAUL", impuestos003);

let impuestos004 = new Impuestos(1000, 40);
let cliente004 = new Cliente("CECILIA", impuestos004);

//IMPRIMOS EL CALCULO DE IMPUESTO DE CADA CLIENTE
console.log(`Impuestos de ${cliente001._nombre} son: ${cliente001.calcularImpuesto()}`);
console.log(`Impuestos de ${cliente002._nombre} son: ${cliente002.calcularImpuesto()}`);
console.log(`Impuestos de ${cliente003._nombre} son: ${cliente003.calcularImpuesto()}`);
console.log(`Impuestos de ${cliente004._nombre} son: ${cliente004.calcularImpuesto()}`);