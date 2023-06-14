// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a,b,/*c*/ );

addone(5);
function addone(num) {
  // this run because there is no initialization step but only declration
  return num + 1;
}

// addTwo(5); //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  // here the function is also variable
  return num + 2;
};
