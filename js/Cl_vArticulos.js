export default class Cl_vArticulos {
    constructor() {
        this.vista = document.getElementById("articulosForm");
        this.inCodigo = document.getElementById("articuloForm_inCodigo");
        this.inCosto = document.getElementById("articuloForm_inCosto");
        this.inPrecioVenta = document.getElementById("articuloForm_inPrecioVenta");
        this.btAceptar = document.getElementById("articuloForm_btAceptar");
    }
    get codigo(){
        return +this.inCodigo.value;
    }
    get costo(){
        return +this.inCosto.value;
    }
    get precioVenta() {
        return +this.inPrecioVenta.value;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}