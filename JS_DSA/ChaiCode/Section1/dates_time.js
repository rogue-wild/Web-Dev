//dates

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(typeof myDate);

let myCreateDate = new Date(2023, 0, 23);
let myCreateDate2 = new Date(2023, 0, 23, 5, 3);
let myCreateDate3 = new Date("01-14-2023");

// console.log(myCreateDate.toDateString());
// console.log(myCreateDate2.toLocaleDateString());
// console.log(myCreateDate3.toLocaleDateString());

////////time/////////

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDate()); //.getMonth()  .getDay()

/// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", {
  weekday: "long",
});
