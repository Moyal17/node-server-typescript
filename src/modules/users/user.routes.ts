import express, { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './user.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createUserSchema, editUserSchema, validateId } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';

const router: Router = express.Router();

const users = {
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
export default users;
