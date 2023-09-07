import express, { Router } from 'express';
import { createItem, deleteItem, getItems, getItemByUri, updateItem } from './item.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createItemSchema, editItemSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const itemsRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getItems);
    return router;
  },
  apiRoutes: () => {
    router.get('/:uri', validateParams(validateId), getItemByUri);
    router.post('/', validateBody(createItemSchema), createItem);
    router.put('/:id', validateParams(validateId), validateBody(editItemSchema), updateItem);
    router.delete('/:id', validateParams(validateId), deleteItem);
    return router;
  },
};
export default itemsRoutes;
