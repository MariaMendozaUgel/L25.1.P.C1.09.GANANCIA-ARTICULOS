/*//Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se 
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al 
venderlos todos, y también el código del artículo con mayor precio de venta. 
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10, 
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70), 
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) */
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_controlador from "./Cl_controlador.js";

export default class principal {
    constructor() {
        let vista = new Cl_vTienda();
        let modelo = new Cl_mTienda();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
    }