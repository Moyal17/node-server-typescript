import express, { Router } from 'express';
import { createArticleSchema, createArticlesSchema, editArticleSchema } from './dto';
import { checkForPublicAssets, validateBody, validateParams, validateQuery } from '../../middlewares/validation';
import { validateId, validateUri } from '../shared/validations';
import { setCacheHeaders } from '../../middlewares/cache';
import {
  createArticle,
  deleteArticle,
  getArticles,
  getArticleByUri,
  updateArticle,
  getFullArticleByUri,
  getBlogCategories,
  getAdminArticles,
  createMultiArticle,
} from './blog.controller';
import { queryPaginationSchema } from '../courses/dto';
const router: Router = express.Router();

const articlesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getArticles);
    router.get('/categories', getBlogCategories);
    router.get('/list', setCacheHeaders('public', 10), validateQuery(queryPaginationSchema), getAdminArticles);
    router.get('/:uri', validateParams(validateUri), checkForPublicAssets, getFullArticleByUri);

    router.post('/', validateBody(createArticleSchema), createArticle);
    router.put('/:id', validateParams(validateId), validateBody(editArticleSchema), updateArticle);

    return router;
  },
  apiRoutes: () => {
    router.get('/:uri', validateParams(validateUri), getArticleByUri);
    router.post('/', validateBody(createArticleSchema), createArticle);
    router.post('/multiple', validateBody(createArticlesSchema), createMultiArticle);
    router.put('/:id', validateParams(validateId), validateBody(editArticleSchema), updateArticle);
    router.delete('/:id', validateParams(validateId), deleteArticle);
    return router;
  },
};
export default articlesRoutes;
