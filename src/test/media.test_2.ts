import request from 'supertest';
import axios from 'axios';
import fs from 'mz/fs';
import { describe, expect } from '@jest/globals';
import { userLogin } from './testData/users';
import app from '../app';
let jwtToken: string;

describe('Test S3 file upload', () => {
  beforeAll(async () => {
    const loginResponse = await request(app).post('/public/auth/login').send(userLogin);
    jwtToken = loginResponse.body.accessToken;
    expect(loginResponse.status).toBe(200);
  });

  it('should upload a file to S3', async () => {
    // First, get the pre-signed URL
    const mediaObj = {
      fileName: 'test-image.jpeg',
      contentType: 'image/jpeg',
    };

    const {
      body: { url },
    } = await request(app).post('/api/media/aws/pre-sign').set('Authorization', `Bearer ${jwtToken}`).send(mediaObj);
    expect(url).toBeTruthy();

    try {
      // Upload the file to S3 using the pre-signed URL
      const filePath = `${__dirname}/testData/test-image.jpeg`;
      const file = await fs.readFile(filePath);
      // const putResponse = await request(url).put('').set('Content-Type', `${mediaObj.contentType}`).send(file);
      // expect(putResponse.status).toBe(200);
      const s3Response = await axios.put(url, file, {
        headers: {
          'Content-Type': `${mediaObj.contentType}`, // e.g., 'text/plain' or 'image/jpeg'
        },
        onUploadProgress: (e: any) => {
          //  Show progress
          const percentCompleted = Math.round((e.loaded * 100) / e.total);
          console.log(`percentCompleted: ${percentCompleted}%`);
        },
      });
      if (s3Response.status === 200) {
        const image = url.split('?')[0];
        console.log('image URL: ', image);
      }
      expect(s3Response.status).toBe(200);
    } catch (err) {
      console.error('S3 upload failed with:', err.response.data);
      throw err;
    }
  });
});
