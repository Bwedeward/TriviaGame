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

$(document).ready(){

    correct: 0;
    incorrect: 0;
    unanswered: 0;
    timer: 60;
    timerOn: false;

    var triviaQuestions = [{
        question: "What pet did Harry Potter Have?"
        options: ["Toad", "Owl", "Lizard", "Cat"]
        answer: "1"
    }
    {
        question: "How did students get to Hogwarts?"
        options: ["Car", "Brooms", "Train", "Magic Carpets"]
        answer: "2"
    }
    {
        question: "Who tried to kill Harry?"
        options: ["Snape", "Hagrid", "Voldemort", "Dudley"]
        answer: "2"
    }
    {
        question: "What is the house number Harry grew up in?"
        options: ["Four", "Twelve", "Six", "Fourteen"]
        answer: "0"
    }
    {
        question: "Who told Harry he was a wizard?"
        options: ["Dumbledore", "McGonagall", "Snape", "Hagrid"]
        answer: "3"
    }
    {
        question: "What was Harry's dad's name?"
        options: ["Joe", "Sirius", "James", "Remus"]
        answer: "2"
    }
    {
        question: "Who has a half brother that's a giant?"
        options: ["Hagrid", "Ron", "Harry", "Hermoine"]
        answer: "0"
    }{
        question: "What position does Harry play in Quidditch?"
        options: ["Beater", "Seeker", "Chaser", "Squabbler"]
        answer: "1"
    }]

    function startTrivia(){
        
    }

    function countDown (){
        
    }

}