// index.js - Lab 12- Conditionals
// Author:Ren Murphy
// Date:11/24/21

// Define Variables

////////////////////////////////////////////////////////////////////////////////////
// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on length mod 4
function sortingHatLength(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
      return "Gryffindor"
    }
    else if (mod == 1) {
      return "Ravenclaw"
    }
    else if (mod == 2) {
      return "Slytherin"
    }
    else if (mod == 3) {
      return "Hufflepuff"
    }
  }

///////////////////////////////////////////////////////////////////////////////////////

var myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
        var name = document.getElementById("input").value;
        var house = sortingHat (name);
        newText = "<p>The Sorting Hat has entered you into " + house + "</p>";
        document.getElementById("output").innerHTML = newText;
})

//////////////////////////////////////////////////////////////////////////////////////

function getHouse(num){
 // get the remainer divided by 4 of the length
    var remainder = num % 4;
 // create an if else to show house
    if (remainder == 0) {
    var str = "Gryffindor";
    } else if (remainder == 1) {
     var str = "Ravenclaw";
     } else if (remainder == 2) {
       var str = "Hufflepuff";
    } else if (remainder == 3) {
    var str = "Slytherin";
 }
    return str;
}

///////////////////////////////////////////////////////////////////////////////

$("#button").click(function(){
// get the value in the #input text box, asign to a varaiable name
var name = $("#input").val()
console.log(name);
// get the length of the name
var nameLength = name.length;
console.log(nameLength);
// get the house
var house = getHouse(nameLength);
console.log(house);
// add house to output div
$("#output").html("<h1>" + house + "</h1>");
 })