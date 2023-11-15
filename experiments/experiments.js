//experiments.js
//This is an Experimemt Folder
//Author: Ren Murphy
//Creation Date: 11/15/23

//Experiment 11/15/23
console.log("Javascript is Working!");

$("#my-button").click(function() {
    console.log("Button Clicked!");
});

$("#my-button").click(
    function() {

    var name = prompt("Gimmie Your Name Please:");

    $('#title').html('Hello ' + name);
    });
//////////////////////////////////////////////////////
 