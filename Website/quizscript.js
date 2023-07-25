const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Saturn", "Jupiter", "Neptune"],
      correctAnswer: "Jupiter"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "N2", "O2"],
      correctAnswer: "H2O"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Mercury", "Jupiter"],
      correctAnswer: "Mars"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const questionData = questions[currentQuestion];
  
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = "";
  
    questionData.options.forEach((option, index) => {
      const optionElement = document.createElement("button");
      optionElement.textContent = option;
      optionElement.onclick = () => checkAnswer(option);
      optionsElement.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestion];
  
    if (selectedOption === questionData.correctAnswer) {
      score++;
    }
  
    const submitBtn = document.getElementById("submitBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
  
    const options = document.getElementById("options").getElementsByTagName("button");
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
      if (options[i].textContent === questionData.correctAnswer) {
        options[i].style.backgroundColor = "#4CAF50"; // Highlight correct answer
      }
      if (options[i].textContent === selectedOption) {
        options[i].style.backgroundColor = "#f44336"; // Highlight selected option
      }
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    const submitBtn = document.getElementById("submitBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    if (currentQuestion < questions.length) {
      submitBtn.style.display = "block";
      nextBtn.style.display = "none";
      const options = document.getElementById("options").getElementsByTagName("button");
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        options[i].style.backgroundColor = "#4CAF50"; // Reset option background color
      }
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <h1>Quiz Result</h1>
      <p>Your score: ${score} out of ${questions.length}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
  }
  
  displayQuestion();
  