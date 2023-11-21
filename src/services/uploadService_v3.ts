import mongoose from 'mongoose';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { awsObject, PreSignedBody, MediaTypeEnum, sourceTypes } from '../modules/media/dto';
import { generateId } from '../utils/';
import { putObject } from './types';
import CONFIG from '../config/config';

// Configure AWS region and other global settings
const s3client = new S3Client({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: CONFIG.AWS_ACCESS_KEY,
    secretAccessKey: CONFIG.AWS_SECRET_KEY,
  },
});
export const getObjectUrl = async (bucket: string, key: string) => {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });
  return getSignedUrl(s3client, command, { expiresIn: 20 });
};
const putObjectUrl = async (obj: putObject) => {
  const command = new PutObjectCommand({
    Bucket: obj.bucket,
    Key: obj.key,
    ContentType: obj.contentType,
    // ACL: 'public-read',
    Metadata: {
      // here we're adding metadata. The key difference between metadata and tags is that tags can be changed - metadata cannot!
      fileName: obj.name, // add the user-input name as the value for the 'fileName' metadata key
      user: 'userId', // let's grab the user who uploaded this and use the username as the value with the 'user' key
      'uploaded-for': 'none',
      'upload-date-utc': obj.timestamp, // and let's grab the UTC date the file was uploaded
    },
    Tagging: 'asset=asset',
  });
  return getSignedUrl(s3client, command, { expiresIn: 600 });
};
export const configFileName = (fileName: string) => {
  const matches = /^(.+)\.([^.]+)$/.exec(fileName); // image-example.jpg
  let name = 'asset',
    extension = null;
  if (matches) {
    name = matches[1];
    extension = matches[2];
    // Replace special characters in the filename with underscores
    name = name.replace(/[^a-zA-Z0-9.]+/g, '_');
  } else {
    console.error("Pattern didn't match!");
  }
  return { name, extension };
};
export const configAWSObjectToMedia = (S3Obj: awsObject, userId: mongoose.Types.ObjectId) => {
  let publicId = null;
  const { source } = S3Obj;
  let thumbnail = source;
  publicId = `MEDIA-${generateId(12)}`;
  if (S3Obj.type === MediaTypeEnum.video) thumbnail = `${thumbnail}.0000000.jpg`;
  const { name } = configFileName(S3Obj.name);
  return {
    user: userId,
    public_id: publicId,
    name,
    type: S3Obj.type,
    sourceType: S3Obj.sourceType || sourceTypes.amazonS3,
    thumbnail,
    source: source,
    sourceOrigin: S3Obj.source,
    sourceId: S3Obj.sourceId,
    duration: S3Obj.duration, // im milliseconds
    format: S3Obj.extension, // format 'mp4' / 'jpg' / 'pdf' ...
    size: S3Obj.size, // in bytes
    searchKeywords: S3Obj.searchKeywords || name.toLowerCase(),
  };
};
export const generateUploadURL = async (body: PreSignedBody): Promise<string> => {
  const bucket = process.env.IS_TEST ? 'test-bucket-node-1' : 'test-bucket-node-1';
  const currentTime = new Date().getTime();
  const { name, extension } = configFileName(body.fileName);
  const key = `${body.folder || 'uploads'}/${currentTime}_${name}.${extension}`;
  // @ts-ignore
  const data: putObject = {
    bucket,
    key,
    contentType: body.contentType,
    timestamp: currentTime.toString(),
    name,
  };
  try {
    return await putObjectUrl(data);
  } catch (error) {
    console.log('Error generating pre-signed URL', error);
    throw error;
  }
};
