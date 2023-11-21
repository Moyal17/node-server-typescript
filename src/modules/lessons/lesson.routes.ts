import express, { Router } from 'express';
import {
  createLesson,
  deleteLesson,
  getLessons,
  getLessonById,
  updateLesson,
  createMultiLessons,
  getLessonDetails,
} from './lesson.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createLessonSchema, createLessonsSchema, editLessonSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId, validateUri } from '../shared/validations';

const router: Router = express.Router();

const lessonsRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getLessons);
    router.get('/:uri', setCacheHeaders('public', 5), getLessonDetails);

    router.get('details/:id', validateParams(validateUri), getLessonById);
    router.post('/', validateBody(createLessonSchema), createLesson);
    router.put('/:id', validateParams(validateId), validateBody(editLessonSchema), updateLesson);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateUri), getLessonById);
    router.post('/', validateBody(createLessonSchema), createLesson);
    router.post('/multiple', validateBody(createLessonsSchema), createMultiLessons);
    router.put('/:id', validateParams(validateId), validateBody(editLessonSchema), updateLesson);
    router.delete('/:id', validateParams(validateId), deleteLesson);
    return router;
  },
};
export default lessonsRoutes;
