//
// const a = 0;
// const b = 1;

// const add = (a: number, b: number) => a + b;

// const hobbies = ["sports", "cooking", "traveling"];

// const activeHobbies = ["hiking"];

// // const activeHobbies = ["hiking", ...hobbies];

// activeHobbies.push(...hobbies);

//rest parameters
const add = (...numbers: number[]) => {
  let result = 0;
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNums = add(5,10,1,23,5);
console.log(addedNums);
