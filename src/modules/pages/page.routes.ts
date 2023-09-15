import express, { Router } from 'express';
import { createPageSchema, editPageSchema, fullMockPage, removeCollectionValidation } from './dto';
import { validateBody, validateParams } from '../../middlewares/validation';
import { validateId } from '../shared/validations';
import { setCacheHeaders } from '../../middlewares/cache';
import { bulkCollectionsSchema, createCollectionSchema } from '../collections/dto';
import { createCollection, createManyCollection } from '../collections/collection.controller';
import {
  createPage,
  deletePage,
  getPages,
  getPageByUri,
  updatePage,
  getFullPageByUri,
  removeCollectionFromPage,
  addCollectionToPage,
  addBulkCollectionsToPage,
} from './page.controller';
const router: Router = express.Router();

const pagesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getPages);
    router.get('/:uri', getFullPageByUri);
    return router;
  },
  apiRoutes: () => {
    router.get('/:uri', validateParams(validateId), getPageByUri);
    router.post('/', validateBody(createPageSchema), createPage);
    router.put('/:id', validateParams(validateId), validateBody(editPageSchema), updatePage);
    router.delete('/:id', validateParams(validateId), deletePage);
    router.patch('/collections/remove', validateBody(removeCollectionValidation), removeCollectionFromPage);
    router.post('/collections/add', validateBody(createCollectionSchema), createCollection, addCollectionToPage);
    router.post('/collections/bulk', validateBody(bulkCollectionsSchema), createManyCollection, addBulkCollectionsToPage);
    router.post('/create-full-mock-page', validateBody(fullMockPage), createPage, createManyCollection, addBulkCollectionsToPage);
    return router;
  },
};
export default pagesRoutes;
