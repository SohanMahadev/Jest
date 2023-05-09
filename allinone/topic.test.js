const request = require('supertest');
const app = require('./server');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://Sohan:Entrix123@cluster0.ztczrpi.mongodb.net/project1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
});

describe('POST /topic', () => {
  it('should return 401 if user does not exist', async () => {
    const response = await request(app)
      .post('/topic')
      .send({ email: 'nonexistent@example.com', topic: 'test', description: 'test' });
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'User not found' });
  });

  it('should return 200 if topic is added successfully', async () => {
    const response = await request(app)
      .post('/topic')
      .send({ email: 'test@example.com', topic: 'test', description: 'test' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Topic added' });
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
