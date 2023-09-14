import { Router, Response } from 'express';
import publicRoutes from './publicRoutes';
import apiRoutes from './apiRoutes';
const router: Router = Router();

// Public routes - no authentication
router.use('/public', publicRoutes);

// API routes - secure with authentication
router.use('/api', apiRoutes);

router.get('/', (res: Response) => {
  res.send('Hello, World!');
});

export default router;
