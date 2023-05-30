const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  var amount = req.body.amount;

  var public_key = "NDg0MzE2MmRjYTVjNDEzMTlhNGE0MjQ5MTVmYzg1NGU";
  var baseURL = "https://apiv2.bitcoinaverage.com/convert/global";

  var options = {
    url: baseURL,
    method: "GET",
    headers: {
      "x-ba-key": public_key,
    },
    qs: {
      from: crypto,
      to: fiat,
      amount: amount,
    },
  };

  request(options, function (error, response, body) {
    var data = JSON.parse(body);
    var price = data.price;
    var currentDate = data.time;

    res.write("<p>The date is " + currentDate + "</p>");

    res.write(
      "<h1>Price of " + amount + " " + crypto + " is: " + price + fiat + "</h1>"
    );

    res.send();
  });
});

app.listen(3000, function () {
  console.log("Starting Server!");
});
