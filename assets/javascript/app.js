
$(document).ready(function (){
    
    $("#start").on("click",function() {
        game.start();
    })
    
    var questions = [ {
        question: "What is the capital of Tennessee?",
        answers:["Memphis","Nashville", "Chattanooga","Knoxville"],
        correctAnswer:"Nashville"
    }, {
        question: "What is the state flower of Tennessee?",
        answers:["Lily","Tulip", "Irises","Rose"],
        correctAnswer:"Irises"
    }, {
        question: "What is the state bird of Tennessee?",
        answers:["Northern Mockingbird","Blue Jay", "Hummingbird","Heron"],
        correctAnswer:"Northern Mockingbird"
    }, {
        question: "What is the country's most visited National Park?",
        answers:["Acadia National Park","Big Bend National Park", "Great Smoky Mountains National Park","Denali National Park"],
        correctAnswer:"Great Smoky Mountains"
    }, {
        question: "What street in Tennessee is famous for Blues Clubs?",
        answers:["Cedar Lane","Oak Street", "Abbey Road","Beale Street"],
        correctAnswer:"Beale Street"
    }];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is Up");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length;i++) {
            $("#subwrapper").append('<h2>'+questions[i].question+'</h2');
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type= 'radio' name= 'question-"+i+" 'value=' "+questions[i].answers[j]+"'>"+questions[i].answers[j]);
        }
    }
},
done: function(){
    $.each($('input[name= "question-0]":checked'),function(){
        if($(this).val()==questions[0].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name= "question-1]":checked'),function(){
        if($(this).val()==questions[1].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name= "question-2]":checked'),function(){
        if($(this).val()==questions[2].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name= "question-3]":checked'),function(){
        if($(this).val()==questions[3].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($('input[name= "question-4]":checked'),function(){
        if($(this).val()==questions[4].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    this.result();
    },

    result: function(){
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All Done</h2>");
        $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
    }




}