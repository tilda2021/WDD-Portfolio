/* WEEK 06
Chaper 11 & 13: Further Functions, and Ajax
QUIZ NINJA PROJECT 

Functions have built-in properties such as length , but can have custom properties added.

All functions have call() and apply() methods that can invoke a function with the value of this bound to an object that is provided as an argument.

Immediately Invoked Function Expressions or IIFEs are functions that are enclosed in parentheses and immediately followed by double parentheses so they’re invoked. They are useful for namespacing variables and setting default values.

Functions are able to dynamically redefine themselves in the body of the function, depending on certain conditions.

A recursive function will keep invoking itself until a certain condition is met.

A callback is a function that’s provided as an argument to another function.

Callbacks are frequently used in asynchronous programming as part of the event loop. This means that a program can continue to run in a single thread while waiting for another task to be completed.

Promises can be used instead of callbacks to deal with multiple asynchronous actions in sequence. They also provide a nicer mechanism for handling errors.

Functions that return other functions are known as higher-order functions.

A closure is the process of keeping a reference to a variable available outside the scope of the function it was originally defined in.

A generator is created by placing an asterisk character (*) after the function keyword.

A generator function will return an iterator object that provides a next() method, which returns the next value in a sequence that is defined in the generator function.

Functional programming involves breaking processes down into steps that can be applied as a series of functions.

Pure functions are functions that don't rely on the state of the code they are called from, have no side-effects, and always give the same result when given the same arguments (referential transparency).

Currying or partial application is the process of applying one argument at a time to a function. A new function is returned until all the arguments have been used.

AJAX

Ajax is a technique for sending and receiving data asynchronously in the background.

The data can be sent in many forms, but it is usually in JSON.

Ajax can be used for making partial page updates without having to do a full page reload.

Ajax can be used for communicating with external APIs.

Ajax requests can be made using the Fetch API.

The Response interface allows you to control the response received from a request or to create your own response objects.

The Request interface allows you to create a request object that contains information about the request being made, such as the URL and headers.

The Headers interface allows you to create HTTP headers that can be added to a request or response object.

Requests can retrieve data using a GET request, or send data using a POST request.

The FormData interface makes it easier to send data from forms.

*/
const url = 'http://spbooks.github.io/questions.json';
fetch(url)
.then(res => res.json())
.then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});

function random(a,b=1){
    //if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}
function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

/* Chaper 5 & 6: Objects  */
/* QUIZ NINJA PROJECT */
/* WEEK 05
Chapter 10: TESTING AND DEBUGGING

Debugging is basically an error check. It is the process of finding out where buggs occur in our code and then fixing them. 
Testing and Debugging are important to prevent failures in programs that may be difficult to spot and fix.
To be a successful programmer, one must learn to master the act of testing and debugging
There are many reasons why an error might occur in our code, a few are;
    * System Error
    * Programmer Error e.g incorrect syntax, and typo
    * User Error
     
Exception: Exceptions are errors that return a value that can be used by the program to fix the error

Stack Traces: These are sequence of functions or method calls that lead to the point where the error occurred.

Warnings: Warnings occur if there is an error in the code that is not severe enough to cause the program to crash for example, a warning about an undeclared variable

Strict Mode can be set when coding to improve clarity and speed. It throws exceptions when something is wrong with the code.
To use the strict mode, add this string 'use strict'; to the first line of a JavaScript file.

Linting Tool: Examples of linting tools are JS Lint, JS Hint, and ES Lint. These can be used to test the quality of JavaScript code.
Passing a lint test is not a guarantee that a code is correct but it means the code is more consistent and unlikely to have problems.

Feature Detection: This checks whether a method is supported before it is called, this helps to avoid an exception from being thrown

The console and browser's have built-in debugging tool that can be used to interactively find and fix bugs in code

Throw Statement: This can be applied to any JS expression to stop the execution of thhe program.

Error Object: Eror objects can be created by the host environment when an exception occurs, or it can be created in the code using a constructor function in this manner,

        "const error = new Error();"

Any code placed inside a try block will pass any error objects to a catch block when an exception occurs. Any code inside a finally block will run if an exception does or does not occur.

Test-driven development is the practice of writing tests that fail, then writing the code that passes the test, then refactoring the code every time a new feature is implemented.

The Jest framework can be used to test your code.
 */
const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"}
];
const game = {
    start(quiz){
        console.log('start() invoked');
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
        
        //main game loop
        for(const question of this.questions){
            this.question = question;
            this.ask();
        }
        //end of main loop
        this.gameOver();
    },
     //View Object
     const view = {
        score: document.querySelector('#score strong'),
        question: document.getElementById('question'),
        result: document.getElementById('result'),
        info: document.getElementById('info'),
        start: document.getElementById('start'),
        response: document.querySelector('#response'),
        setup(){
            this.show(this.question);
            this.show(this.response);
            this.show(this.result);
            this.hide(this.start);
            this.render(this.score,game.score);
            this.render(this.result,'');
            this.render(this.info,'');
            this.resetForm();
        }
        teardown(){
            this.hide(this.question);
            this.hide(this.response);
            this.show(this.start);
        }
        resetForm(){
            this.response.answer.value = '';
            this.response.answer.focus();
        }
        show(element){
            element.style.display = 'block';
        },
        hide(element){
            element.style.display = 'none';
        }
        render(target,content,attributes) {
            for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
}
    ask(name){
        console.log('ask() invoked');
       // const question = `What is ${this.question.name}'s real name?`;
       // const response = prompt(question);
       // this.check(response);
       if(this.questions.length > 0) {
        shuffle(this.questions);   
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
    }
    else {
        this.gameOver();
    }
    },
};
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            alert('Correct');
            this.score++;
            } else {
                view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
                alert(`Wrong! The correct answer was ${answer}`);
            }
        },
       /* check(event){
            event.preventDefault();
            const response = view.response.answer.value;
            const answer = this.question.realName;
            if(response === answer){
                view.render(view.result,'Correct!',{'class':'correct'});
                this.score++;
                view.render(view.score,this.score);
            } else {
                view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
            }
            this.ask();
        },
        gameOver(){
            view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);


        }
    }*/
    check(event){
        console.log('check(event) invoked');
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        gameOver(){
            console.log('gameOver() invoked');
            view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
            view.teardown();
        }
        view.resetForm();
        this.ask();
    }
}
//Include the namespace in the function that starts the game
//game.start(quiz);
view.hide(view.start);
view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
