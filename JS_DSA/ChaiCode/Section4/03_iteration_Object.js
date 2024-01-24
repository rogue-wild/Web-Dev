// const myObject = {
//         js: "JavaScript",
//         py: "Python",
//         rb: "Ruby",
//         php: "PHP",
//         java: "Java",
//         csharp: "C#",
//         };
// /for in loop
// for (const key in myObject) {
//   console.log(key, "-->", myObject[key]);
// }

// const programming = ["js", "py", "rb", "php", "java", "csharp"];

// for (const index in programming) {
//   console.log(index, "-->", programming[index]);
// }

const coding = ["js", "py", "rb", "php", "java", "csharp"];
//for each loop
coding.forEach(function (val) {
  console.log(val);
});

coding.forEach((value, index) => {
  console.log(index, "-->", value);
});

function print(val) {
  //callback function

  console.log(val);
}

coding.forEach(print); //we are passing the function as an argument
//it's a reference to the function not an execution of the function

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
}); //item is the value, index is the index of the value, arr is the array
//we can use any name for the parameters
//we can use the forEach loop to iterate over the array and perform some operation on each element of the array\

const myCoding = [
  {
    name: "js",
    value: "JavaScript",
  },
  {
    name: "py",
    value: "Python",
  },
  {
    name: "rb",
    value: "Ruby",
  },
  {
    name: "php",
    value: "PHP",
  },
  {
    name: "java",
    value: "Java",
  },
  {
    name: "csharp",
    value: "C#",
  },
];

myCoding.forEach((item) => {
  console.log(item.name);
});

myCoding.forEach((item) => {
  console.log(item.value);
});
