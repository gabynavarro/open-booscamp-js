console.log("hola");
//afectado en todo el codigo
var numero;
//afectado solo en los bloques
let numerolet;
//constante qe no cambia nunca
const CONST="hola";
console.log(CONST)

//Listas, Arrays
let lista1=["Gabriel", "Navarro", "24757503", 46, true];
const lista2=new Array("Gabriel", "Navarro", "24757503", 46, true);
const lista3=new Array(3);
//lista de lista
const lista4=[lista1,lista2,lista3];
console.log(lista1);
console.log(lista4);
const movil={
    "alutra-min":0.75, //caso declaracion con - o otros simbolos
    altura:10,
    ancho:5,
    marca:"Xiaomi",
    contactos:["pedro", "ale", "roberto"],
    tarjeta:{
        marca:"Rio",
        almacenamiento:32
    }
}
//accedemos tarjeta almacenamiento
console.log(movil.tarjeta.almacenamiento);
//definir una nueva propiedad
//no necesita ser modificado solo mencionado
movil.anio=2019;
console.log(movil.anio);
//fecha
//librerias de apoyo
//Moment.js
const fecha=new Date();
console.log(fecha);
const fecha_valores=new Date(2022,02,03);
console.log(fecha_valores);
console.log(fecha.getDate())
console.log(fecha.getMonth()+1)
console.log(fecha.getFullYear())
console.log(fecha.getHours())

