// index.js - Lab 9 - Libraries & JQuery
// Author:Ren Murphy
// Date:11/13/21

// The Goal is to make JQuery Operational in this lab

$("#challenge").append("<button id='button-challenge'>Click Me!</button>");


$("#button-challenge").click(function(){

   
    $("#challenge").toggleClass("specialone");
});

//////////////////////////////////////////////////////////////////////////////////////

$("#problems").append("<button id='button-problems'>Click Me!</button>");


$("#button-problems").click(function(){

    $("#problems").toggleClass("specialtwo");
});

//////////////////////////////////////////////////////////////////////////////////////

$("#results").append("<button id='button-results'>Click Me!</button>");

$("#button-results").click(function(){

    $("#results").toggleClass("specialthree");
});