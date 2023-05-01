//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt =require("mongoose-encryption");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const secret = "Thisisourlittlesecret";
userSchema.plugin(encrypt, {secret: secret});

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", async function(req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });
  try {
    await newUser.save();
    res.render("secrets");
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async function(req, res) {
  const { username, password } = req.body;
  try {
    const foundUser = await User.findOne({ email: username });
    if (foundUser && foundUser.password === password) {
      res.render("secrets");
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/logout", function(req, res) {
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
