import request from 'supertest';
import { describe, expect, test } from '@jest/globals';
import app from '../app';
describe('Login and get users list with JWT Access', () => {
  let jwtToken: string;
  beforeAll(async () => {
    // Log in and obtain JWT token
    const userLogin: { email: string; password: string } = {
      email: 'dd@gmail.com',
      password: 'johny12345',
    };
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body;
  });

  it('should get data from protected route using JWT', async () => {
    // Access protected route with JWT token
    const response = await request(app).get('/api/users/').set('Authorization', `Bearer ${jwtToken}`);

    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });
});
