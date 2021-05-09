/* Chaper 5 & 6: Objects  */
/* QUIZ NINJA PROJECT */

const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"}
];
const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        
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
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
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
        gameOver(){
            view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);


        }
    }
}
//Include the namespace in the function that starts the game
game.start(quiz);
view.hide(view.start);
view.start.addEventListener('click', () => game.start(quiz), false);
