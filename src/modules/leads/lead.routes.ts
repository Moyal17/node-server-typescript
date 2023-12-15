import express, { Router } from 'express';
import { setCacheHeaders } from '../../middlewares/cache';
import { createLead, deleteLead, getLeadById, getLeads, updateLead } from './lead.controller';
import { validateBody, validateParams } from '../../middlewares/validation';
import { createLeadSchema, editLeadSchema } from './dto';
import { validateId } from '../shared/validations';

const router: Router = express.Router();

const leadsRoutes = {
  publicRoutes: () => {
    router.post('/', validateBody(createLeadSchema), createLead);
    router.get('/', setCacheHeaders('public', 5), getLeads);

    return router;
  },
  apiRoutes: () => {
    router.get('/:id', validateParams(validateId), getLeadById);
    router.put('/:id', validateParams(validateId), validateBody(editLeadSchema), updateLead);
    router.delete('/:id', validateParams(validateId), deleteLead);
    return router;
  },
};
export default leadsRoutes;
