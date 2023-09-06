import express, { Router } from 'express';
import { setCacheHeaders } from '../../middlewares/cache';
import { createMedia, deleteMedia, getMedia, getMediaById, updateMedia } from './media.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createMediaSchema, editMediaSchema } from './dto';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const mediaRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getMedia);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getMediaById);
    router.post('/', validateBody(createMediaSchema), createMedia);
    router.put('/:id', validateParams(validateId), validateBody(editMediaSchema), updateMedia);
    router.delete('/:id', validateParams(validateId), deleteMedia);
    return router;
  },
};
export default mediaRoutes;
