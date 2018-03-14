/* global $ */

//Code for making the images interchangeably toggle
$(document).ready(function(){
    $("#1").slideUp();
});


//Code for the conversion of Inches to Miles
function toMiles(){
    var inInput = $("#inchInput").val();
    var answer = parseInt(inInput);
    answer = answer * 0.000015783;
    return  answer;
}

//the button event for the Inches to Miles
$("#convertI").click(function(){
   console.log(toMiles());
   $("#output").text(toMiles());
});


//Code for the Miles to Inches conversion, equal opportunity.
function toInches(){
    var miInput = $("#mileInput").val();
    var answer = parseInt(miInput);
    answer = answer / 0.000015783;
    return  answer;
}

//button for Miles to Inch conversion
$("#convertM").click(function(){
   console.log(toInches());
   $("#outputIn").text(toInches());
});


//Button to change the image on the left in a fun manner.
$("#here").click(function(){
   $("#1").slideToggle(500);
   $("#2").slideToggle(500);
});

