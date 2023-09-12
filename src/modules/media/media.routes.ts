import express, { Router } from 'express';
import { setCacheHeaders } from '../../middlewares/cache';
import {
  generateUploadURL,
  deleteMedia,
  getMedia,
  getMediaById,
  updateMedia,
  createMedia,
} from './media.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { editMediaSchema, generatePreSignedUrl, createMediaSchema } from './dto';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const mediaRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getMedia);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getMediaById);
    router.post('/aws/generateUploadURL', validateBody(generatePreSignedUrl), generateUploadURL); // pre-sign for aws upload
    router.post('/', validateBody(createMediaSchema), createMedia); // create media document foe each upload
    router.put('/:id', validateParams(validateId), validateBody(editMediaSchema), updateMedia);
    router.delete('/:id', validateParams(validateId), deleteMedia);
    return router;
  },
};
export default mediaRoutes;
