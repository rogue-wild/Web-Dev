// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {

enum Role {ADMIN = 0, READ_ONLY = 1, AUTHOR = "AUTHOR"};

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"], //array
    role: [2, "author"] //tuple
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];



console.log(person.name);