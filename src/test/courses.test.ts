import request from 'supertest';
import { describe, expect } from '@jest/globals';
import { course, createMultipleLessonsMockUp, lesson, section } from './testData/courses';
import { userLogin } from './testData/users';
import app from '../app';
import { generateId } from '../utils';

let jwtToken: string;
let courseUri: string;
let courseObjectId: string;
let sectionObjectId: string;
describe('Login and get user JWT Access', () => {
  beforeAll(async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body;
    expect(loginResponse.status).toBe(200);
  });

  it('Create New Course object', async () => {
    // Access protected route with JWT token
    const courseObj = { ...course };
    courseObj.uri = `${courseObj.uri}_${generateId(5)}`;
    const response = await request(app).post('/api/courses/').set('Authorization', `Bearer ${jwtToken}`).send(courseObj);
    courseUri = courseObj.uri;
    courseObjectId = response.body._id;
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Create New Section In Course', async () => {
    // Access protected route with JWT token
    const sectionObj = { ...section };
    sectionObj.courseId = courseObjectId;
    const response = await request(app).post('/api/sections/').set('Authorization', `Bearer ${jwtToken}`).send(sectionObj);
    sectionObjectId = response.body._id;
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Create New Lesson In Section', async () => {
    // Access protected route with JWT token
    const lessonObj = { ...lesson };
    lessonObj.uri = `${lessonObj.title}_${generateId(5)}`;
    lessonObj.sectionId = sectionObjectId;
    lessonObj.courseId = courseObjectId;
    const response = await request(app).post('/api/lessons/').set('Authorization', `Bearer ${jwtToken}`).send(lessonObj);
    expect(response.status).toBe(200);
    // ... add other expectations as needed ...
  });

  it('Create New 3 Lesson In Section', async () => {
    const lessons = createMultipleLessonsMockUp(sectionObjectId, courseObjectId, 3);
    const response = await request(app).post('/api/lessons/multiple').set('Authorization', `Bearer ${jwtToken}`).send({ lessons });
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
