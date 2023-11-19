// index.js - Lab 11 - JavaScript Events and Forms
// Author:Ren Murphy
// Date:11/20/21

// Define Variables - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version. JavaScript must be loaded for this script to work

// Generates an anagram of any given string.
// Anagram credited to ChatGPT using the Fisher-Yates (Knuth) shuffle algorithm to shuffle the characters by turning the string into an array to resort and then back into a string again. 

function anagram(inputString) {
    const charArray = inputString.split('');
    for (let i = charArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }

    const anagram = charArray.join('');
    return anagram;
   }
////////////////////////////////////////////
   String.prototype.toTitleCase = function() {
     return this.replace(/\w\S*/g, function(txt) {
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
   };
////////////////////////////////////////////
   function sortString(inputString) {
       return inputString.split('').sort().join('');
   }

///////////////////////////////////////////
$('#my-button').click(function() {

    var inputValue = $("#my-input").val();

    console.log("Your input:", inputValue);

    console.log("Button Clicked!");

    var name =$("#my-input").val()

    newName = anagram(name).toTitleCase();

    console.log("Prompt returned" + name);

    $('#title').html('Hello, ' + newName +"!");

    alert("Weird, the Lab changed. You should check it out.")

    });
////////////////////////////////////////////