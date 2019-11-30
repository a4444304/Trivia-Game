$(document).ready(function(){

    var radioValues = [];
    var correctValues = ['Nashville','Irises', 'Northern Mockingbird','Great Smoky Mountains National Park','Beale Street'];
    var correct = 0;
    var wrong = 0; 
    var unanswered = 0;
    var title = "<h1 id='title'>Tennessee Trivia Game</h1>";
    var time = 30;

    setTimeout(timeUp, 1000 * 30);

    intervalId = setInterval(count, 1000);

    function count() {

        // Increment time by 1
        time--;
      
        // Getting the current time, pass that into the timeConverter function,
        // and then save the result in a variable.
        var converted = timeConverter(time);
        console.log(converted);
      
        // Use the variable(converted)to show the converted time in the "display" div.
        $("#display").text("Time left: " + converted);
      }
      


    function timeConverter(t) {

        var minutes = Math.floor(t / 30);
        var seconds = t - (minutes * 30);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      }
      
      


function timeUp(){

    var radioValue1 = $("input[name='Capital']:checked").val();
    if(radioValue1){
        if(radioValue1 == correctValues[0]){
            correct++
           // radioValues.push(radioValue1);
          //  alert("You selected: " + radioValue1);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue2 = $("input[name='flower']:checked").val();
    if(radioValue2){
        if(radioValue2 == correctValues[1]){
            correct++;
        //    radioValues.push(radioValue2);
       //     alert("You selected: " + radioValue2);
        }
        else{
                wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue3 = $("input[name='bird']:checked").val();
    if(radioValue3){
        if(radioValue3 == correctValues[2]){
            correct++;
     //       radioValues.push(radioValue3);
    //        alert("You selected: " + radioValue3);
        }
        else{
            wrong++;
        }
    }
        else{
            unanswered++;
        }

    var radioValue4 = $("input[name='park']:checked").val();
    if(radioValue4){
        if(radioValue4 == correctValues[3]){
            correct++;
      //      radioValues.push(radioValue4);
     //       alert("You selected: " + radioValue4);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue5 = $("input[name='blues club']:checked").val();
    if(radioValue5){
        if(radioValue5 == correctVals[4]){
            correct++;
       //     radioValues.push(radioValue5);
       //     alert("You selected: " + radioValue5);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }

    

        $(".container").html(title + "Correct answers: " + correct + " Wrong answers: " + wrong + " Unfinished answers: " + unanswered);
    }

    //  $("input[type='radio']").click(function(){
   // });


});  