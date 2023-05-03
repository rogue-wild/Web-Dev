//jshint esversion:6

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Our little secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

// userSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"],
// });

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/secrets", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});

app.post("/register", async function (req, res) {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/secrets");
        });
      }
    }
  );

  // ***************************************
  // try {
  //   const salt = await bcrypt.genSalt(saltRounds);
  //   const hash = await bcrypt.hash(req.body.password, salt);
  //   const newUser = new User({
  //     email: req.body.username,
  //     password: hash,
  //   });
  //   await newUser.save();
  //   res.render("secrets");
  // } catch (err) {
  //   console.log(err);
  // }
  // ***************************************
});

app.post("/login", async function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.username,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secrets");
      });
    }
  });

  // ***************************************
  // const username = req.body.username;
  // const password = req.body.password;
  // try {
  //   const foundUser = await User.findOne({ email: username });
  //   bcrypt.compare(password, foundUser.password, function(err, result) {
  //     if (result === true){
  //       res.render("secrets");
  //     }
  // });
  // } catch (err) {
  //   console.log(err);
  // }
  // ***************************************
});

app.get('/logout', function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    // successful logout
    res.redirect('/');
  });
});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
