import { Request, Response } from 'express';
import { MediaService } from './media.service';
import { configAWSObjectToMedia } from '../../services/uploadService';
import IMedia from './media.interface';
import { awsObject } from './dto';
const mediaService = new MediaService();

export const getMedia = async (req: Request, res: Response) => {
  try {
    const media = await mediaService.getMedia();
    if (!media) {
      return res.status(404).json({ message: 'media not found' });
    }
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: 'getMedia', message: error.message });
  }
};
export const getMediaById = async (req: Request, res: Response) => {
  try {
    const mediaId = req.params.id;
    const media = await mediaService.getMediaById(mediaId);
    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: 'getMediaById', message: error.message });
  }
};

// AWS pre-signed URLs
export const generateUploadURL = async (req: Request, res: Response) => {
  try {
    const url = await mediaService.generateUploadURL(req.body);
    res.json(url);
  } catch (error) {
    res.status(500).json({ error: 'generateUploadURL', message: error.message });
  }
};

export const createMedia = async (req: Request, res: Response) => {
  try {
    const mediaBody = req.body;
    const mediaObjs = [] as IMedia[];
    mediaBody.completedUploads.forEach((imageObj: awsObject) => {
      // @ts-ignore
      const mediaObj = configAWSObjectToMedia(imageObj, req.user!._id) as IMedia;
      mediaObjs.push(mediaObj);
    });
    const media = await mediaService.createManyMediaObjs(mediaObjs);
    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: 'createMedia', message: error.message });
  }
};
export const updateMedia = async (req: Request, res: Response) => {
  try {
    const mediaId = req.params.id;
    const media = await mediaService.updateMedia(mediaId, req.body);
    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }
    const { description, name } = media;
    res.json({ description, name });
  } catch (error) {
    res.status(500).json({ error: 'updateMedia', message: error.message });
  }
};
export const deleteMedia = async (req: Request, res: Response) => {
  try {
    const mediaId = req.params.id;
    const media = await mediaService.deleteMedia(mediaId);
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: 'deleteMedia', message: error.message });
  }
};

// ... more routes for creating, updating, deleting media