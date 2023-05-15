//console.log("Hola Mundo "); 
//var nicknameUsuario = "Striker";
//var puntosVida= "Toshi";

//console.log(nicknameUsuario+" "+puntosVida);

//console.log(typeof nicknameUsuario);


//Uso Del Var
//console.log(likesPost);


//var likesPost;

//if (true) {
//    var likesPost = 3;
//}
//console.log(likesPost);
// Declaracion de variables con let
// asignar una variable
//let nicknameUsuario = "Yoshi"
//let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
//nicknameUsuario = "Toshi"
//puntosDeVida = 900
//console.log(nicknameUsuario+" "+puntosDeVida);




//Uso del const
//'use strict';

// asignar una variable
//const nicknameUsuario = "Kirbysoc"
// siempre deben inicializar con un valor
//let puntosDeVida= 8000
// no se puede declarar una variable con el mismo nombre
// const nicknameUsuario = "Toshi"
// no puede ser reasignado un valor
// nicknameUsuario = "Toshi"
// puntosDeVida = 900
//console.log(nicknameUsuario+" "+puntosDeVida);

// Uso del var
// var estado = true
// if (estado) {
//     var estado = false
// }
// console.log(estado)
// for (var i = 0; i < 10; i++) 
// {
//     console.log(i)
// }
// console.log(i)
//ctrll + k +u

/*************  STRINGS   **************/


//let nombreJuego = "Mario Kart"
//let tipoJuego = 'Carreras'
//Primera doema de concatenar
//console.log(nombreJuego,tipoJuego);
//Metodos de concatenar

//let nombreJuego = " Mario Kart "
//console.log("Número de letras:",nombreJuego.length);
//console.log("Encotrar alguna palabra:",nombreJuego.includes("Kart"));
//console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
//console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
//console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
//Metodo trim para formularios (Los cuales quitan los espacios en blanco de adelante y atras)
//console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider'));
//Reemplazar las palabras
//console.log("Cortar un texto:",nombreJuego.slice(1,6));
//slice cortar un texto
//console.log("Cortar un texto:",nombreJuego.substring(1,6));
//Substring para cortar los caracteres
//console.log("Cortar un texto:",nombreJuego.charAt(1));
//Sacar un solo caracter
//console.log("Repetir un texto:",nombreJuego.repeat(2));
//Repetir un texto
//console.log("Dividir un texto:",nombreJuego.split(" "));
//split dividir un texto 



//const name = "Byron"
//const lastName= "Loarte"
//const city ="Quito"
//const age = 34
//const active = false
//console.log(name+"-"+lastName+"-"+city)
//console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);
//console.log(`Esto es una prueba ${age}`);

/**                  NUMEROS                **/

//const numeroVidas = "20"
//const numeroPuntos = 20

//console.log(numeroPuntos,numeroVidas);
//console.log(typeof(numeroPuntos), typeof(numeroVidas));

//console.log("suma:",numeroPuntos+20);
//console.log("resta:",numeroPuntos-20);
//console.log("multiplicación:",numeroPuntos*20);
//console.log("división:",numeroPuntos/20);
//console.log("módulo:",numeroPuntos%20);

//let numeroPuntosActual = 20

//console.log(++numeroPuntosActual );
//console.log(numeroPuntosActual++);

//let numeroPuntosActua = 20

//console.log(++numeroPuntosActua );
//console.log(numeroPuntosActua++);



//const numeroPuntos = 20
//console.log(Math);
//console.log(Math.PI);
//console.log(Math.round(2.43));
//console.log(Math.sqrt(25));
//console.log(Math.abs(-450));
//console.log(Math.pow(2,5));
//console.log(Math.min(10,4));
//console.log(Math.max(58,-4));
//console.log(Math.round(Math.random()*20));

//console.log(3 + 4 * 5);
//console.log(4 * 3 ** 2);
//console.log(200 * 0.2);
//console.log(200 * 1.12);



//let edadJugador = "20"
//let precioJuego = "525.63"
//let precio = "101.5"
//Number se lo considera como un objeto 
//console.log(Number.parseInt(edadJugador));
//console.log(Number.parseFloat(precioJuego));
//console.log(Number.isInteger(edadJugador));
//console.log(`${+edadJugador + +precioJuego}`);
//console.log(Number.parseIntt(precio));

// operadores de asignación 
//let saldoTarjetaUsuario = 500
//let saldoTarjeta = 1000
//let estadoCuenta
//let emailConfirmado=null

// operadores de comparación
//saldoTarjetaUsuario="1000"
//console.log(saldoTarjeta == saldoTarjetaUsuario)
// evalua tipo de dato y contenido
//console.log(saldoTarjeta === saldoTarjetaUsuario)
//console.log(estadoCuenta === emailConfirmado);

// operadores lógicos 
//console.log(saldoTarjeta != saldoTarjetaUsuario);


/*      CONDICIONALES       */

//const carritoCompras = []

// utilizando el condicional clásico
//if (carritoCompras.length===0)
//{
  //  console.log("Agregar productos")
//}

// utilizando operador ternario
//carritoCompras.length===0 ? console.log("Agregar productos") :""


/*           BUCLES              */


// const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
// const usuario ={
//     nombre:"Byron",
//     apellido:"Loarte",
// }

// // uso del forEach = Es un metodo por los paratesis
// tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// // uso del for of -> usado para arreglos
// for (const t of tareasPendientes) {
//     console.log(`${t}`)
// }

// // uso del for in -> usado para objetos
// for (const clave in usuario) {
//     console.log(`${usuario[clave]}`)
// }

// console.log("----------------------------------");
// // uso del for in -> usado para objetos
// for (const clave in usuario) {
//     console.log(`${usuario[clave]}`)
// }
// console.log("----------------------------------");
// // uso del map -> retorna un nuevo arreglo
// // Map de mutar los arreglos 

// const nuevasTareas = tareasPendientes.map((t)=> t)
// console.log(nuevasTareas)