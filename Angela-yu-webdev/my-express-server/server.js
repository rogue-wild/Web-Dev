
const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function(request, response){
   response.send("<h1>Hello, World!</h1><a href='/contact'>contact</a><br><a href='/about-me'>About me</a>");
});
// when the app.get gets a request at home location("/") then the callback gets triggered and we send the response which the plain text of hello.
app.get("/contact", function(request, response){
    response.send("contact me at vb007@gmail.com<br><a href='/'>Back</a>");
});

app.get("/about-me", function(request, response){
    response.send("<h1>About</h1><p>Hello, this Vishnu Bhagwat</p><br><a href='/'>Back</a>")
})


app.listen(3000, function() {
    console.log("Server started at 3000");
});
//this started a server at localhost:3000
