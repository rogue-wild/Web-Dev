// function sayMyname() {
//   console.log("V");
//   console.log("I");
//   console.log("S");
//   console.log("H");
//   console.log("N");
//   console.log("U");
// }

// sayMyname(); //functionName() executes the function
// //but if say that I just write only the functionName not () ,that means it's just a reference

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, "4c");

// console.log("Result:", result);  //output: 34c  // Result: undefined

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);

// console.log("Result:", result); //Result: 7

/******************** */

function loginUserMsg(username) {
  //   if (username === undefined) {
  //     console.log("Please enter a username");
  //     return;
  //   }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMsg("vishnu"));

function loginUserMsg(username = "Anonymous") {
  //   if (username === undefined) {
  //     console.log("Please enter a username");
  //     return;
  //   }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMsg(""));

function calculateCartPrice(...num1) {
  //rest operator
  return num1;
}

// console.log(calculateCartPrice(20, 40, 30, 70));

const user = {
  username: "rahul",
  price: 200,
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject({
    username: "eheheheh",
    price: 99
})

/////////

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));