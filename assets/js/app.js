
var panel = $("#trivia-area");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "Which soap opera does Joey act in?",
  answers: ["All my Children", "Days of our lives", "General Hospital", "The Young and the Restless"],
  correctAnswer: "Days of our lives",
  image: "https://media.giphy.com/media/lI6nHr5hWXlu0/giphy.gif"
}, {
  question: "What borough of New York does the gang live in?",
  answers: ["Queens", "Brooklyn", "Bronx", "Manhattan"],
  correctAnswer: "Manhattan",
  image: "https://media.giphy.com/media/8IqEMUfybiNri/giphy.gif"
}, {
  question: "What is Ross scared of??",
  answers: ["Chickens", " Spiders ", "Birds", "Dinosaurs"],
  correctAnswer: " Spiders ",
  image: "https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif"
}, {
  question: " What was the name of the character Joey played on 'Days of Our Lives'?",
  answers: ["Dr. Gregory House", "Dr. John Zoidberg", "Dr. Derek Sheperd", "Dr. Drake Ramoray "],
  correctAnswer: "Dr. Drake Ramoray ",
  image: "https://media.giphy.com/media/lfmYxOkGpNtEk/giphy.gif"
}, {
  question: "What was the name of Chandler's annoying ex-girlfriend?",
  answers: ["Monica", "Janice", "Rachel", "Poebe"],
  correctAnswer: "Janice",
  image: "https://media.giphy.com/media/ld1RKulOqeeaI/giphy.gif"
}, {
  question: "What instrument does Phoebe play?",
  answers: ["Trumpet", "Violin", "Guitar ", "Flute"],
  correctAnswer: "Guitar",
  image: "https://media.giphy.com/media/3OIef7pgio7Is/giphy.gif"
}, {
  question: "What was the name of the department store that Rachel worked for?",
  answers: ["Macys", "Bloomingdales", "JCPenny", "TJMaxx"],
  correctAnswer: "Bloomingdales",
  image: "https://media.giphy.com/media/wMARdz65eIX0Q/giphy.gif"
}, {
  question: "Ross was which of these?",
  answers: ["Lawyer", "Accountant", "Doctor", "Teacher"],
  correctAnswer: "Doctor",
  image: "https://media.giphy.com/media/pPr0e5tqtCwTe/giphy.gif"
}];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    panel.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(this.counter);

    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    panel.html("<h2>Nope!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    panel.html("<h2>Correct!</h2>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion.bind(game)();
});
