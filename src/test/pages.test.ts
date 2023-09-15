import request from 'supertest';
import { describe, expect } from '@jest/globals';
import homePage from './testData/pages.home';
import { userLogin } from './testData/users';
import app from '../app';

let jwtToken: string;
describe('Login and get user JWT Access', () => {
  beforeAll(async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body;
    expect(loginResponse.status).toBe(200);
  });

  it('Create New Page object', async () => {
    // Access protected route with JWT token
    const { itemCollection, ...page } = homePage;
    const body = { page, itemCollection };
    const response = await request(app).post('/api/pages/create-full-mock-page').set('Authorization', `Bearer ${jwtToken}`).send(body);
    console.log('response\n', response.body.message);
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Get Page Details', async () => {
    const response = await request(app).get(`/public/pages/${homePage.uri}`);
    console.log('response home page:\n', response.body);
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });
});
