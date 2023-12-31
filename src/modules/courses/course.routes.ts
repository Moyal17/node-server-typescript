import express, { Router } from 'express';
import {
  createCourse,
  deleteCourse,
  getCourses,
  getCourseById,
  updateCourse,
  getCourseDetailsByUri,
  handleFullCourseObject,
  getAdminCourses,
} from './course.controller';
import { getSectionsByCourseId } from '../sections/section.controller';
import { getLessonsBySectionId } from '../lessons/lesson.controller';
import { checkForPublicAssets, validateBody, validateParams, validateQuery } from '../../middlewares/validation';
import { createCourseSchema, editCourseSchema, queryPaginationSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId, validateUri } from '../shared/validations';

const router: Router = express.Router();

const coursesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), checkForPublicAssets, getCourses);
    router.get('/list', setCacheHeaders('public', 10), validateQuery(queryPaginationSchema), getAdminCourses);
    router.get(
      '/:uri',
      validateParams(validateUri),
      checkForPublicAssets,
      getCourseDetailsByUri,
      getSectionsByCourseId,
      getLessonsBySectionId,
      handleFullCourseObject,
    );
    router.get('/:id/schedule', validateParams(validateId), getSectionsByCourseId, getLessonsBySectionId, handleFullCourseObject);
    router.post('/', validateBody(createCourseSchema), createCourse);
    router.put('/:id', validateParams(validateId), validateBody(editCourseSchema), updateCourse);
    return router;
  },
  apiRoutes: () => {
    router.get('/list', setCacheHeaders('public', 10), validateQuery(queryPaginationSchema), getAdminCourses);
    router.get(
      '/:uri',
      validateParams(validateUri),
      getCourseDetailsByUri,
      getSectionsByCourseId,
      getLessonsBySectionId,
      handleFullCourseObject,
    );
    router.get('/:id/schedule', validateParams(validateId), getSectionsByCourseId, getLessonsBySectionId, handleFullCourseObject);
    router.post('/', validateBody(createCourseSchema), createCourse);
    router.put('/:id', validateParams(validateId), validateBody(editCourseSchema), updateCourse);
    router.get('/:id', validateParams(validateId), getCourseById);
    router.delete('/:id', validateParams(validateId), deleteCourse);
    return router;
  },
};
export default coursesRoutes;
