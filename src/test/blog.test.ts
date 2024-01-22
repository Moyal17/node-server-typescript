import request from 'supertest';
import { describe, expect } from '@jest/globals';
import { articles as articlesData, createMultipleArticlesMockUp } from './testData/articles';
import { userLogin } from './testData/users';
import app from '../app';

let jwtToken: string;
let articleUri: string;
describe('Login and get user JWT Access', () => {
  beforeAll(async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body.accessToken;
    expect(loginResponse.status).toBe(200);
  });

  it('Get Articles', async () => {
    const response = await request(app).get(`/public/blog`);
    // console.log('Articles:\n', response.body);
    expect(response.status).toBe(200);
  });

  it('Create New Articles', async () => {
    // Access protected route with JWT token
    const articleObj = { ...articlesData[articlesData.length - 1] };
    const response = await request(app).post('/api/blog/').set('Authorization', `Bearer ${jwtToken}`).send(articleObj);
    console.log('response.body.uri: ', response.body.uri);
    articleUri = response.body.uri;
    expect(response.status).toBe(200);
  });

  it('Create New 2 Articles', async () => {
    const articles = createMultipleArticlesMockUp(articlesData, 2);
    const response = await request(app).post('/api/blog/multiple').set('Authorization', `Bearer ${jwtToken}`).send({ articles });
    expect(response.status).toBe(200);
  });

  it('Get Articles Details', async () => {
    const response = await request(app).get(`/public/blog/${articleUri}`);
    console.log('response Articles:\n', response.body);
    expect(response.status).toBe(200);
  });
});
