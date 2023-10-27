// index.js - Lab 6 - Objects and Arrays
// Author:Ren Murphy
// Date:10/28/21

// Define Variables
myTransport = ["Toyota Corolla Cross", "eBike", "Bus"];

//create an object for my main ride
myMainRide = {
  make : "Toyota",
  model : "Corolla Cross",
  color : "Celestial Blue",
  year : 2023,
  age : function() {
    return 2023 - this.year;
  }
}


//output
document.writeln("Kinds of transportation I use:", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
