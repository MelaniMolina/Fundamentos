// //Requerimos  

// const http = require("http") 
// //declaramos una variables para crear el servidor 
// const server = http.createServer((rep,res)=>{
//     //Lo que quiero tener
//     user={
//         use:"Byron",
//         email:"dvshgsv@.com"
//     }

//     //res.setHeader('Content-Type','text/html')
//     //rep -> para recibir

//     //res.write("<h1>Hola node.js http</h1>")
//     //para cerrar o si no se queda ejecutando 
//     res.end()
// }) 
// server.listen(3000)
// console.log("Servidor OK")


// const express = require("express")
// const app=express()
// //Devolver algo el verbo get
// app.get('/' , (req,res) => {
//        res.send("Hello Word")
// })
// app.get("/dashboard",(req,res)=>{
//     res.send("Dasboard principal")
// })

// app.get("/contact",(req,res)=>{
//     res.send("Contactos de la pagina web")
// })

// app.get("/product",(req,res)=>{
//     res.send("Prodcutos del e-commerce")
// })

// app.use((req,res)=>{
//     res.status(404).send("Pagina No Encontrada ;)")
// })
 
 //app.listen(3000)
//console.log("SERVER Ok");


//Endpoints
// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send("Obtener datos del servidor")
// })
// app.post('/',(req,res)=>{
//     res.send("Enviar datos al servidor")
// })
// app.put('/',(req,res)=>{
//     res.send("Actualizar toda la información")
// })
// app.patch('/login',(req,res)=>{
//         res.send("Actualizar solo un porción de la información")
// })
// app.delete('/personal',(req,res)=>{
//     res.send("Eliminar algún dato del servidor")
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');

// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.sendFile('',{
//         root:__dirname
//     })
// })
// console.log(__dirname);
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');






// app.get('/',(req,res)=>{
//     res.send("<h1>Landing Page</h1>")
//     res.send("<p>ndsjnajdnjdnajk</p>")
// })


// app.get('/user',(req,res)=>{
//     res.json({
//         "nombre":"Melani",
//         "apellido":"Molina",
//         "edad":20,
//         "direccion":{<<< 
//             "callePrincipal":"Quitumbe",
//             "calleSecundaria":"Calle B",
//         }
//     })
// })
// const express = require('express')
// const {engine} = require("express-Handlebars")

// //Utilizar al proyecto 
// // const patch=require('patch')
// // app.set('views',.path.join(_dirname,'views'))



// const app = express()

//  app.engine('.hbs',engine({
//     extname:'.hbs'
//  }))

//  app.set('view engine',".hbs")
//  app.set('views','./src/views')

//  app.get('/', (req, res) => {
//     res.render('home'); 
// });
// // Redirecciones
// app.get('/login',(req,res)=>{
//    res.send("login")
// })
// app.get('/personal',(req,res)=>{
// res.send("personal")
// })
// app.get('/home',(req,res)=>{
//    res.send("home")
//    })


// app.listen(3000)
//  console.log('Servidor ejecutandose en el puerto 3000');



// app.get('/operacion/:num1/:num2',(req,res)=>{
// //const {nombre,edad}=req.body
// // res.send(`Los datos enviados son: ${nombre} ${edad}`)
// // const{num1,num2} = req.params
// // res.send(`La suma es ${Number(num1) + Number(num2)} `) 



// })
// app.get('/productos/is',(req,res)=>{
//    console.log(req.body)

   
//    })




const express = require('express')
const app = express()


app.use((req,res,next)=>{
    console.log(`ruta invocada: ${req.path} - método: ${req.method}`);
    next()//para el widlewares para que no se quede cargando
})

app.get('/profile',(req,res)=>{
    res.send("Bienvenido al perfil del usuario")
})

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');
