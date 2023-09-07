import * as AWS from 'aws-sdk';
import { awsObject, preSignedBody } from '../modules/media/dto';
import { generateId } from '../utils/';
import { mediaTypes, sourceTypes } from '../modules/media/dto';
import mongoose from 'mongoose';

// Configure AWS region and other global settings
AWS.config.update({
  region: 'eu-central-1',
  // 'accessKeyId' & 'secretAccessKey' are deprecated
  // https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-environment.html
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();

const configFileName = (fileName: string) => {
  const matches = /^(.+)\.([^.]+)$/.exec(fileName); // image-example.jpg
  let name = 'asset',
    extension = null;
  if (matches) {
    name = matches[1];
    extension = matches[2];
    // Replace special characters in the filename with underscores
    name = name.replace(/[^a-zA-Z0-9.]+/g, '_');
    console.log(name); // image_example
    console.log(extension); // jpg
  } else {
    console.error("Pattern didn't match!");
  }
  return { name, extension };
};

export const configAWSObjectToMedia = (S3Obj: awsObject, userId: mongoose.Types.ObjectId) => {
  let publicId = null;
  const { source } = S3Obj;
  let thumbnail = source;
  switch (S3Obj.type) {
    case mediaTypes.video:
      publicId = `VID-${generateId(15)}`;
      thumbnail = `${thumbnail}.0000000.jpg`;
      break;
    case mediaTypes.image:
      publicId = `IMG-${generateId(15)}`;
      break;
    default:
      publicId = `MEDIA-${generateId(15)}`;
  }
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

export const generateUploadURL = async (body: preSignedBody): Promise<string> => {
  const bucket = process.env.IS_TEST ? 'bucket-test' : 'bucket-name';
  const currentTime = new Date().getTime();
  const { name, extension } = configFileName(body.fileName);
  const key = `${body.folder}/${currentTime}_${name}.${extension}`;
  // @ts-ignore
  const params: AWS.S3.PresignedUrlRequest = {
    Metadata: {
      // here we're adding metadata. The key difference between metadata and tags is that tags can be changed - metadata cannot!
      fileName: name, // add the user-input name as the value for the 'fileName' metadata key
      user: 'user_username_or_id', // let's grab the user who uploaded this and use the username as the value with the 'user' key
      'uploaded-for': 'none',
      'upload-date-utc': currentTime.toString(), // and let's grab the UTC date the file was uploaded
    },
    Bucket: bucket,
    Key: key,
    Expires: 600, // expiry time - 600 sec - 10 min
    ACL: 'public-read', // If you want the uploaded object to be publicly readable ('bucket-owner-full-control')
    ContentType: body.fileType, // Set the appropriate MIME type (e.g., 'image/png') ['image/*', 'video/*' ...] this can be changed as per the file type
    Tagging: 'random=random', // apparently its needed for tagging, this is the voodoo section of aws program...
  };

  try {
    return await s3.getSignedUrlPromise('putObject', params);
  } catch (error) {
    console.log('Error generating pre-signed URL', error);
    throw error;
  }
};
