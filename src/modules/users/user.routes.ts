import express, { Router, Request, Response } from 'express';
import { getUserById } from './user.controller';
const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  // Your logic here
  res.send('Users route');
});

router.get('/:id', getUserById)

export default router;