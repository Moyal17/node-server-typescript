import express, { Router } from 'express';
import { createArticleSchema, editArticleSchema } from './dto';
import { validateBody, validateParams } from '../../middlewares/validation';
import { validateId } from '../shared/validations';
import { setCacheHeaders } from '../../middlewares/cache';
import { createArticle, deleteArticle, getArticles, getArticleByUri, updateArticle, getFullArticleByUri } from './article.controller';
const router: Router = express.Router();

const articlesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getArticles);
    router.get('/:uri', getFullArticleByUri);
    return router;
  },
  apiRoutes: () => {
    router.get('/:uri', validateParams(validateId), getArticleByUri);
    router.post('/', validateBody(createArticleSchema), createArticle);
    router.put('/:id', validateParams(validateId), validateBody(editArticleSchema), updateArticle);
    router.delete('/:id', validateParams(validateId), deleteArticle);
    return router;
  },
};
export default articlesRoutes;
