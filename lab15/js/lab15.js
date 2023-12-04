// index.js - Lab 15 - AJAX
// Author:Ren Murphy
// Date:12/4/21

// First Test
const ENDPOINT = "https://icanhazdadjoke.com/"
// attach an event listener
$("#go").click(function(){
  // ajax this shit
  $.ajax({
    "url": ENDPOINT,
    "dataType": "json",
    "success": function(results){
      console.log(results);
 
      jokeText = results.joke;
      // add to output div 
      $("#output").append("<p>" + jokeText);
    },
      "error": function(){
      }
  })
})

// Second Test
//const ENDPOINT = "https://www.dnd5eapi.co/api/spells/"
// attach an event listener
//$("#go").click(function(){
  // ajax this shit
  //$.ajax({
    //"url": ENDPOINT,
    //"dataType": "json",
   // "success": function(results){
   //   console.log(results);
 
    //  jokeText = results.joke;
      // add to output div 
    //  $("#output").append("<p>" + jokeText);
   // },
     // "error": function(){
   //   }
 // })
//})