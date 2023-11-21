import mongoose from 'mongoose';

export type PreSignedBody = {
  fileName: string;
  folder: string;
  contentType: string;
};

export type FileDetails = {
  name: string;
  type: string | undefined;
  uploadURL?: string | undefined;
  size: number;
  duration?: number;
  width?: number;
  height?: number;
};

export type awsObject = {
  name: string;
  type?: string;
  sourceType?: sourceTypes;
  thumbnail?: string;
  source?: string;
  sourceId?: string;
  sourceOrigin?: string;
  extension?: string;
  duration?: number;
  format?: string;
  size?: number;
  searchKeywords?: string[];
};

export enum MediaTypeEnum {
  image = 'image',
  video = 'video',
  form = 'form',
}

export enum sourceTypes {
  amazonS3 = 'amazonS3',
  instagram = 'instagram',
  facebook = 'facebook',
  youtube = 'youtube',
  url = 'url',
}

export enum mimeTypes {
  // images
  jpg = 'image/jpeg',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  jpeg = 'image/jpeg',
  png = 'image/png',
  gif = 'image/gif',
  tiff = 'image/tiff',
  bmp = 'image/bmp',
  svg = 'image/svg+xml',
  ico = 'image/x-icon',
  // video
  mp4 = 'video/mp4',
  avi = 'video/x-msvideo',
  wmv = 'video/x-ms-wmv',
  mov = 'video/quicktime',
  webm = 'video/webm',
  ogg = 'video/ogg',
  mpeg = 'video/mpeg',
  // docs
  csv = 'text/csv',
  pdf = 'application/pdf',
  xls = 'application/vnd.ms-excel',
  xlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
}

type sourceHlsObject = {
  master?: string;
  h360?: string;
  h480?: string;
  h540?: string;
  h720?: string;
  h1080?: string;
};

export type MediaObject = {
  _id?: mongoose.Types.ObjectId | string;
  name?: string;
  description?: string;
  isPublic?: boolean;
  type?: string;
  mediaType?: string;
  sourceType?: string;
  sourceOrigin?: string; // original url
  source?: string; // secure_url .mp4
  sourceHls?: sourceHlsObject; // Hls source
  sourceId?: string; // model key / id
  thumbnail?: string;
  thumbnailSquare?: string;
  size?: number;
  isRemoved?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export const allFields =
  'user name description mediaType type sourceType sourceOrigin source sourceHls sourceId thumbnail isRemoved updatedAt createdAt';
export const basicFields = 'name source thumbnail type size mediaType width height duration sourceHls';
export const minimalFields = 'thumbnail source sourceHls type size duration';
