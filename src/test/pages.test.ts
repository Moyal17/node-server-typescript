import request from 'supertest';
import { describe, expect } from '@jest/globals';
import { course, createMultipleLecturesMockUp, lecture, section } from './testData/courses';
import homePage from './testData/pages.home';
import { userLogin } from './testData/users';
import app from '../app';
import { generateId } from '../utils';

let jwtToken: string;
let courseUri: string;
let homePageObjectId: string;
let sectionObjectId: string;
describe('Login and get user JWT Access', () => {
  beforeAll(async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body;
    expect(loginResponse.status).toBe(200);
  });

  it('Create New Page object', async () => {
    // Access protected route with JWT token
    const homePageObj = { ...homePage };
    const response = await request(app).post('/api/courses/').set('Authorization', `Bearer ${jwtToken}`).send(homePageObj);
    homePageObjectId = response.body._id;
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Create New Section In Course', async () => {
    // Access protected route with JWT token
    const sectionObj = { ...section };
    sectionObj.courseId = homePageObjectId;
    const response = await request(app).post('/api/sections/').set('Authorization', `Bearer ${jwtToken}`).send(sectionObj);
    sectionObjectId = response.body._id;
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Create New Lecture In Section', async () => {
    // Access protected route with JWT token
    const lectureObj = { ...lecture };
    lectureObj.uri = `${lectureObj.title}_${generateId(5)}`;
    lectureObj.sectionId = sectionObjectId;
    const response = await request(app).post('/api/lectures/').set('Authorization', `Bearer ${jwtToken}`).send(lectureObj);
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Create New 3 Lecture In Section', async () => {
    const lectures = createMultipleLecturesMockUp(sectionObjectId, 3);
    const response = await request(app).post('/api/lectures/multiple').set('Authorization', `Bearer ${jwtToken}`).send({ lectures });
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Get Course Details', async () => {
    const response = await request(app).get(`/public/courses/${courseUri}`);
    console.log('response course:\n', response.body);
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });
});
