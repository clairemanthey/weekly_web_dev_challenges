(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // questions
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(let letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    // user answers
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // correct answer
      if(userAnswer === currentQuestion.correctAnswer){

        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show score
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
let myQuestions = [
  {
  question: "In SG-1 Episode frozen is in which season?",
  answers: {
    a: "Season 1",
    b: "Season 7",
    c: "Season 3",
    d: "Season 6",
  },
  correctAnswer: "b",
  },
  {
    question: "Who plays Vala Mal Doran?",
    answers:{
      a: "Amanda Tapping",
      b: "Amia Moretti",
      c: "Claudia Black",
      d: "Megan Fox",
    },
    correctAnswer: "c",
  },
    {
    question: "Who does the voice of Thor?",
    answers:{
      a: "Michael Shanks",
      b: "Joe Flannigan",
      c: "David Hewlett",
      d: "Walter Harriman",
    },
    correctAnswer: "a",
  },
   {
    question: "Who does Martin attempt to contact at the SGC?",
    answers:{
      a: "General Hammond",
      b: "Jack O'Neill",
      c: "Walter",
      d: "Daniel Jackson",
    },
    correctAnswer: "b",
  }, 
  {
    question: "Under normal circumstances how long can a wormhole stay open?",
    answers:{
      a: "45 minutes",
      b: "2 hours",
      c: "1 hr 28 minutes",
      d: "38 minutes",
    },
    correctAnswer: "d",
  },  
  {
    question: "What is the name of Daniel Jackson's wife?",
    answers:{
      a: "Sha're",
      b: "Ishta",
      c: "Hathor",
      d: "Melosha",
    },
    correctAnswer: "a",
  },  
  {
    question: "What planet is Teal'c from",
    answers:{
      a: "Chulak",
      b: "P3X-797",
      c: "P3X-7763",
      d: "Tollana",
    },
    correctAnswer: "a",
  },
  {
    question: "Who did Peter Williams play?",
    answers:{
      a: "Ra",
      b: "Hermoid",
      c: "Fifth",
      d: "Apophis",
    },
    correctAnswer: "d",
  },  
  {
    question: "What is the name of the Ancient who helped Daniel ascend?",
    answers:{
      a: "Athar",
      b: "Moros",
      c: "Oma Desala",
      d: "Ganos Lal",
    },
    correctAnswer: "c",
  },   
  {
    question: "Which species was the first host to the Goa'uld?",
    answers:{
      a: "Jaffa",
      b: "Unas",
      c: "Alterans",
      d: "Serrakin",
    },
    correctAnswer: "b",
  },   
];

  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
