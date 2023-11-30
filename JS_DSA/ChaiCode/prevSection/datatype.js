"use strict"; //treat all JS code as newer version

//alert(3+3) // it will give we are using nodejs, not browser

console.log("vishnu");

let name = "vishnu";
let age = 18;
let isLoggedIn = false;
let state = null;

//number => 2 to the power 53
//bigint
//string => ""
//boolean => true or false
//null => standalone value (empty value)
//undefined => value not assigned
//symbol => unique values

//object

console.log(typeof "vishnu");
console.log(typeof null); // it is a object
console.log(typeof undefined); // it is undefined

let score = "33abc";

console.log(typeof score); // -o/ string
console.log(typeof score); // -o/ String

let valueInNum = Number(score); // the value is confirmed to be a number

console.log(typeof valueInNum); //this a number
console.log(valueInNum); // -o/ NaN means it is not a number

let secScore = null;
let valSecScore = Number(secScore);

console.log(typeof valSecScore); // -o/ number
console.log(valSecScore); // -o/ 0 it gives zero on conversion

// "33" => 33
// "33abc" =>  NaN but type is a number
// true => 1 ; false => 0

let isLoggedIn2 = 1;
let boolLogged = Boolean(isLoggedIn2);
console.log(boolLogged);
// 1 => true; 0 => false

// "" => false; "abc" => true

let someNumber = 33;

let stringNum = String(someNumber);

console.log(stringNum); // -o/ 33
console.log(typeof stringNum); // -o/ string
