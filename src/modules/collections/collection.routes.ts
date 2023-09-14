import express, { Router } from 'express';
import { createCollection, deleteCollection, getCollections, getCollectionById, updateCollection } from './collection.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createCollectionSchema, editCollectionSchema } from './dto';
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
    router.put('/:id', validateBody(editCollectionSchema), updateCollection);
    router.delete('/:id', validateParams(validateId), deleteCollection);
    return router;
  },
};
export default collectionsRoutes;
