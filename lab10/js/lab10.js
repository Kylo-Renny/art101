// index.js - Lab 10 - Javascript for the Web
// Author:Ren Murphy
// Date:11/17/21

// JQuery must be loaded for this script to work.

function generateRandomText() {
    ///Give the Text it Randomizes
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    ///The Smallest Message
    const min = 3;
    ///The Largest Message
    const max = 300;

    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  
// click listener for button
$("#make-convo").click(function(){
    ///get a new fake dialogue
    const newText = generateRandomText();
    ///append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');

});





