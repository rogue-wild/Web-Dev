// Falsy values
//false, 0, -0, BigInt(0), "", null, undefined, NaN

// Truthy values
// true, 1, -1, BigInt(1), "0", "false", [], {}, function() {}

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    break;
}

let userEmail = [];

if (userEmail.length === 0) {
  //to check for this Array is empty
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //To check whether the Object is empty
  console.log("Object is empty");
}

//&& - AND operator - Both sides need to be true
//|| - OR operator - One side need to be true
// ! - NOT operator - Reverse the boolean value

//Nullish Coalescing Operator
//Nullish: null and undefined (NOT 0 or '')

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

let val1;
val1 = undefined ?? 10;
console.log(val1);
// Expected output: 10

// Ternary Operator

// condition ? (true) : (false); //if condition is true, then true will be executed, else false will be executed (ternary operator) - shorthand for if else statement

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");