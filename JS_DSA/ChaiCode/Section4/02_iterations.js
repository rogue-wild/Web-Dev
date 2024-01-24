// /break in for loops
// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     console.log("Three Detected");
//     break;
//   }
//   console.log(i);
// }
// /continue in for loops
// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     console.log("Three Detected");
//     continue;
//   }
//   console.log(i);
// }

// /tables in nested for loop
// for (let i = 1; i <= 5; i++) {
//   console.log(`Multiplication table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// /example for while loop
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// /example for do while loop
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

//do while loop will execute atleast once even if the condition is false 
//while loop will not execute if the condition is false


//for of 

//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World";

for (const greet of greetings) {
  console.log('Each char is ', greet);
}

//Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("FR", "France");

console.log(map);

for (const country of map) {
  console.log(country);
}

for (const [key, value] of map) {
  console.log(key,"-->", value);
}

const myObject = {
  'game1': 'NFS',
  'game2': 'GTA',
  'game3': 'PUBG'
}

// for (const [key, value] of myObject) {
//   console.log(key, value);
//   /output: TypeError: myObject is not iterable
// }

for (const [key, value] of Object.entries(myObject)) {
  console.log(key, value);
}//output: game1 NFS game2 GTA game3 PUBG