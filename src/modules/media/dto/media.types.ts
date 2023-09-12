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
