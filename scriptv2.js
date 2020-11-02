
let preguntaActual = 0;
let aciertos = 0;


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
  
 
  function getElements() { 

    return new Promise(resolve => {
        firebase
        .database()
        .ref('myQuestions/')
        .on('value', function(snapshot) {
                resolve(snapshot.val());
        });
    })
  };
  
  

 
 
  

// const myQuestions = [
//     {
//         question:"¿En qué trabaja Sam antes de viajar a Mordor?",
//         answers:[ "Camarero", "Desempleado" , "Jardinero", "Paleontólogo"],
//         correctAnswer:"c"
//     },

//     {
//         question:"¿En qué puerta se puede leer el rótulo: Di amigo y entra?",
//         answers: ["Bolsón Cerrado" , "Puerta de Bree", "Casa de Elrond", "Puerta de Moria"],
//         correctAnswer: "3"
//     },

//     {
//         question: "¿A qué tres razas pertenecen los muertos de la Ciénaga de los Muertos?",
//         answers: [ "Hombres, Enanos y Elfos", "Elfos, Hombres y Orcos", "Enanos, Hobbits y Hombres", "Elfos, Orcos y Dragones",],
//         correctAnswer: "1"
//     },

//     {
//         question:"¿Cuál es la criatura que lleva más tiempo viviendo en la Tierra Media?",
//         answers:[ "Gandalf", "El Balrog", "Tom Bombadil", "Ella Laraña",],
//         correctAnswer: "2"
//     },
       
//     {
//         question: "¿Quién es el actual Rey de Gondor?",
//         answers: [  "Frodo", "Boromir", "Aragorn", "Isildur",],
//         correctAnswer: "2"
//     }

// ]

function pintar(preguntas){

     borrar();

     let cuestionario = document.querySelector("#onBoard");

     let form = document.createElement("form");
     form.id = "formulario";

     let pregunta = document.createElement("h2");
     pregunta.id = "pregunta";

     form.appendChild(pregunta);
     cuestionario.appendChild(form);

     pregunta.innerText = preguntas.question

     for (let i=0; i< preguntas.answers.length; i++) {
         
         let etiquetaRespuesta = document.createElement("label");
         etiquetaRespuesta.addEventListener("click", seleccion);
         let inputRespuesta = document.createElement("input");
         inputRespuesta.type = "radio";
         inputRespuesta.name = "respuesta";
         inputRespuesta.id = `respuesta_${i}`;
         etiquetaRespuesta.htmlfor = `respuesta_${i}`;

         etiquetaRespuesta.innerText = preguntas.answers[i];
         inputRespuesta.value = i;
         form.appendChild(etiquetaRespuesta);
         form.appendChild(inputRespuesta);
     }

}




function borrar() {
     let form = document.querySelector("#formulario");

     if (form) {
         form.remove()
     }

}

function seleccion(event){
    let respuesta = event.target;
    let respuestaSeleccionada = document.querySelector(`#${respuesta.htmlfor}`).value;
    console.log(respuestaSeleccionada);
    if (respuestaSeleccionada == preguntas[preguntaActual].correctAnswer){
      aciertos++
    }
    preguntaActual++
    pasarSiguiente();
}

let preguntas; 
async function pasarSiguiente(){
    if(!preguntas) {   
        preguntas = await getElements();
    }
   
    if (preguntaActual<= preguntas.length - 1){
     
    //   setTimeout (function() {pintar(preguntas[preguntaActual])}, 2000)
     pintar(preguntas[preguntaActual])
  }
  else {
    borrar()
    pintarResultados()
  }

}

function pintarResultados() {
   
  let body = document.querySelector("body");
  let paginaResultados= document.createElement("div");
  let divResultado = document.createElement("div")
  let textoAcierto = document.createElement("p")

  paginaResultados.id= "finalResults";
  textoAcierto.id= "aciertos";
  divResultado.id  = "resultado";

  body.appendChild(paginaResultados);
  paginaResultados.appendChild(divResultado);
  divResultado.appendChild(textoAcierto);

  textoAcierto.innerText = `Has acertado ${aciertos} preguntas`

}

// function newQuestions (){
   

//   let cuestionario = document.querySelector("#onBoard")

//   let form2 = document.createElement("form");
//   form2.id = "formulario2";
//   let question = document.createElement("input")
//   question.type = "text"
//   let answers = document.createElement("input")
//   answers.type = "text"
//   let correctAnswer = document.createElement("input")
//   correctAnswer.type = "text"

//   let submit = document.createElement("button")
//   submit.type = "button";
//   submit.textContent = "Submit";

  
//   form2.appendChild(question)
//   form2.appendChild(answers)
//   form2.appendChild(correctAnswer)
//   form2.appendChild(submit)
//   cuestionario.appendChild(form2)

//   submit.addEventListener("click", function(){

//   if (answers.value.split(",").length > 2 && question.value.length > 0 && correctAnswer.value.length > 0) {
//     let objetoQuestion = {

//       question: question.value,
//       answers: answers.value.split(","),
//       correctAnswer: answers.value.includes(correctAnswer.value)

//     }

    
//     firebase.database().ref("myQuestions/").push(objetoQuestion)
//   }

//   else {
//     console.log("ERROR");
//   }
 


// })};

function createNewQuestion() {

  let nuevoCuestionario = document.querySelector("#onBoard");
  
  let nuevaPregunta = document.createElement("form");
  nuevaPregunta.id = "nuevaPregunta";
  
  let inputPreguntas = document.createElement("input");
  inputPreguntas.type = "text";
  inputPreguntas.placeholder = "Introduzca su pregunta";
  
  let inputRespuestaUno = document.createElement("input");
  inputRespuestaUno.type = "text";
  inputRespuestaUno.placeholder = "Introduzca su respuesta";
    
  let inputRadioUno = document.createElement("input");
  inputRadioUno.type = "radio";
  inputRadioUno.name = "respuestas";
  inputRadioUno.value = "0";
    
  let inputRespuestaDos = document.createElement("input");
  inputRespuestaDos.type = "text";
  inputRespuestaDos.placeholder = "Introduzca su respuesta";
    
  let inputRadioDos = document.createElement("input");
  inputRadioDos.type = "radio";
  inputRadioDos.name = "respuestas";
  inputRadioDos.value = "1";
    
  let inputRespuestaTres = document.createElement("input");
  inputRespuestaTres.type = "text";
  inputRespuestaTres.placeholder = "Introduzca su respuesta";
    
  let inputRadioTres = document.createElement("input");
  inputRadioTres.type = "radio";
  inputRadioTres.name = "respuestas";
  inputRadioTres.value = "2";
    
  let boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = "Enviar";

  nuevoCuestionario.appendChild(nuevaPregunta);
  nuevaPregunta.appendChild(inputPreguntas);
  nuevaPregunta.appendChild(inputRespuestaUno);
  nuevaPregunta.appendChild(inputRadioUno);
  nuevaPregunta.appendChild(inputRespuestaDos);
  nuevaPregunta.appendChild(inputRadioDos);
  nuevaPregunta.appendChild(inputRespuestaTres);
  nuevaPregunta.appendChild(inputRadioTres);
  nuevaPregunta.appendChild(boton);

  boton.addEventListener("click", () => {

    let answers = [];
    let correctAnswer;

    if (inputRadioUno.checked)
        correctAnswer = 0;
    else if(inputRadioDos.checked)
        correctAnswer = 1;
    else if (inputRadioTres.checked)
        correctAnswer = 2;

    answers.push(inputRespuestaUno.value);
    answers.push(inputRespuestaDos.value);
    answers.push(inputRespuestaTres.value);
    console.log(answers,correctAnswer)

    let objetoQuestion = {
      question: inputPreguntas.value,
      answers: answers,
      correctAnswer: correctAnswer
    }

    firebase
      .database()
      .ref(`myQuestions/${preguntas ? preguntas.length : 0}`)
      .set(objetoQuestion)
  })
}





initDatabase();
pasarSiguiente();
createNewQuestion()
