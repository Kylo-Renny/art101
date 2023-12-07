// index.js - Lab 16 - JSON & APIs
// Author:Ren Murphy
// Date:12/8/21

/////////////////////////////////////////////

// using the $.ajax.()method 
$.ajax({
    //url request from the Api docs
    url: "https://xkcd.com/info.0.json",
    //The data to send - will be converted to a query string
    //This is where any data required by the API will go w/ id and API key
    data: {"month": "12", "num": 2864, "link": "", "year": "2023", "news": "", "safe_title": "Compact Graphs", "transcript": "", "alt": "People may complain about readability, but even with jpeg compression, extracting the data points is usually computationally feasible if there aren't too many of them.", "img": "https://imgs.xkcd.com/comics/compact_graphs.png", "title": "Compact Graphs", "day": "6"},
    //Whether this is a POST or GET request
    type: "GET",
    //The data we expect back
    dataType:"json",
    //What is done when the API call is successful
    succeess: function(data) {
        //set the action
        var imageUrl = data.img;
        var title = data.title;
        console.log("orig title:", title);
        title=make_safe(title);
        console.log("safe title:", title);
        var alt = data.alt;
        console.log("orig alt:", alt);
        alt = make_safe(alt);
        console.log("safe alt:", alt);
        var comicNum = data.num;
        ///////////////////////////////////////////////////////////////////
        //I still don't understand what this part does
        var html = `<div id="image block">
        <h4>${title}</h4>
        <img src="${imageUrl}" title="${alt}"><br>
        <button id="prev">Previous</button><button id="next">Next</button>
      </div>`
    /////////////////////////////////////////////////////////////////////
       // console.log("My new html: \n", html);
       $("#output").html(html);

       // add event listener to new prev button
       $("#prev").click(function(){
         getComic(comicNum - 1);
       });
       // add event listener to new next button
       $("#next").click(function(){
         getComic(comicNum + 1);
       });
    },
    //What is done when the API call fails
    error: function(jqXHR, textStatus, errorThrown){
        //set the action
        console.log("Error: Debug Needed?", textStatus, errorThrown);
    }
})
