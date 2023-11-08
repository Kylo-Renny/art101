// index.js - Lab 7 - Functions
// Author:Ren Murphy
// Date:11/3/21

// Define Variables - sortName - a function that takes user input and sorts the letters of their name
function sortName() {
    var userName = window.prompt("Hey there! Can I get your name?");
    console.log("userName =",userName);

    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =",nameArray);

    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);

    //join array back to a string
    var nameSorted = nameArraySort.join('');

    console.log("nameSorted =", nameSorted);
    userName.toLowerCase().split('').sort().join('')
    userName.toUpperCase().split('').sort().join('')
    return nameSorted;
}

//output
document.writeln("Actually it broke so you can have it back: ",
    sortName(), "</br>");
