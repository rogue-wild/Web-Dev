const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
//    here "this" talks about the current context of variable
//      output:     {
//           username: 'hitesh',
//           price: 999,
//           welcomeMessage: [Function: welcomeMessage]
//            }
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); //output: {}

function chai() {
console.log(this)//print many things;

const username = "raju";
console.log(this.username);//undefined
//here "this" doesn't work because it is not in the context of object
} 
chai();


const chai2 = function() {
  let username = "raju";
  console.log(this.username);//undefined
}
chai2();


const chai3 = () => {
  let username = "raju";
  console.log(this.username);//undefined
  console.log(this);//output: {}
}
chai3();

const addTwo = (a, b) => {
  return a + b; //explicit return
};

console.log(addTwo(2, 3)); //output: 5
//OR

const addTwo2 = (a, b) => a + b; //implicit return
console.log(addTwo2(2, 3)); //output: 5

//OR

const addTwo3 = (a, b) => (a + b); //implicit return
console.log(addTwo3(2, 3)); //output: 5

const addTwo4 = (a, b) => ({username: "raju"}); //implicit return
//we use parenthesis to return object  //output: { username: 'raju' }

