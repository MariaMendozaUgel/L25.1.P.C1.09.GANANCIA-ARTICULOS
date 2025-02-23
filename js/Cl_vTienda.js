import Cl_vArticulos from "./Cl_vArticulos.js";
import Cl_mArticulos from "./Cl_mArticulos.js";
export default class Cl_vTienda {   
    constructor() {
        this.controlador = null;
        this.mArticulos = null;
        this.vArticulos = new Cl_vArticulos();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblGananciaTotal = document.getElementById("mainForm_lblGananciaTotal");
        this.lblArticuloMayor = document.getElementById("mainForm_lblArticuloMayor");
        this.btAgregar.onclick = () => this.ocultar();
        this.vArticulos.btAceptar.onclick = () => this.controlador.agregarArticulo();
        this.mostrar();
    }
    agregarArticulo() {
        this.mArticulos = new Cl_mArticulos({
            codigo: this.vArticulos.codigo,
            costo: this.vArticulos.costo,
            precioVenta: this.vArticulos.precioVenta
        });
       this.mostrar();
        return this.mArticulos;
    }
    mostrar(){
        this.vista.hidden = false;
        this.vArticulos.ocultar();
    }
    ocultar(){
        this.vista.hidden = true;
        this.vArticulos.mostrar()
    }
    reportarArticulo(gananciaTotal, codigoArticuloMayor) {
        this.tabla.innerHTML += `
        <tr>
        <td>${this.vArticulos.codigo}<td>
        <td>${this.vArticulos.costo}<td>
        <td>${this.vArticulos.precioVenta}<td>
        </tr>
        `;
        this.lblGananciaTotal.innerHTML = gananciaTotal;
        this.lblArticuloMayor.innerHTML = codigoArticuloMayor;
    }
}