import express, { Router } from 'express';
import { createSection, deleteSection, getSections, getSectionById, updateSection } from './section.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createSectionSchema, editSectionSchema } from './dto';
import { setCacheHeaders } from '../../middlewares/cache';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const sectionsRoutes = {
  publicRoutes: () => {
    router.post('/', validateBody(createSectionSchema), createSection);
    router.put('/:id', validateParams(validateId), validateBody(editSectionSchema), updateSection);
    return router;
  },
  apiRoutes: () => {
    router.get('/', setCacheHeaders('public', 5), getSections);
    router.get('/:id', validateParams(validateId), getSectionById);
    router.post('/', validateBody(createSectionSchema), createSection);
    router.put('/:id', validateParams(validateId), validateBody(editSectionSchema), updateSection);
    router.delete('/:id', validateParams(validateId), deleteSection);
    return router;
  },
};
export default sectionsRoutes;
