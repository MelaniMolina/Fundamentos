// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response)=>response.json())
// .then((respuesta=>console.log(respuesta))) 
// .catch((error)=>console.log(error))

/*Otra Forma de Obtener*/

// const obtenerData =  async (nombrePokemon)=>{
//     try{
//     const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
//     const response = await peticion.json()
//     console.log(response)
//     console.log(response.name , response.sprites.front_default)
//     }catch(error){
//      console.log(error)
//     }
// }
// obtenerData('pikachu')

/*  LOCAL STORAGE   */
//Del navegador
//Hacemo la peticion
// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then((response)=>response.json())

// //Creamos un objeto dentro del json personalizado 
// .then(data=>{
//  {
//     let usuario ={
//         name:data.name,
//         username:data.username,
//         email:data.email
//     }
//     guardarLocakStorage(usuario)
//  }
 
// })
// //Metodo para guardar

// const guardarLocakStorage =(data)=>{
//     localStorage.setItem('user',JSON.stringify(data))
// }


// const obtenerLocalStorage =()=>{
//     const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No hay data"
//     console.log(respuesta);
// }
// obtenerLocalStorage()

// const eliminarLocalStoraage =()=>{
//     localStorage.key("user") ? console.log("No hay clave") :
//     localStorage.removeItem("user")
// }
// eliminarLocalStoraage()

// const login = require('./module')
// login()

//Invoacion 
// const {login,LIKES} = require('./module.js')

// login()
// console.log(LIKES)


import {login as LOGIN } from "./module.js";

LOGIN()


