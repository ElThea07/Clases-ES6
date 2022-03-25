"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//IMPORTAMOS LAS CLASES CLIENTE E IMPUESTOS
//CLIENTES E IMPUESTOS
var impuestos001 = new _impuestos["default"](250, 10);
var cliente001 = new _clientes["default"]("ESTEBAN", impuestos001);
var impuestos002 = new _impuestos["default"](500, 20);
var cliente002 = new _clientes["default"]("JAVIERA", impuestos002);
var impuestos003 = new _impuestos["default"](750, 30);
var cliente003 = new _clientes["default"]("RAUL", impuestos003);
var impuestos004 = new _impuestos["default"](1000, 40);
var cliente004 = new _clientes["default"]("CECILIA", impuestos004); //IMPRIMOS EL CALCULO DE IMPUESTO DE CADA CLIENTE

console.log("Impuestos de ".concat(cliente001._nombre, " son: ").concat(cliente001.calcularImpuesto()));
console.log("Impuestos de ".concat(cliente002._nombre, " son: ").concat(cliente002.calcularImpuesto()));
console.log("Impuestos de ".concat(cliente003._nombre, " son: ").concat(cliente003.calcularImpuesto()));
console.log("Impuestos de ".concat(cliente004._nombre, " son: ").concat(cliente004.calcularImpuesto()));