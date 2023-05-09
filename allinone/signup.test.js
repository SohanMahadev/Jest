const request = require('supertest');
const app = require('./server');

describe('POST /signup', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User created');
  },10000);

  it('should return 409 if user already exists', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(409);
    expect(res.body).toHaveProperty('message', 'User already exists');
  });

  it('should return 500 if an error occurs', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        email: '',
        password: ''
      });
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
  });
});
