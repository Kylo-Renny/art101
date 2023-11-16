// index.js - Lab 10 - Javascript for the Web
// Author:Ren Murphy
// Date:11/17/21

// JQuery must be loaded for this script to work.

function generateRandomText() {
    ///Give the Text it Randomizes
    const text = 'Somebody once told me the world is gonna roll me\nI ain\'t the sharpest tool in the shed\nShe was looking kind of dumb with her finger and her thumb\nIn the shape of an \"L\" on her forehead\nWell the years start coming and they don\'t stop coming\nFed to the rules and I hit the ground running\nDidn\'t make sense not to live for fun\nYour brain gets smart but your head gets dumb\nSo much to do, so much to see\nSo what\'s wrong with taking the back streets?\nYou\'ll never know if you don\'t go\nYou\'ll never shine if you don\'t glow\nHey now, you\'re an all-star, get your game on, go play\nHey now, you\'re a rock star, get the show on, get paid\nAnd all that glitters is gold\nOnly shooting stars break the mold\nIt\'s a cool place and they say it gets colder\nYou\'re bundled up now, wait \'til you get older\nBut the meteor men beg to differ\nJudging by the hole in the satellite picture\nThe ice we skate is getting pretty thin\nThe water\'s getting warm so you might as well swim\nMy world\'s on fire, how about yours?\nThat\'s the way I like it and I\'ll never get bored\nHey now, you\'re an all-star, get your game on, go play\nHey now, you\'re a rock star, get the show on, get paid\nAll that glitters is gold\nOnly shooting stars break the mold\nHey now, you\'re an all-star, get your game on, go play\nHey now, you\'re a rock star, get the show, on get paid\nAnd all that glitters is gold\nOnly shooting stars\nSomebody once asked could I spare some change for gas?\nI need to get myself away from this place\nI said, \"Yup\" what a concept\nI could use a little fuel myself\nAnd we could all use a little change\nWell, the years start coming and they don\'t stop coming\nFed to the rules and I hit the ground running\nDidn\'t make sense not to live for fun\nYour brain gets smart but your head gets dumb\nSo much to do, so much to see\nSo what\'s wrong with taking the back streets?\nYou\'ll never know if you don\'t go (go!)\nYou\'ll never shine if you don\'t glow\nHey now, you\'re an all-star, get your game on, go play\nHey now, you\'re a rock star, get the show on, get paid\nAnd all that glitters is gold\nOnly shooting stars break the mold\nAnd all that glitters is gold\nOnly shooting stars break the mold'
    
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





