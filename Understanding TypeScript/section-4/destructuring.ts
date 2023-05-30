const hobbies = ["sports", "cooking", "traveling"];

const activeHobbies = ["hiking"];

// const activeHobbies = ["hiking", ...hobbies];

activeHobbies.push(...hobbies);

const [hooby1, hobby2, ...remainingHobbies] = hobbies;

const person = {
  firstName: "Max",
  age: 30,
};

const { firstName, age } = person;
