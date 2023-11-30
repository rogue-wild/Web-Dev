// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // not recommend
console.log("02" > 1); // doesnot give reliable outputs

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false  always these types of conversions 

//the reason is that an equality check == and comparisons > < >= <= work differently
// Comparisons convert null to a number, testing it as 0. That's why (3) null >=0 is true and null >0 is false
//hence not recommend not reliable

// === strict check this also checks for datatype
console.log("1" === 1); //false
