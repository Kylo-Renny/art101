// index.js - Lab 9 - Libraries & JQuery
// Author:Ren Murphy
// Date:11/13/21

// The Goal is to make JQuery Operational in this lab

$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){

    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("specialone");
});

//////////////////////////////////////////////////////////////////////////////////////
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the problems button
$("button-problems").click(function(){

    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("specialtwo");
});

//////////////////////////////////////////////////////////////////////////////////////
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("button-results").click(function(){

    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("specialthree");
});