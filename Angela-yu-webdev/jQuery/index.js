

// $(document).ready(function(){
//     $("h1").css("color","red");

// })
// do this or just simply put the script tags in the bottom part of the body instead of putting it in head 

// $("h1").css("color","red");

// $("h1").addClass("big-title margin50");

// $("h1").hasClass("margin50"); // it will return true

// $("h1").text("bye");// change the textcontent to bye from hello

// $("h1").html("<em>some text</em>"); // change the innerHTMl 

// $("a").attr("href","some_url");//set attribute
// $("a").attr("href");//get attribute

$("h1").click(function () {

    $("h1").css("color","red");
    
})


// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     })
// }// in vanilla JS

$("button").click(function(){
    $("h1").css("color","purple");
});// in jQuery 

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});