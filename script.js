
const quizContainer = document.querySelector("#quiz");
const resultsContainer = document.getElementById("contresult");
const submitButton = document.querySelector("#result");
const slides = document.querySelector(".slide");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next")
let currentSlide = 0;

quizContainer.appendChild(submitButton)


const myQuestions = [
    {
        question:"¿En qué trabaja Sam antes de viajar a Mordor?",
        answers: {
            a:  "Camarero",
            b:  "Desempleado" ,
            c:  "Jardinero",
            d:  "Paleontólogo",
        },
        correctAnswer:"c"
    },

    {
        question:"¿En qué puerta se puede leer el rótulo: Di amigo y entra?",
        answers: {
            a:  "Bolsón Cerrado" ,
            b:  "Puerta de Bree",
            c:  "Casa de Elrond",
            d:  "Puerta de Moria",
        },
        correctAnswer: "d"
    },

    {
        question: "¿A qué tres razas pertenecen los muertos de la Ciénaga de los Muertos?",
        answers: {
            a:  "Hombres, Enanos y Elfos",
            b:  "Elfos, Hombres y Orcos",
            c:  "Enanos, Hobbits y Hombres",
            d:  "Elfos, Orcos y Dragones",
        },
        correctAnswer: "b"
    },

    {
        question:"¿Cuál es la criatura que lleva más tiempo viviendo en la Tierra Media?",
        answers: {
            a:  "Gandalf",
            b:  "El Balrog",
            c:  "Tom Bombadil",
            d:  "Ella Laraña",
        },
        correctAnswer: "c"
    },

    {
        question: "¿Quién es el actual Rey de Gondor?",
        answers: {
            a:  "Frodo",
            b:  "Boromir",
            c:  "Aragorn",
            d:  "Isildur",
        },
        correctAnswer: "c"
    }
]


function buildQuiz(){
    const output = [];

    myQuestions.forEach ((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            
        
        
        answers.push( 
            `<label> 
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} : 
            ${currentQuestion.answers[letter]}
            </label>`
        );

      
     }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join('')} </div>`

        );

    }
  );

  quizContainer.innerHTML = output.join('');
}


function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
        previousButton.style.display = "none";
    }

    else {
        previousButton.style.display = "inline-block";
    
    }

    if (currentSlide === slides.length-1){
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    }
    else{
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function showNextSlide() {
    showSlide(currentSlide+1)
}

function showPreviousSlide() {
    showSlide (currentSlide-1)
}




function showResults(){
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion,questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]: cheked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
        }
 
    }
     
    );

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}






buildQuiz();






previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener("click", showResults);




























// const quizQuestion = [
//     // 1
//     { question: "¿En qué trabaja Sam antes de viajar a Mordor?" },

//     // 2

//     { question: "¿En qué puerta se puede leer el rótulo: <<Di amigo y entra>>?"}

//     // 3

//     {
//          question: "¿A qué tres razas pertenecen los muertos de la Ciénaga de los Muertos" }

//     // 4

//     {
//          question: "¿Cuál es la criatura que lleva más tiempo viviendo en la Tierra Media?" }

//     // 5

//     {
//          question: "¿Quién es el rey de Gondor?"}
// ]

// const quizAnswer = [
//     // 1
//     {  answer: ["Camarero", "Desempleado", "Jardinero", "Paleontólogo"],
//     expected: 3,}

//     // 2
//     {answer: ["Bolsón Cerrado", "Puerta de Bree", "Casa de Elrond", "Puerta de Moria"],
//     expected: 4,}
    
//     // 3
//     { answer: ["Hombres, enanos y elfos", "Elfos, hombres y orcos", "Enanos, hobbits y hombres"],
//     expected: 3,}
    
//     //  4
//     {answer: ["Gandalf", "El Balrog", "Tom Bombadil", "Ella Laraña"],
//     expected: 2,}

//     // 5
//     {answer: ["Frodo", "Boromir", "Aragorn", "Faramir"],
//     expected: 3}
// ]


// class galleryOfQuestions {

//     constructor(questions) {

//         this.questions = questions;

//     }

//     getRandomQuestions() {

//         let pregunta = Math.floor(Math.random()*this.questions.length)
//         return this.questions[pregunta]
//     }
// }

// class Painter {

//     constructor () {

//         this.createLegend();
//         this.createLabel();
//         this.createInput();
       
//     }

//     createLegend(question) {

//         let questions = document.createElement("legend");
//         questions.document.write()
//         questions = question;
//         document.querySelector("form").appendChild(this.questions);
//     }

//     createLabel(answer) {

//         let nameAnswer = document.createElement("label");
//         nameAnswer = answer;
//         document.querySelector("form").appendChild(this.nameAnswer); 

//     }

//     createInput(element) {
        
//         let inputAnswer = document.createElement("input");
//         inputAnswer = element;
//         document.querySelector("form").appendChild(this.iputAnswer)

//     }

//     paintAnswer(arrayOfAnswers) {
        
//         arrayOfAnswers.forEach((element) => {this.createLabel(element)})
//     }

// }


// const quizFriki = new galleryOfQuestions (quizQuestion, quizAnswer);
// const painter = new Painter();