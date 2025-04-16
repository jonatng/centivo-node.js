const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/jonathan-db')
  .then(async () => {
    console.log('Seeding...');

    await User.deleteMany();

    await User.insertMany([
      { name: 'Alice', email: 'alice@example.com', age: 30 },
      { name: 'Bob', email: 'bob@example.com', age: 19 },
      { name: 'Charlie', email: 'charlie@example.com', age: 45 },
    ]);

    console.log('Seeding complete!');
    process.exit();
  })
  .catch(err => {
    console.error('Seed error:', err);
    process.exit(1);
  });