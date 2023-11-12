// index.js - Lab 8 - Anon Functions & Callbacks
// Author:Ren Murphy
// Date:11/6/21

// Console Experiments

//my function that multiplies by 10
function youMultiply(x){
    return x * 10;
}

//my array numbesr
array = [23,123,654,34,768]

//the callback
array.map(youMultiply);

//the anon callback
array.map(function(x) {
    var results = x * 0.5
    return results;
})




//results
console.log("Here are my numbers", results);