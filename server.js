/* Implementar la capa de backend(controlador) 
necesaria para servir preguntas y respuestas
a una aplicación frontend. Intermediario firebase y front.*/

// 1) IMPORTAR DEPENDENCIAS
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const firebase = require("firebase");

// 2) CONFIGURACIÓN INICIAL
const server = express();   ///Creamos un servidor
const listenPort = 8080;    //Puerto de escucha

// 3) CONEXIÓN FICHERO FRONTEND
const staticFilesPath = express.static('public')  //nombre de la carpeta con nuestra frontend app
server.use(staticFilesPath);                     //  Le decimos dónde van a estar los elementos que aparecerán en frontend.use() es un método de express. Para establecer antes de arrancar el servidor, algunos parámetros de confiugración inicial. 

// 4) MODULO BORRADO PARSEO DE LOS JSON QUE LLEGAN AL SERVIDOR. 

server.use(bodyParser.urlencoded({ extended: false }));   //Como hemos decidido usar json necesitamos estas dos líneas. Le decimos que vamos a usar JSONs.
server.use(bodyParser.json());

// 5) MODULO BORRADO PROBLEMAS CORS

server.use(cors());


// 6) CONEXIÓN FIREBASE

function initDatabase() {
  const firebaseConfig = {
    apiKey: "AIzaSyB2kCG_Fj5JW7LJQ5FfiShlPd2qCEZsAGM",
    authDomain: "quizesdla.firebaseapp.com",
    databaseURL: "https://quizesdla.firebaseio.com",
    projectId: "quizesdla",
    storageBucket: "quizesdla.appspot.com",
    messagingSenderId: "475400352222",
    appId: "1:475400352222:web:d1aa463eb18b9c3f50ed4f"
  };

  firebase.initializeApp(firebaseConfig);

}
initDatabase();
const database = firebase.database();





// 3) PETICIÓN OBJETO DEL QUIZ 

server.get('/public', (req, res) => {


  let objetoBaseDatos = database.ref("myQuestions")
    .on("value", (snapshot) => {
      contenido = snapshot.val();
      res.send(JSON.stringify(contenido))
    });

});

// 3.1) RECOGER LAS NUEVAS PREGUNTAS ENVIADAS POR EL FORMULARIO.

server.post('/newQuestions', (req, res) => {
  
  res.send( )
    
    database.ref("myQuestions/").push(req.body)

});

// 4) START SERVER

server.listen(listenPort)
console.log(`Server started listening on ${listenPort}`)
// FIREBASE

// function initDatabase() {
//     const firebaseConfig = {
//       apiKey: "AIzaSyB2kCG_Fj5JW7LJQ5FfiShlPd2qCEZsAGM",
//       authDomain: "quizesdla.firebaseapp.com",
//       databaseURL: "https://quizesdla.firebaseio.com",
//       projectId: "quizesdla",
//       storageBucket: "quizesdla.appspot.com",
//       messagingSenderId: "475400352222",
//       appId: "1:475400352222:web:d1aa463eb18b9c3f50ed4f"
//     };

//     firebase.initializeApp(firebaseConfig);

//   }


// const server = http.createServer((request, response) => {
//     // Lógica de negocio. Qué tipo de peticiones sabe atender mi servidor.


//     if(request.url == "/retrieveQuestions") {

//         function getElements() { 

//             return new Promise(resolve => {
//                 firebase
//                 .database()
//                 .ref('myQuestions/')
//                 .on('value', function(snapshot) {
//                         resolve(snapshot.val());
//                 });
//             })
//         };

//       getElements();

//       response.writeHead(200, {'Content-Type': 'application/json'});
//       response.write ( JSON.stringify("myQuestions/"));


//     }

//    if(request.url == "/sendQuestions"){

//     }

//     response.end();

// })

// // En front mediante un fetch tenemos que pedir la info a nuestro server, la url será 'http://localhost:8080/getQuestions

// // Arrancar el servidor.
// initDatabase();
// server.listen(listenPort);
