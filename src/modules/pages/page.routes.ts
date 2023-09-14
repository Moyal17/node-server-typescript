import express, { Router } from 'express';
import { createPage, deletePage, getPages, getPageByUri, updatePage, getFullPageByUri, removeCollectionFromPage } from './page.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createPageSchema, editPageSchema, fullMockPage, removeCollectionValidation } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';

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
    router.patch('/collection/remove', validateBody(removeCollectionValidation), removeCollectionFromPage);

    router.post('/create-full-mock-page', validateBody(fullMockPage), createPage);

    return router;
  },
};
export default pagesRoutes;
