//singleton: when make use of constructor
// Object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full Name": "hitesh chaoudhary", // you can write the keys with double quotes also or without it
  [mySym]: "mykey1",
  age: 30,
  loaction: "jaipur",
  email: "xyz@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};

// console.log(JsUser.email); //when accessing with .dot
// console.log(JsUser["full Name"]); //when accessing without .dot
// console.log(typeof JsUser.mySym);//here returns string
// console.log(JsUser["mySym"]); // here used as symbol. it returns Symbol

// JsUser.email = "abcd@gmail.com";
// Object.freeze(JsUser); //it freezes the value of JsUser
// JsUser.email ="123@gmail.com"
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting()); // output: undefined
console.log(JsUser.greeting); // output: [Function (anonymous)]

console.log(JsUser.greetingTwo()); // output: undefined
console.log(JsUser.greetingTwo); // output: [Function (anonymous)]
