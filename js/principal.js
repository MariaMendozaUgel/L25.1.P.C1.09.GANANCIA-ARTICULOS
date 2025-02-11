/*//Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se 
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al 
venderlos todos, y también el código del artículo con mayor precio de venta. 
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10, 
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70), 
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) */
import Cl_articulos from "./Cl_articulos.js";
import Cl_tienda from "./Cl_tienda.js";

let a1 = new Cl_articulos(888, 10, 15);
let a2 = new Cl_articulos(777, 20, 25);
let a3 = new Cl_articulos(999, 15, 25);
let a4 = new Cl_articulos(666, 25, 35);
let a5 = new Cl_articulos(111, 50, 70);
let a6 = new Cl_articulos(333, 40, 50);
let a7 = new Cl_articulos(444, 80, 100);
let a8 = new Cl_articulos(222, 5, 10);
let tienda = new Cl_tienda();

tienda.procesarArticulo(a1); 
tienda.procesarArticulo(a2); 
tienda.procesarArticulo(a3); 
tienda.procesarArticulo(a4); 
tienda.procesarArticulo(a5); 
tienda.procesarArticulo(a6); 
tienda.procesarArticulo(a7); 
tienda.procesarArticulo(a8); 

alert("La ganancia total es: $" + tienda.gananciaTotal())
alert("El codigo del articulo con mayor precio de venta es: " + tienda.codigoArticuloMayor());

