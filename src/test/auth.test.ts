import request from 'supertest';
import { describe, expect } from '@jest/globals';
import { userLogin } from './testData/users';
import app from '../app';

describe('Login and get users list with JWT Access', () => {
  let jwtToken: string;
  beforeAll(async () => {
    // create user
    //const signUpResponse = await request(app).post('/public/auth/signup').send(createUser);
    //expect(signUpResponse.status).toBe(200);
  });

  it('Login User and get JWT token', async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body;
  });

  it('Should get data from protected route using JWT', async () => {
    // Access protected route with JWT token
    const response = await request(app).get('/api/users/').set('Authorization', `Bearer ${jwtToken}`);
    expect(response.status).toBe(200);
  });
});
