/*     ARREGLOS         */
//Se pueden mezclar cualquier tipo de valores

// const friendsUser = ["Peter","Juan","Luisa","Anahi","Mateus"]

// const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]

// const products = ["Play","Tv","Laptop","Celular"]

// const followerSocialMedia = [23,56,37,12]

// console.log(friendsUser);

//Unir los arreglos con spread operator
// const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// const namePets = ["Puka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']


// // spread operator
// const newNames = [...nameFriends,...namePets]
// console.log(newNames);


// const friendsUser = ["Peter","Juan","Luisa","Anahi","Mateus"]
// const products = ["Play","Tv","Laptop","Celular"]
// const followerSocialMedia = [23,56,37,12]

// console.log("Número de elementos:", friendsUser.length);//Longitud de elementos
// console.log("Número de elementos:", products.length);
// console.log("Número de elementos:", followerSocialMedia.length);

/*     RECORRER LOS ARREGLOS      */

//  const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]
// // // primera forma de iterar sobre los elementos de un arreglo 
// // for (let i=0 ; i<friends.length ; i++){
// //     console.log(friends[i]);
// // }
// // // segunda forma de iterar sobre los elementos de un arreglo 
// // friends.forEach((e,i)=>console.log(`${i} - ${e}`))


// // tercera forma de iterar sobre los elementos de un arreglo 
// const newFriends= friends.map((e)=> `Hola ${e}`)
// console.log(friends);
// console.log(newFriends);
// // En conclusión (map) no altera el arreglo original


/*     Métodos de los arreglos          */

// const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
// const skills = ["frontend","backend"]
// const nickname ="Byrontosh"

// // Agrega al final del arreglo
// //profileUser.push(skills)
// //console.log(profileUser)

// // Agregar al inicio del arreglo
// //profileUser.unshift(nickname)
// //console.log(profileUser)
// //profileUser.unshift(nickname)
// // Elimina el elemento del final del arreglo
// // Elimina el elemento del inicio del arreglo
// profileUser.shift(profileUser)
// console.log(profileUser);

// const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// // método find
// const friendOne = friends.find((e)=>e==="Luisa")
// console.log(friendOne);

// const friendTwo = friends.find((e)=>e==="Luisa123")
// console.log(friendTwo);

/*    METODO findIndex      */

// const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// // método findIndex
// const encontrar = friends.findIndex((f)=>f==="Toshi")
// console.log(encontrar)

/*    METODO filter  solo se puede utilizar en un funcion callback   */


// const friends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']


// // método filter
// const newfriendsOne = friends.filter((e)=>e.startsWith('A'))
// const newfriendTwo = friends.filter((e)=>e!='Pablo')
// console.log(newfriendsOne);
// console.log(newfriendTwo);

/*   METODO CONCAT     */
//Copias de arreglo
// const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// const namePets = ["Puka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']


// // método concat
// const newNames = nameFriends.concat(namePets)
// console.log(newNames);

// /*   METODO  reduce   */

// const estudiantes = [
//     { name: "John", age: 21 },
//     { name: "Oliver", age: 55 },
//     { name: "Michael", age: 55 },
//     { name: "Dwight", age: 19 },
//     { name: "Oscar", age: 21 },
//     { name: "Kevin", age: 55 },
// ];

// const carritoCompras = [
//     {   product: "phone",
//         qty: 1,
//         price: 500
//     },
//     {   product: "Screen Protector",
//         qty: 1,
//         price: 10,
//     },
//     {
//         product: "Memory Card",
//         qty: 2,
//         price: 20,
//     }
// ]

// // const resultado = estudiantes.reduce((pre, act) => pre + act.age, 0);
// // console.log("Edad de los estudiantes: ",resultado);

// // const totalProductos = carritoCompras.reduce((pre,act)=>pre+act.qty,0)
// // console.log("Total de productos: ",totalProductos);

// // const totalPagar = carritoCompras.reduce((pre,act)=>pre+act.price,0)
// // console.log("Total a pagar con IVA: ",totalPagar+(totalPagar*0.12));

// /*  DESTRUCTURACION DE ARREGLOS  */
// const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]
// const[dato1,dato2,dato3,dato4,dato5,dato6] = dataNewUser
// console.log(dato1)
// /*  DESTRUCTURACION DE OBJETOS  */
// const[productos,cantidad,precio=carritoCompras.price] = carritoCompras
// console.log(precio)

// Saltar el valor en un arreglo
// const [   , Hongo , zanahoria] = ['🍅', '🍄', '🥕']
// console.log(Hongo)
// console.log(zanahoria)

// Desestructurando un arreglo anidado
// const frutas = ['🍈', '🥕', '🍌', '🍉', ['🍅', '🍄', '🍍']]
// const market = frutas[4]
// const pineapple = market[1]
// console.log(pineapple);

/*     Rest en Arreglos       */

const [tomate, hongo, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

console.log(tomate)
console.log(hongo)
console.log(rest)
