// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a,b,/*c*/ );

addone(5);
function addone(num) {
  // this runs because there is no initialization step but only declaration
  return num + 1;
}

// addTwo(5); //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  // here the function is also variable
  return num + 2;
};

//in the browser console the core scope is different then the scope of a variable in node terminal.