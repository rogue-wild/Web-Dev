//dates

let myDate = new Date();

console.log(myDate); // 2023-12-01T06:04:27.891Z

console.log(myDate.toString()); // Fri Dec 01 2023 11:34:27 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Fri Dec 01 2023

console.log(myDate.toLocaleString()); //  1/12/2023, 11:34:27 am

console.log(myDate.toISOString()); // 2023-12-01T06:04:27.891Z

console.log(typeof myDate); // object

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
console.log(newDate.getMonth() + 1);

/// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", {
  weekday: "long",
});
// you can customize the toLocaleString as per different parameters
