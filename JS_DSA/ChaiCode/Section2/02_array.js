const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros); //output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][1]); //output: flash
// console.log(marvelHeros.concat(dcHeros)); //output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const allNewHeros = [...marvelHeros, ...dcHeros]; //spread operator
// console.log(allNewHeros); // output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // returns boolean
console.log(Array.from("Hitesh")); //converts string to array
console.log(Array.from({ name: "hitesh" })); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
