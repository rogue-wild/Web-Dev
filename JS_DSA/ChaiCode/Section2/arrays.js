///// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeores = ["shaktiman", "naagraj"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

// array methods

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(10);
myArr.unshift(9);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(10));
console.log(myArr.indexOf(10));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);


/// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);//splice maniplutes original array
console.log(myn2);
console.log(myArr);



