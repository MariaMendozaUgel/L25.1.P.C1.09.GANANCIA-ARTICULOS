export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarArticulo() {
       this.modelo.procesarArticulo(this.vista.agregarArticulo());
       this.vista.reportarArticulo(
        this.modelo.gananciaTotal(), 
        this.modelo.codigoArticuloMayor());
      
    }
}