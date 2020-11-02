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

function configuration(){
  var config = {
   apiKey: "apiKey",
   authDomain: "projectId.firebaseapp.com",
   databaseURL: "https://quizesdla.firebaseio.com",
   storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);
}


function getQuestions() {

    let database = firebase.database()
    let questions= database.ref('myQuestions/')

    questions.on('value', function(snapshot) {
      let questions = snapshot.val();

      questions.map(function(question){
        escribirPregunta(question.question);
      })
    })
};

function getAnswers(){

  let database = firebase.database()
  let answers = database.ref('myQuestions/')

  answers.on('value', function(snapshot) {
    let answers = snapshot.val();

    answers.map(function(answer){
      escribirPregunta(answer.answers)
    })
  })
}

function escribirPregunta(pregunta){

  let textNode = document.createElement("p");
  textNode.innerText = pregunta;
  document.getElementById("formulario").appendChild(textNode);

}

function escribirRespuestas(respuesta){
  let textNode = document.createElement("p")
}



 


initDatabase();
getElements();