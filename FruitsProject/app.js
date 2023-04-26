const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'fruitsDB';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('fruits');

  // Insert some documents about fruits
  const insertResult = await collection.insertMany([
    { name: 'Apple', score: 8, review: 'Great fruit' },
    { name: 'Orange', score: 6, review: 'Kinda sour' },
    { name: 'Banana', score: 9, review: 'Great stuff!' }
  ]);
  console.log('Inserted documents =>', insertResult);

  // Query the collection to see the fruits
  const fruits = await collection.find({}).toArray();
  console.log('Fruits in the collection =>', fruits);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
