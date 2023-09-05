import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  // Your logic here
  res.send('Users route');
});

export default router;