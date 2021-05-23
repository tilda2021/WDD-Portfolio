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
