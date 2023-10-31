import express, { Router } from 'express';
import {
  createLecture,
  deleteLecture,
  getLectures,
  getLectureById,
  updateLecture,
  createMultiLectures,
  getLectureDetails,
} from './lecture.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createLectureSchema, createLecturesSchema, editLectureSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId, validateUri } from '../shared/validations';

const router: Router = express.Router();

const lecturesRoutes = {
  publicRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getLectures);
    router.get('/:uri', setCacheHeaders('public', 5), getLectureDetails);
    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateUri), getLectureById);
    router.post('/', validateBody(createLectureSchema), createLecture);
    router.post('/multiple', validateBody(createLecturesSchema), createMultiLectures);
    router.put('/:id', validateParams(validateId), validateBody(editLectureSchema), updateLecture);
    router.delete('/:id', validateParams(validateId), deleteLecture);
    return router;
  },
};
export default lecturesRoutes;
