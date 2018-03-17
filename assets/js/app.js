
$(document).ready(function () {
    var options triviaOptions = [
        {
            question: "The first few questions refer to the main song. Meet George Jetson.... His boy ____?", 
            choice: ["Jane", "Elroy", "Judy", "George"],
            answer: 1,
         },
         {
            question: "Who is the robot maid?", 
            choice: ["Rosie", "Bender", "R2-D2", "Wall-E"],
            answer: 0,
         }, 
         {
            question: "What is the dog's name?", 
            choice: ["Courage", "Goofy", "Astro", "Scooby" ],
            answer: 2,
        }, 
        {
            question: "Help! Help, Jane! Stop this crazy thing! This is the sign off following the end credits of every episode. What does George need Jane to stop?", 
            choice: ["Radio", "Heater", "Treadmill", "Car" ],
            answer: 2,
            
        }, 
        {
            question: "What is George's boss' first and last name??", 
            choice: ["Cosmo Kramer", "Bill Murray", "Jimmy Neutron", "Cosmo Spacely" ],
            answer: 3,
            
        
        }];
    
    var correctAnswer = 0;
    var wrongCoAnswer = 0;
    var unanswer = 0;
    var timer = 20;
    var intervalId;
    var userGuess ="";
    var timerRunning = false;
    var pick;
    var index;
    
    

    $("#start").on("click", function () {
            $(this).hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
            push(triviaOptions[i]);
    }
        })

    function TimerStarted(){
    {
        intervalId = setInterval(decrement, 1000); 
       
        }
    }
    
    //Create Trivia questions, options, and correct answer, compiled into js objects and create properties for them
    //create variables that hold counters
    //create start button and loop to start game and start timer
    //display time remaining on top of page
    //track score of correct, incorrect, and timed out answers
    //show correct and incorrect message to user
    //move to next question without next button after question is answered or run out time 
    // display correct and incorrect answers at end of page  