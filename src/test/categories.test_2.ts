import request from 'supertest';
import { describe, expect } from '@jest/globals';
import { blogCategories, courseCategories, createMultipleCategoriesMockUp } from './testData/categories';
import { userLogin } from './testData/users';
import app from '../app';

let jwtToken: string;
let categoryUri: string;
describe('Login and get user JWT Access', () => {
  beforeAll(async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body.accessToken;
    expect(loginResponse.status).toBe(200);
  });

  it('Create New Blog Category', async () => {
    // Access protected route with JWT token
    const categoryObj = { ...blogCategories[blogCategories.length - 1] };
    const response = await request(app).post('/api/categories/').set('Authorization', `Bearer ${jwtToken}`).send(categoryObj);
    console.log('response.body.uri: ', response.body.uri);
    categoryUri = response.body.uri;
    expect(response.status).toBe(200);
  });

  it('Create New 5 Course Categories In Section', async () => {
    const categories = createMultipleCategoriesMockUp(courseCategories, 5);
    const response = await request(app).post('/api/categories/multiple').set('Authorization', `Bearer ${jwtToken}`).send({ categories });
    expect(response.status).toBe(200);
  });
  // (courseUri ? it : it.skip)
  it('Get Category Details', async () => {
    const response = await request(app).get(`/public/categories/${categoryUri}`);
    console.log('response Category:\n', response.body);
    expect(response.status).toBe(200);
  });
});
