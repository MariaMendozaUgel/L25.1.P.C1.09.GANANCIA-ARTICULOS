export default class Cl_mArticulos {
    constructor({codigo, costo, precioVenta}) {
        this.codigo = codigo;    
        this.costo = costo;
        this.precioVenta = precioVenta;
    }

    set codigo(codigo) {
        this._codigo = +codigo;
    }

    get codigo() {
        return this._codigo;
    }

    set costo(costo) {
        this._costo = +costo;
    }   

    get costo() {                        
        return this._costo;
    }

    set precioVenta(precioVenta) {
        this._precioVenta = +precioVenta;
    }

    get precioVenta() {        
        return this._precioVenta;}
    }