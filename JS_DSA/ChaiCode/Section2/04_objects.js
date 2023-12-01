// const tinderUser = new Object(); //it is a singleton
// same as const tinderUser = {}; //it is not a singleton
// no difference both returns empty object

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "samy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gamil.com",
  fullname: {
    userFullName: {
      firstName: "hitesh",
      lastName: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userFullName.firstName);
console.log(regularUser.fullname?.userFullName.firstName);
// we use ? we have to not sure if there is object for sure

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2);


// const obj3 = Object.assign({}, obj1, obj2);
// The active selection you've provided is assign, which likely refers to Object.assign() in JavaScript. Object.assign() is a method used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
//It's important to note that Object.assign() does not create a deep clone. If the source values are objects themselves, the method will copy the reference to the object, not the actual object. If you need a deep clone, you'll have to implement it yourself or use a library that provides this functionality.


const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//use spread operator


const users = [
  //like data from databases
  {
    id: 1,
    email: "h@mail.com",
  },
  {
    id: 2,
    email: "g@mail.com",
  },
  {
    id: 3,
    email: "j@mail.com",
  },
];

// users[1].email;
// console.log(tinderUser); 
// { id: '123abc', name: 'samy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); 
// array output: [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));
 // array output:[ '123abc', 'samy', false ]

// console.log(Object.entries(tinderUser)); 
//[ [ 'id', '123abc' ], [ 'name', 'samy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); 
// returns true or false


/*......................................................*/
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

//course.courseInstructor
// const { courseInstructor} = course; same as below
const { courseInstructor: instructor } = course;
console.log(instructor);

// const navbar = ({company}) => {};
// destructuring in react
// navbar((company = "hitesh"));



//  .......................API.......................... //

// JSON data from APIs come in the form of objects(this object doesn't have a name) or array
// usually both keys and values both are strings
// {
//   "name": "hitesh"
//   "coursename": "js in hindi",
//   "price": "free"
// }         JSON example
 
// array format
// [  
//     {},
//     {},
//     {}
// ]