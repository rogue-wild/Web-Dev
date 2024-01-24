const name1 = "vishnu";
const repoCount = 50;

// console.log(name1 + repoCount + " Value");

console.log(`Hello my name is ${name1} and my repocount is ${repoCount}`); // modern way to console log
// using back ticks -> string interpolation

const gameName = new String("hitech-com-vishnu");

console.log(gameName[0]); //h
console.log(gameName.__proto__); //{} it is an object
console.log(gameName.length); // 17 length of the string
console.log(gameName.toUpperCase()); //changes letters to upper case
console.log(gameName.charAt(2)); // what letter or character at index 2 //t
console.log(gameName.indexOf("i")); //at what index the character is //1

const newString = gameName.substring(0, 4);
console.log(newString);// new small or sub string form existing one with range

const anotherString = gameName.slice(1, 4);
console.log(anotherString);// new small or sub string form existing one with range

const stringOne = " vishnu  ";
console.log(stringOne);
console.log(stringOne.trim());//removes blank spaces

const url = "https://vishnu.com/vishnu%20bhagwat";
console.log(url.replace("%20", "-"));//replaces the specified characters with the given characters in the string

console.log(url.includes("vishnu"));//it checks whether the given string is present in the main string and returns boolean value

console.log(gameName.split("-"));// it splits //[ 'hitech', 'com', 'vishnu' ]
console.log(gameName.split("i",3));
