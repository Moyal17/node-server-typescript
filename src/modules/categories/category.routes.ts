import express, { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from './category.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createCategorySchema, editCategorySchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const categoriesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getCategories);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getCategoryById);
    router.post('/', validateBody(createCategorySchema), createCategory);
    router.put('/:id', validateParams(validateId), validateBody(editCategorySchema), updateCategory);
    router.delete('/:id', validateParams(validateId), deleteCategory);
    return router;
  },
};
export default categoriesRoutes;
