const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmiCalculator", function (request, response) {
  //  response.sendFile('X:/Vishnu/Web Dev/Calculator/index.html');
  response.sendFile(__dirname + "/bmiCalc.html");
});

app.get("/calculator", function (request, response) {
  //  response.sendFile('X:/Vishnu/Web Dev/Calculator/index.html');
  response.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function (request, response) {
  var num1 = Number(request.body.weight);
  var num2 = Number(request.body.height);

  var result = num1+num2;
  //    var result = num1/(num2*num2);
  //    result = Math.round(result);

  response.send("Result: " + result);
});

app.post("/bmiCalculator", function (request, response) {
  var num1 = parseFloat(request.body.weight);
  var num2 = parseFloat(request.body.height);

  // var result = num1+num2;
  var result = num1 / (num2 * num2);
  result = Math.round(result);

  response.send("Result: " + result);
});

app.listen(3000, function () {
  console.log("Server On");
});
