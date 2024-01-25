const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((number) => number + 10);//it returns automatically just like filter method
// console.log(newNums);

// const newNums = myNumbers.map((number) => number * 10).map((number) => number + 10);

//you can chain these methods like this
const newNums = myNumbers
  .map((number) => number * 10)
  .map((number) => number + 1)
  .filter((number) => number >= 40);

console.log(newNums);
