//Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt ....
//  these datatypes can only be called by call by value. because when you call them you don't get the reference but you only get the copy of their value.

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false

const bigNum = 39873294873298472394n;
console.log(typeof bigNum);

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable datatype explicitly when declaring them.

// Reference (non-primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let obj = {
  name: "vishni",
  age: 45,
};

const myFunction = function () {
  console.log("Hello World");
};

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//      Arrays  =>  object
//      Function  =>  function or function object
//      Object  =>  object

// datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
