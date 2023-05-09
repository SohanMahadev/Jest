const request = require('supertest');
const app = require('./server'); // assuming the app file is named app.js

describe('POST /signin', () => {
  it('should return 401 if user does not exist', async () => {
    const response = await request(app)
      .post('/signin')
      .send({ email: 'nonexistent@example.com', password: 'password' });
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'Authentication failed' });
  });

  it('should return 401 if password is incorrect', async () => {
    const response = await request(app)
      .post('/signin')
      .send({ email: 'sohansonu5000@gmail.com', password: 'wrongpassword' });
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'Authentication failed' });
  });

  it('should return 200 if authentication is successful', async () => {
    const response = await request(app)
      .post('/signin')
      .send({ email: 'sohansonu5000@gmail.com', password: 'Sohan@1234' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Authentication successful' });
  });
});
