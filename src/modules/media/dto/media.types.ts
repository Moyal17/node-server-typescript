export type preSignedBody = {
  fileName: string;
  folder: string;
  contentType: string;
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

export enum mediaTypes {
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
