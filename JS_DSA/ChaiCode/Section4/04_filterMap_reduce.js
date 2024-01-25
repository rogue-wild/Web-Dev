// const coding = ["js", "py", "rb", "php", "java", "csharp"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values); //undefined
// / means that forEach loop does not return anything

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4);
console.log(newNums); //output: [ 5, 6, 7, 8, 9, 10 ] //implicit return

// const newNums1 = myNums.filter((num) => {
//   num > 4;
// });
// console.log(newNums1); //output: []

const newNums1 = myNums.filter((num) => {
  return num > 4; //explicit return
});
console.log(newNums1);


//filtering with forEach loop
const newNums2 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});

console.log(newNums2);


const books = [ 
  //json with title , genre, published
  {title: "The Alchemist", genre: "adventure", published: 1988},
  {title: "The Prophet", genre: "philosophy", published: 1923},
  {title: "The Little Prince", genre: "fantasy", published: 1943},
  {title: "Albert and Einstein", genre: "drama", published: 1984},
  {title: "The Planet and People", genre: "science", published: 1923},
  {title: "The Little Prince 2", genre: "fantasy", published: 1953},
];

const userBooks = books.filter((book) => book.published > 1950);//implicit return
console.log(userBooks);

const userBooks1 = books.filter((book) => { return book.genre === "philosophy"});//explicit return
console.log(userBooks1);

const userBooks2 = books.filter((book) => { return book.genre === "fantasy" && book.published > 1950});
console.log(userBooks2);