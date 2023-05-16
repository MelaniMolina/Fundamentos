/*Funciones*/
// "use strict"

// function hello(){
//     console.log("Bienvenidos a los fundamentos");
//     console.log("Trabjando con JS");
// }

// hello()
// hello()
// "use strict"

// function declarada(){
//     console.log("Yo soy una función declarada");
// }
// declarada()

// const expresada = function(){
//     console.log("Yo soy una función dexpresada");
// }
// expresada()

/* FUNCIONES ANONIMAS */
//Funcion anonima
// console.log(function(){
//     return "esto es una prueba de para validar una cuenta"
// }());
// //Funcion autoejecutada por que al final tiene la apertura y cierre de parentesis
// (function(){
//     console.log("función para validar datos del usuario")
// })()
 
/*FUNCION CONPARAMETROS */
//Funcion Expresada por su "=" 
// const precioFinalItems = function(a,b,...args){
//     let suma = 0;
//     var total = suma+a+b
//     if(args.length>0) args.forEach(e =>total+=e)
//     return total
// }
// console.log(precioFinalItems(10,20,40,50,10))

/*Paso de parámetros una función*/
// function hello(nameOne,nameTwo="Node.Js"){
    
//     return "welcome "+ nameOne + " and "+nameTwo
// }

// console.log(hello('Js'))

/*Retorno de una función */
// function hello(){
//     //Parentisis a lado de una una funcion para esta retorne
//        return function(){
//          return "Hello Js"
//      }
// }
// console.log(hello()())

/*Funciones flecha*/
// function login(user,password){
//     console.log("Usuario y password válidos");
// }

// const validarMail = (user,email)=>{
//     console.log("El emial ha sido verificado")
// }


// const validarMail_2 = (user,email)=>{
//     console.log("El emial ha sido verificado")
// }
// validarMail_2()
/*FUNCION EXPRESADA*/
// const registrarAvatar =  function (photo)
// {
//     console.log("El avatar ha sido registrado");
//     console.log("Hola");
// }

// /*Convertimos a una funcion FLECHA */
// const registrarAvatarTWO = (photo)=>console.log("El avatar ha sido registrado");

/*THIS*/
// const persona = {
//     nombre: "Melani",
//     saludar: function () {
//     setTimeout(() => {
//         console.log("Hola, mi nombre es " + this.nombre)
//         }, 1000);
//     },
// }
// persona.saludar()

const persona = {
    nombre: "Melani",
    saludar: function () {
    setTimeout(() => {
        console.log("Hola, mi nombre es " + persona.nombre)
        }, 1000);
    },
}
persona.saludar()











