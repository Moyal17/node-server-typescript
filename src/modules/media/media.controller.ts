import { Request, Response } from 'express';
import { MediaService } from './media.service';
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
export const createMedia = async (req: Request, res: Response) => {
  try {
    const mediaBody = req.body;
    const media = await mediaService.createMedia(mediaBody);
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
    const { description, title } = media;
    res.json({ description, title });
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
