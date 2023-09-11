import express, { Router } from 'express';
import { createCourse, deleteCourse, getCourses, getCourseById, updateCourse } from './course.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createCourseSchema, editCourseSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const coursesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getCourses);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getCourseById);
    router.post('/', validateBody(createCourseSchema), createCourse);
    router.put('/:id', validateParams(validateId), validateBody(editCourseSchema), updateCourse);
    router.delete('/:id', validateParams(validateId), deleteCourse);
    return router;
  },
};
export default coursesRoutes;
