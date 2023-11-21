import { MediaTypeEnum, sourceTypes } from '../../modules/media/dto';

export const mediaObject = {
  name: '',
  description: '',
  isPublic: true,
  type: MediaTypeEnum.image,
  sourceType: sourceTypes.amazonS3,
  sourceOrigin: '',
  source: '',
  sourceId: '',
  thumbnail: '',
  thumbnailSquare: '',
  format: 'image/*', // image/* image/png image/jpg
  size: 0,
  isRemoved: false,
  createdAt: Date.now(),
  updatedAt: Date.now(),
};
