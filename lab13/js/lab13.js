// index.js - Lab 7 - Functions
// Author:Ren Murphy
// Date:11/3/21

// Define Variables

$("#submit").click(function fizzBuzzBoom() {
    //set the numerical parameters
    for (var i=1; i<=200; i++) {
      
    //for numbers that are multiples of 3, 5, and 7
    //print FizzBuzzBoom!
    if (i % 3===0 && i % 5===0 && i % 7===0) {
        console.log("FizzBuzzBoom!");
        $("#output").append("<p> FizzBuzzBoom! </p>");
    }
    
    //for numbers that are multiple of 3 and 5 
    //print FizzBuzz
    else if (i % 3===0 && i % 5===0) {
        console.log("FizzBuzz!");
        $("#output").append("<p> FizzBuzz! </p>");
    }
    
    //for numbers multiples of 3 and 7
    //print FizzBoom!
    else if (i % 3===0 && i % 7===0) {
        console.log("FizzBoom!");
        $("#output").append("<p> FizzBoom! </p>");
    }
    
    //for numbers multiples 5 and 7
    //print BuzzBoom!
    else if (i % 5===0 && i % 7===0) {
        console.log("BuzzBoom!");
        $("#output").append("<p> BuzzBoom! </p>");
    }
    
    //for numbers multiples of 3 
    //print Fizz!
    else if (i % 3===0) {
        console.log("Fizz!");
        $("#output").append("<p> Fizz! </p>");
    }
    
    //for numbers multiples of 5
    //print Buzz!
    else if (i % 5===0) {
        console.log("Buzz!");
        $("#output").append("<p> Buzz! </p>");
    }
    
    //for numbers multiples of 7
    //print Boom!
    else if (i % 7===0) {
        console.log("Boom!");
        $("#output").append("<p> Boom! </p>");
    }
    
    else {
        console.log (i);
        $("#output").append("<p>" + i + "</p>");
    }
    
    }
    });
    