import Cl_mArticulos from "./Cl_mArticulos.js";
export default class Cl_mTienda {
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
