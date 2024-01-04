//IIFE ->  Immediately Invoked Function Expression
//IIFE is a function that is executed right after it is created
//It has two parts:
//1. Anonymous function with lexical scope enclosed within the Grouping Operator ()
//2. The () at the end of the function that tells JavaScript to execute the function immediately
//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts.
//The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.
//The function executes immediately after it’s created.
//It has its own execution context.
//Variables declared inside the IIFE can’t be accessed by the outside scope.

// function chai() {
//   console.log("hello");
// }() //incorrect syntax

(function chai() {
  //named iife
  console.log("hello");
})(); //you need semicolon at the end of function expression because the iife doesn't know where to end the function expression
//output: hello

//OR

(() => {
  //unamed iife
  console.log("hello");
})(); //you need semicolon at the end of function expression because the iife doesn't know where to end the function expression

//OR with parameters

((a, b) => {
  //unamed iife
  console.log(a + b);
})(2, 3);

// In JavaScript, semicolons are used to separate statements. They are optional in most cases due to Automatic Semicolon Insertion (ASI), a feature of JavaScript that inserts semicolons for you. However, there are cases where omitting a semicolon can lead to unexpected results.

// In the context of an IIFE, a semicolon is often placed at the beginning to prevent errors when concatenating files. If the previous line of code in another file doesn't end with a semicolon, and the IIFE starts on the next line without a leading semicolon, JavaScript could interpret them as a single line, leading to a syntax error.

// Here's an example of an IIFE:

// ;(function() {
//        code here
//     })()

// In this example, the semicolon at the beginning ensures that the IIFE is treated as a separate statement, even if the previous line of code (potentially in another file) didn't end with a semicolon.
