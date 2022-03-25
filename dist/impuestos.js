"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//EXPORTAMOS LA CLASE IMPUESTOS CON SU CONSTRUCTOR
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  } //GET MONTOBRUTOANUAL


  _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    } //SET MONTOBRUTOANUAL
    ,
    set: function set(value) {
      this._montoBrutoAnual = value;
    } //GET DEDUCCIONES

  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    } //SET DEDUCCIONES
    ,
    set: function set(value) {
      this._deducciones = value;
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;