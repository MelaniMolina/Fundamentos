// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },

//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,//Datos Activos 
    
//     //Expression
//     sendMail (){
//         return `send mail to ${this.Friends[0]}`
//     }
//     ,
//     //Declaration la que tiene la function () 
//     sendNotification: function (){
//         return `send notification to ${this.Friends[3]}`
//     }
// }
// console.log(user.state);
// console.log(user.sendMail());
// console.log(user.sendNotification());

// // Agregar un par de clave y valor al objeto
// user.image ="t.ly/Rhgs"
// // Eliminar un par de clave y valor del objeto
// delete user.state
// console.log(user)

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         streets:
//         {
//             principal: "Quitumbe Ñan",
//             secondary:"Huayanay Ñan"
//         }
//     }
// }
// ctrl+c+k

// const {name,lastName,age,address} = user
// console.log(name,lastName,age,address);

// const {name,lastName,age,myAddress=user.address} = user
// console.log(name,lastName,age,myAddress);

// const {name,lastName,age,address:{streets}} = user
// console.log(name,lastName,age,streets);

//Para imprimir el resto del arreglo en nuevo objeto 
// const {name,lastName,...res} = user
// console.log(name,lastName,res);

/*         CONGELAR UN OBJETO               */

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     }
// }

// Object.freeze(user)
// console.log(Object.isFrozen(user));
// user.image ="t.ly/Rhgs"
// //Con el metodo freeze no puedo modficar 
// console.log(Object.isSealed(user))
// user.age= 35
// console.log(user);
// //Con el metodo isSealed si puedo realizar modificaciones

// /*        Copiar Objetos        */

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34
// }

// const extraInformation = {
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },
//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,
//     sendMail (){
//         return `send mail to ${this.Friends[0]}`
//     },
//     sendNotification: function (){
//         return `send notification to ${this.Friends[3]}`
//     }
// }

// const allInformation = {...user,...extraInformation}
// console.log(allInformation)

/*       USO THIS       */

// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },
//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,
//     sendMail (){
//         return `send mail to ${this.Friends[0]}`
//     },
//     sendNotification: ()=>{
//         return `send notification to ${this.Friends[3]}`
//     }
// }
// //This lo utilizo cuando tengo una funcion declarada 
// // y no funciona cuando tengo una funcion => no funciona el this
// console.log(user.sendMail());
// // Va a provocar un error cuando se trabaje con arrow functions
// // console.log(user.sendNotification())

// /*   Metodos para trabajar con objetos   */


// const user = {
//     name:"Byron",
//     lastName:"Loarte",
//     age:34,
//     address:{
//         city:"Quito",
//         telephone:"0995644186",
//         street:"Quitumbe Ñan"
//     },
//     Friends:['Peter','Mike','Camila','Joe'],
//     state:true,
//     sendMail (){
//         return `send mail to ${this.Friends[0]}`
//     },
//     sendNotification: ()=>{
//         return `send notification to ${this.Friends[3]}`
//     }
// }

// console.log("Obtener las claves:",Object.keys(user))//Para obtener las claves
// console.log("Obtener los valores:",Object.values(user))//Para obtener los valores del obejto
// console.log("Obtener las claves y valores en un array:",Object.entries(user))

// const name ="laptop"
// const price = 3000

// const newProduct = {
//     name,
//     price
// }

// console.log(newProduct);