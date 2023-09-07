import express, { Router } from 'express';
import { createPage, deletePage, getPages, getPageByUri, updatePage } from './page.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createPageSchema, editPageSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const pagesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getPages);
    return router;
  },
  apiRoutes: () => {
    router.get('/:uri', validateParams(validateId), getPageByUri);
    router.post('/', validateBody(createPageSchema), createPage);
    router.put('/:id', validateParams(validateId), validateBody(editPageSchema), updatePage);
    router.delete('/:id', validateParams(validateId), deletePage);
    return router;
  },
};
export default pagesRoutes;
