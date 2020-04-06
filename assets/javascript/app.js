//on open, title and start button show
//when start is clicked:
//timer starts counting down
//questions appear with answer options beneath them
//player is able to select options
//player can only select one option per question
//when timer stops screen shows correct/incorrect/unanswered
//if player finishes questions before timer:
//click "done" button
//screen shows correct/incorrect/unanswered

$(document).ready(function() {
  
  var correct = "";
  var incorrect = "";
  var unanswered = "";
  var timer = 60;
  var timerOn = false;

  var questions = $(".questions");

  var triviaQuestions = [
    {
      question: "What pet did Harry Potter Have?",
      options: ["Toad", "Owl", "Lizard", "Cat"],
      answer: "1"
    },
    {
      question: "How did students get to Hogwarts?",
      options: ["Car", "Brooms", "Train", "Magic Carpets"],
      answer: "2"
    },
    {
      question: "Who tried to kill Harry?",
      options: ["Snape", "Hagrid", "Voldemort", "Dudley"],
      answer: "2"
    },
    {
      question: "What is the house number Harry grew up in?",
      options: ["Four", "Twelve", "Six", "Fourteen"],
      answer: "0"
    },
    {
      question: "Who told Harry he was a wizard?",
      options: ["Dumbledore", "McGonagall", "Snape", "Hagrid"],
      answer: "3"
    },
    {
      question: "What was Harry's dad's name?",
      options: ["Joe", "Sirius", "James", "Remus"],
      answer: "2"
    },
    {
      question: "Who has a half brother that's a giant?",
      options: ["Hagrid", "Ron", "Harry", "Hermoine"],
      answer: "0"
    },
    {
      question: "What position does Harry play in Quidditch?",
      options: ["Beater", "Seeker", "Chaser", "Squabbler"],
      answer: "1"
    }
  ];

  $(".startButton").on("click", function() {
    console.log("The Game Has Started!");
    $(".startButton").remove()
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    countDown()
    startTrivia();
  });

  function startTrivia() {
    for (var index = 0; index < triviaQuestions.length; index++) {
      var question = $("<p>");
      question.text(triviaQuestions[index].question);

      for (var i = 0; i < triviaQuestions[index].options.length; i++) {
        var option = $("<label class ='btn btn-secondary'>");
        var input = $(
          `<input type='radio' id='option${i + 1}' name='option${i + 1}'>`
        );
        option.append(input)
        option.text(triviaQuestions[index].options[i])
        question.append(option)
      }
      questions.append(question);
    }
    $(".btn").on("click", function(guess){
      
      var id = $(this).attr()
      if (id === answer){
        correctAnswer()
        console.log("correct")
      }
      else if (id === answer){
        incorrectAnswer()
        console.log("incorrect")
      }
      else {
        unansweredAnswer()
      }
    })
  }

  

  function correctAnswer(){
    correct++
  }

  function incorrectAnswer(){
    incorrect++
  }

  function unansweredAnswer(){
    unanswered++
  }

  function countDown (){
    timer = setInterval(timer, 1000);
    if (!timerOn){
      timerOn = true
      timer--
      $(".timeCounter").text("Time", timer)
    }
    if (timer === 0){
      clearInterval()
      gameOver()
    }
  }

  setInterval(countDown, 1000)

  function gameOver (){
    $(".questions").empty()

  }
});
