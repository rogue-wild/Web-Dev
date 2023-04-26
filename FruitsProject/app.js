//Using Native MongoDB Driver
// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'fruitsDB';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('fruits');

//   // Insert some documents about fruits
//   const insertResult = await collection.insertMany([
//     { name: 'Apple', score: 8, review: 'Great fruit' },
//     { name: 'Orange', score: 6, review: 'Kinda sour' },
//     { name: 'Banana', score: 9, review: 'Great stuff!' }
//   ]);
//   console.log('Inserted documents =>', insertResult);

//   // Query the collection to see the fruits
//   const fruits = await collection.find({}).toArray();
//   console.log('Fruits in the collection =>', fruits);

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

//Using Mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewURLParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 55
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana])
//   .then(() => {
//     console.log("Successfully saved all the fruits to fruitsDB");
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close();
//   });



Fruit.find()
    .then(fruits => {
        fruits.forEach(fruit => console.log(fruit.name));
        mongoose.connection.close();
    })
    .catch(err => console.error(err));

    // Fruit.updateOne({ name: "Apple" },{rating: 9})
    // .then(() => {
    // console.log("Successfully updated the document.");
    // })
    // .catch(err => {
    // console.log(err);
    // });

    Fruit.deleteOne({name: "Apple"})
      .then(() => {
        console.log("Successfully deleted");
        mongoose.connection.close();
      })
      .catch(err => {
        console.log(err);
        mongoose.connection.close();
      });