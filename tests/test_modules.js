const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../routes/users');
const User = require('../models/user');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('GET /users/:id', () => {
  let user;

  beforeEach(async () => {
    user = await User.create({ name: 'Jane', email: 'jane@example.com', age: 25 });
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  it('should return user data if user exists and is over 21', async () => {
    const res = await request(app).get(`/users/${user._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Jane');
  });

  it('should return 404 if user not found', async () => {
    const res = await request(app).get('/users/000000000000000000000000');
    expect(res.statusCode).toBe(404);
  });

  it('should return 400 if ID is invalid', async () => {
    const res = await request(app).get('/users/invalid-id');
    expect(res.statusCode).toBe(400);
  });
});