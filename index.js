///////////
// Model //
///////////

var Model = function(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
    this.onScoreUpdate = null;
    this.onQuestionUpdate = null;
};

Model.prototype.resetScore = function() {
    this.score = 0;
};

Model.prototype.increaseScore = function() {
    this.score++;
    if (this.onScoreUpdate) {
        this.onScoreUpdate(this.score);
    }
};

Model.prototype.nextQuestion = function() {
    this.currentIndex++;
    this.question = this.questions[this.currentIndex];
    if (this.onQuestionUpdate) {
        this.onQuestionUpdate(this.question);
    }
    console.log(this.onQuestionUpdate);
};

//////////
// View //
//////////
var View = function() {
    this.questionsPageElement = $('.questions-page');
    this.questionCurrentElement = $('.question-current');
    this.questionsTotalElement = $('.questions-total');
    this.questionElement = $('.question');
    this.answersElement = $('.answers');

    this.resultsPageElement = $('.results-page');
    this.scoreElement = $('.score');
    this.restartButtonElement = $('.restart-button');
};

View.prototype.updateQuestion = function(question) {
    console.log(question, '<--- question');
    this.questionElement.text(question.text);
};

View.prototype.updateScore = function(score) {
    this.scoreElement.text(score);
    console.log(this.scoreElement);
    //console.log(updateScore, 'update score');
    console.log(score);
};

////////////////
// Controller //
////////////////

var Controller = function(model, view) {
    this.model = model;
    this.view = view;

    model.onScoreUpdate = view.updateScore.bind(view);
    // model.increaseScore();
    // model.increaseScore();
    //
    model.onQuestionUpdate = view.updateQuestion.bind(view);

    model.nextQuestion();
};

///////////////////
// Hooking it up //
///////////////////
$(document).ready(function() {
    var myModel = new Model(QUESTIONS);
    var myView = new View();
    var myController = new Controller(myModel, myView);
});

///////////////////
// Original Code //
///////////////////
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

var showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};

var showQuestions = function() {
    resultsPageElement.hide();
    questionsPageElement.show();
};

// var setQuestion = function( questionIndex ) {
//   var question = QUESTIONS[ questionIndex ];
//   questionCurrentElement.text( questionIndex );
//   questionElement.text( question.text );
//   answersElement.empty();
//   for ( var i = 0; i < question.answers.length; i++ ) {
//     var answer = question.answers[ i ];
//     answersElement.append( '<li><button type="button">' + answer + '</button></li>' );
//   }
// };

// answersElement.on( 'click', 'button', function() {
//   var choice = $( this ).parent().index();
//   var questionIndex = parseInt( questionCurrentElement.text(), 10 );
//   var question = QUESTIONS[ questionIndex ];
//   if ( question.correct === choice ) {
//     increaseScore();
//   }

//   if ( questionIndex + 1 < QUESTIONS.length ) {
//     setQuestion( questionIndex + 1 );
//   } else {
//     showResults();
//   }
// } );

// restartButtonElement.click( function() {
//   setQuestion( 0 );
//   resetScore();
//   showQuestions();
// } );
