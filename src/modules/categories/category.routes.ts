import express, { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
  createMultiCategories,
  getCategoryByUri,
} from './category.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createCategoriesSchema, createCategorySchema, editCategorySchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId, validateUri } from '../shared/validations';

const router: Router = express.Router();

const categoriesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getCategories);
    return router;
  },
  apiRoutes: () => {
    router.get('/:uri', validateParams(validateUri), getCategoryByUri);
    router.post('/', validateBody(createCategorySchema), createCategory);
    router.post('/multiple', validateBody(createCategoriesSchema), createMultiCategories);
    router.put('/:id', validateParams(validateId), validateBody(editCategorySchema), updateCategory);
    router.delete('/:id', validateParams(validateId), deleteCategory);
    return router;
  },
};
export default categoriesRoutes;
