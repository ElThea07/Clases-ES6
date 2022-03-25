"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//EXPORTAMOS LA CLASE CLIENTE CON SU CONSTRUCTOR
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto; //SI NOMBRE A SIDO DEFINIDO DISTINTO A UN STRING

    if (typeof nombre != "string") {
      console.log("Ingrese un 'texto' de nombre");
    } //SI ES DIFERENTE A ("impuesto" CONTIENE "Impuesto")


    if (!(impuesto instanceof _impuestos["default"])) {
      console.log("Ingrese correctamente el impuesto de ".concat(nombre));
    }
  } //GET NOMBRE


  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    } //SET NOMBRE
    ,
    set: function set(newNombre) {
      this._nombre = newNombre;
    } //FUNCION PARA CALCULAR IMPUESTOS

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;