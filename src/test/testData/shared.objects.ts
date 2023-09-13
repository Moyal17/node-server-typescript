import { mediaObject } from './medias';
import { mediaTypes, sourceTypes } from '../../modules/media/dto';

export const imageObject = (link: string, sourceId: string, format: string) => ({
  order: 0,
  media: {
    ...mediaObject,
    sourceOrigin: link,
    source: link,
    sourceId: sourceId,
    format: format,
  },
});
export const videoObject = (link: string, sourceId: string, format: string, thumbnail: string) => ({
  order: 0,
  media: {
    ...mediaObject,
    type: mediaTypes.video,
    sourceType: sourceTypes.youtube,
    sourceOrigin: link,
    source: link,
    sourceId: sourceId,
    thumbnail: thumbnail,
    format: format,
  },
});
