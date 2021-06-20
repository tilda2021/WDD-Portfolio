/* Chaper 2: Programming Basics
Global variables are variables declared outside of a block or scope. They can be accessed everywhere in the program.
This is a practice that is not advices. Keep global variables to the very minimum. Use only when necessary.
Good Practices: Use const to declare variables. Finish each line with a semicolon.


// Declare the variable 'question' as a constant
const question = "What is Superman's real name?";

// Prompt the user for an answer
const answer = prompt(question);

// Store the answer in 'alert' and display the answer to the user 
alert('Your answer ${answer}');

// When I tried to run the code above, I got an error message: ("This site can’t be reachedlocalhost refused to connect.")

 Chapter 3: Arrays, Logic and Loops 


// Create an array called 'quiz' that contains all the questions and answers
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

// Create and initialize a variable called 'score' to keep track of the players correct answers
let score = 0;

//Create a loop through the array using 'for-of' loop, assigning the variables 'question' and 'answer' to each key and value in the map 
for(const [question, answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else{
        alert('Wrong! The correct answer was ${answer}');
    }

// Report the player's score 
alert('Game Over, you scored ${score} point${score  ! == 1 ? 's' : ''}');
}
*/

//Rewriting the code using functions

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz){
    let score = 0;

    // main game loop
    for(const [question, answer] of quiz){
        const response = ask(question);
        check(response, answer);
    }

    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response, answer){
        if(response === answer){
            alert('Correct!');
            score++;
        } else {
            alert('Wrong! The correct answer was ${answer}');
        }

        function gameOver(){
            alert('Game Over, you scored ${score} point${score  ! ==  ! ? 's' : '' }');
        }
    }
}
start(quiz);

