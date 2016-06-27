





var Model = function(questions) {
    this.questions = questions;
    this.score = 0;
};


Model.prototype.resetScore = function() {
    this.score = 0;
    // TODO: Notify observers

};

Model.prototype.increaseScore = function() {
    this.score++;
    // TODO: Notify observers
};

Model.prototype.setQuestion = function(questionIndex) {
    this.question = QUESTIONS[questionIndex];
    // questionCurrentElement.text(questionIndex);
    // questionElement.text(question.text);
    // answersElement.empty();
    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        answersElement.append('<li><button type="button">' + answer + '</button></li>');
    // TODO: Notify observers
    }
};


//Example  --->
// Model.prototype.reset = function(value) {
//     this.text = value.toUpperCase();
//     if (this.onChange) {
//         this.onChange(this.text);
//     }
// };

var View = function() {
    //Present questions to user
};




var Controller = function() {

};






var QUESTIONS = [{
    text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    correct: 0
}, {
    text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    correct: 1
}, {
    text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    correct: 2
}, {
    text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
    answers: [
        '0815',
        '2B',
        'BAM128',
        'Barely'
    ],
    correct: 3
}];

var questionsPageElement = $('.questions-page');
var questionCurrentElement = $('.question-current');
var questionsTotalElement = $('.questions-total');
var questionElement = $('.question');
var answersElement = $('.answers');

var resultsPageElement = $('.results-page');
var scoreElement = $('.score');
var restartButtonElement = $('.restart-button');

var showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};

var showQuestions = function() {
    resultsPageElement.hide();
    questionsPageElement.show();
};

answersElement.on('click', 'button', function() {
    var choice = $(this).parent().index();
    var questionIndex = parseInt(questionCurrentElement.text(), 10);
    var question = QUESTIONS[questionIndex];
    if (question.correct === choice) {
        increaseScore();
    }

    if (questionIndex + 1 < QUESTIONS.length) {
        setQuestion(questionIndex + 1);
    } else {
        showResults();
    }
});

restartButtonElement.click(function() {
    setQuestion(0);
    resetScore();
    showQuestions();
});




$(document).ready(function() {
    questionsTotalElement.text(QUESTIONS.length);
    setQuestion(0);
});
