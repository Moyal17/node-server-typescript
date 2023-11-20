import express, { Router } from 'express';
import {
  createCourse,
  deleteCourse,
  getCourses,
  getCourseById,
  updateCourse,
  getCourseDetailsByUri,
  handleFullCourseObject,
  checkForPublicCourses,
} from './course.controller';
import { getSectionsByCourseId } from '../sections/section.controller';
import { getLecturesBySectionId } from '../lectures/lecture.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createCourseSchema, editCourseSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId, validateUri } from '../shared/validations';

const router: Router = express.Router();

const coursesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), checkForPublicCourses, getCourses);
    router.get(
      '/:uri',
      validateParams(validateUri),
      checkForPublicCourses,
      getCourseDetailsByUri,
      getSectionsByCourseId,
      getLecturesBySectionId,
      handleFullCourseObject,
    );
    router.get('/:id/schedule', validateParams(validateId), getSectionsByCourseId, getLecturesBySectionId, handleFullCourseObject);

    router.post('/', validateBody(createCourseSchema), createCourse);
    router.put('/:id', validateParams(validateId), validateBody(editCourseSchema), updateCourse);
    return router;
  },
  apiRoutes: () => {
    router.get(
      '/:uri',
      validateParams(validateUri),
      getCourseDetailsByUri,
      getSectionsByCourseId,
      getLecturesBySectionId,
      handleFullCourseObject,
    );
    router.get('/:id', validateParams(validateId), getCourseById);
    router.delete('/:id', validateParams(validateId), deleteCourse);
    return router;
  },
};
export default coursesRoutes;
