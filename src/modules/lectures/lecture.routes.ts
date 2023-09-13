import express, { Router } from 'express';
import { createLecture, deleteLecture, getLectures, getLectureById, updateLecture, createMultiLectures } from './lecture.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createLectureSchema, createLecturesSchema, editLectureSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const lecturesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getLectures);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getLectureById);
    router.post('/', validateBody(createLectureSchema), createLecture);
    router.post('/multiple', validateBody(createLecturesSchema), createMultiLectures);
    router.put('/:id', validateParams(validateId), validateBody(editLectureSchema), updateLecture);
    router.delete('/:id', validateParams(validateId), deleteLecture);
    return router;
  },
};
export default lecturesRoutes;
