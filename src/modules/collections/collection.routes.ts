import express, { Router } from 'express';
import {
  createCollection,
  deleteCollection,
  getCollections,
  getCollectionById,
  updateCollection,
  createManyCollection,
} from './collection.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { bulkCollectionsSchema, createCollectionSchema, editCollectionSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';
import { addCollectionToPage } from '../pages/page.controller';

const router: Router = express.Router();

const collectionsRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getCollections);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getCollectionById);
    router.post('/', validateBody(createCollectionSchema), createCollection, addCollectionToPage);
    router.post('/bulk', validateBody(bulkCollectionsSchema), createManyCollection, addCollectionToPage);
    router.put('/:id', validateBody(editCollectionSchema), updateCollection);
    router.delete('/:id', validateParams(validateId), deleteCollection);
    return router;
  },
};
export default collectionsRoutes;
