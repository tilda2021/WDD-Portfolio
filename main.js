/* Chaper 5 & 6: Objects  */
/* QUIZ NINJA PROJECT */

const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"}
];
const game = {
    start(quiz){
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
