import Cl_articulos from "./Cl_articulos.js";
export default class Cl_tienda {
    constructor ()  {
        this.acumCosto = 0;
        this.acumVenta = 0;
        this.precioMayor = -1000;
        this.codigoMayorPrec = -1000;
    }
    procesarArticulo(a) {
        this.acumCosto += a.costo;
        this.acumVenta += a.precioVenta;
        if (a.precioVenta > this.precioMayor) {
            this.precioMayor = a.precioVenta;
            this.codigoMayorPrec = a.codigo;
        }
    }

    gananciaTotal() {
        return this.acumVenta - this.acumCosto;
        
    }
    codigoArticuloMayor() {
        return this.codigoMayorPrec;
    }


    }
