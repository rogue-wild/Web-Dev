// array

const myArr = [0, 1, 2, 3, 4, 5]; // you can also have elements with different datatypes in JS
const myHeores = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]);

//JS array-copy operations create shallow copies. (All standard built-in copy operations with any JS objects create shallow copies, rather than deep copies.)

//In Shallow copy, a copy of the original object is stored and only the reference address is finally copied.
//In Deep copy, the copy of the original object and the repetitive copies both are stored.

// array methods

myArr.push(6); //adds the 6 to the end
myArr.push(7);
myArr.pop(); // removes the last value in the array

myArr.unshift(10);
myArr.unshift(9);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(10));
console.log(myArr.indexOf(10));

const newArr = myArr.join(); // join changes the array to a string
console.log(myArr); // array output
console.log(newArr); // string output

/// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1); //[ 0, 1 ]
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); //splice maniplutes original array
console.log(myn2);
console.log(myArr);

//Array.prototype.splice()
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]