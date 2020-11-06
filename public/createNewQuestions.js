// 1) MANDAR POR FETCH AL SERVER LA INFORMACIÓN (METHOD POST)

function enviarFetch(e){

  fetch('http://localhost:8080/newQuestions', { 
    method: 'POST',
    body: JSON.stringify(e),
    headers: {'Content-Type': 'application/json'}
  })
  
  .then(res => res.text())
  .then(data => myQuestions = data)

}



// 2) CREAR EL FORM PARA MANDAR LAS NUEVAS PREGUNTAS Y RESPUESTAS
let preguntas;

function createNewQuestion() {

    let nuevoCuestionario = document.querySelector("#onBoard");
    
    let nuevaPregunta = document.createElement("form");
    nuevaPregunta.id = "nuevaPregunta";
    console.log(nuevaPregunta)
    
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
      
  
      let objetoQuestion = {
        question: inputPreguntas.value,
        answers: answers,
        correctAnswer: correctAnswer
      }

      
  
      

    enviarFetch(objetoQuestion);
    
 })}

  
  
  createNewQuestion()