const name1 = "vishnu";
const repoCount = 50;

// console.log(name1 + repoCount + " Value");

console.log(`Hello my name is ${name1} and my repocount is ${repoCount}`); // modern way to console log

const gameName = new String("htiech-com-vishnu");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(1,4);
console.log(anotherString);

const stringOne = " vishnu  ";
console.log(stringOne);
console.log(stringOne.trim());

const url ="https://vishnu.com/vishnu%20bhagwat";
console.log(url.replace("%20","-"));

console.log(url.includes("vishnu"));

console.log(gameName.split("-"));
