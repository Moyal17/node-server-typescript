import express, { Router, Request, Response } from 'express';
import { createUser, getUserById } from './user.controller';
import { validationMiddleware } from '../../middlewares/validationMiddleware';
import { createUserSchema } from './dto';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  // Your logic here
  res.send('Users route');
});
router.get('/:id', getUserById);
router.post('/', validationMiddleware(createUserSchema), createUser);

export default router;
