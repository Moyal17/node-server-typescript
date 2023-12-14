import express, { Router } from 'express';
import { setCacheHeaders } from '../../middlewares/cache';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './lead.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createUserSchema, editUserSchema } from './dto';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const usersRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getUsers);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getUserById);
    router.post('/', validateBody(createUserSchema), createUser);
    router.put('/:id', validateParams(validateId), validateBody(editUserSchema), updateUser);
    router.delete('/:id', validateParams(validateId), deleteUser);
    return router;
  },
};
export default usersRoutes;
