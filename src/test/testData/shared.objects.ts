import { mediaObject } from './medias';
import { MediaTypeEnum, sourceTypes } from '../../modules/media/dto';

export const imageObject = (link: string, sourceId: string, format: string) => ({
  ...mediaObject,
  sourceOrigin: link,
  source: link,
  sourceId: sourceId,
  name: sourceId,
  format: format,
});
export const videoObject = (link: string, sourceId: string, format: string, thumbnail: string) => ({
  ...mediaObject,
  type: MediaTypeEnum.video,
  sourceType: sourceTypes.youtube,
  sourceOrigin: link,
  source: link,
  sourceId: sourceId,
  name: sourceId,
  thumbnail: thumbnail,
  format: format,
});
