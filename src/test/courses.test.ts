import request from 'supertest';
import { describe, expect } from '@jest/globals';
import { createFullCourseMockUp } from './testData/courses';
import app from '../app';
import { userLogin } from './testData/users';

let jwtToken: string;
describe('Login and get user JWT Access', () => {
  beforeAll(async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body;
    expect(loginResponse.status).toBe(200);
  });

  it('should get data from protected route using JWT', async () => {
    // Access protected route with JWT token
    const course = createFullCourseMockUp();
    console.log('course: ', course);
    // const response = await request(app).get('/api/users/').set('Authorization', `Bearer ${jwtToken}`);
    //  expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });
});
