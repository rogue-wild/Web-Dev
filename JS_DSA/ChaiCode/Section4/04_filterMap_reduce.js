// const coding = ["js", "py", "rb", "php", "java", "csharp"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values); //undefined
// / means that forEach loop does not return anything

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4);
console.log(newNums); //output: [ 5, 6, 7, 8, 9, 10 ] //implicit return

// const newNums1 = myNums.filter((num) => {
//   num > 4;
// });
// console.log(newNums1); //output: []

const newNums1 = myNums.filter((num) => {
  return num > 4; //explicit return
});
console.log(newNums1);
