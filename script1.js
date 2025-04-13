const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", " Hyper Text Markup Language", "Hyper Text Machine Language"],
        answer: " Hyper Text Markup Language"
  
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: "<a>"  
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<line>"],
        answer: "<br>"  
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "css"],
        answer: "style"  
    },
    {
        question: "What is the purpose of the <head> tag in HTML?",
      options: ["To define the main content of the document", "To define metadata and links to external resources", "To define a header for the document", "To define a footer for the document"],
      answer: "To define metadata and links to external resources"
    },
    {
        question: "What does CSS stand for?",
      options: ["Computer Style Sheets", " Colorful Style Sheets", "Cascading Style Sheets", " Creative Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: "color"
    },
    {
        question: "How do you select an element with the ID 'header' in CSS?",
      options: [".header","#header","header","*header"],
      answer: "#header"
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
      options: ["line-height", "letter-spacing", "text-spacing", "word-spacing"],
      answer: "line-height"
    },
    {
        question: "What is the default display property of a <div> element?",
      options: ["inline", "block", "inline-block", "flex"],
      answer: "block"
    },
  ];
  
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");
  const totalElement = document.getElementById("total");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Start Quiz
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
  });
  
  // Load Question
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-btn");
      button.addEventListener("click", () => selectAnswer(option));
      optionsElement.appendChild(button);
    });
    nextBtn.classList.add("hidden");
    feedbackElement.textContent = "";
  }
  
  // Select Answer
  function selectAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      feedbackElement.textContent = "Correct! 🎉";
      score++;
    } else {
      feedbackElement.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
    }
    nextBtn.classList.remove("hidden");
  }
  
  // Next Question
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  // Show Result
  function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreElement.textContent = score;
    totalElement.textContent = quizData.length;
  }
  
  // Restart Quiz
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  });