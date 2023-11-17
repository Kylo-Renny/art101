//experiments.js
//This is an Experimemt Folder
//Author: Ren Murphy
//Creation Date: 11/15/23

//Experiment 1 - Prompt 11/15/23
console.log("Javascript is Working!");

$("#my-button").click(function() {
    console.log("Button Clicked!");
});

$("#my-button").click( function() {

    var name = prompt("Gimmie Your Name Please:");

    $('#title').html('Hello ' + name);
    });

//////////////////////////////////////////////////////
//Experiment 2 - Data Input 11/17/23

$('#my-second-button').click(function() {

    var inputValue = $("#my-input").val();

    console.log("Your input:", inputValue);

    console.log("Button Clicked!");

    var name =$("#my-input").val()

    console.log("Prompt returned" + name);

    $('#title2').html('Hello ' + name +"!");
      
    });

//////////////////////////////////////////////////////
//Experiment 3 - Anagram Attempt (Personal)    

    
      
      
