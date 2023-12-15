import Joi, { Schema } from 'joi';
import { GenderEnum } from '../../shared/enums';
import { LeadSourceEnum, LeadStatusEnum } from './lead.types';

export const leadSchema = {
  group: Joi.string().optional(),
  language: Joi.string().min(2).max(2).optional(),
  title: Joi.string().min(2).required(),
  description: Joi.string().optional(),
  subtitle: Joi.string().max(500).optional(),
  order: Joi.number().max(100).optional(),
  media: Joi.string().optional(),
  seo: {
    title: Joi.string().optional(),
    description: Joi.string().optional(),
  },
  searchKeywords: Joi.array().items(Joi.string()).optional(),
  isFilter: Joi.boolean().optional(),
  isShow: Joi.boolean().optional(),

  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  gender: Joi.array()
    .items(Joi.string().valid(...Object.values(GenderEnum)))
    .required(),
  email: Joi.string().min(2).required(),
  phone: Joi.string().min(2).required(),
  contactPreference: Joi.string().optional(),
  source: Joi.array()
    .items(Joi.string().valid(...Object.values(LeadSourceEnum)))
    .optional(),
  status: Joi.array()
    .items(Joi.string().valid(...Object.values(LeadStatusEnum)))
    .optional(),
  category: Joi.array().items(Joi.string()).optional(),
  interest: Joi.string().optional(),
  notes: Joi.string().optional(),
};

export const createLeadSchema: Schema = Joi.object({
  ...leadSchema,
}).unknown(false);

export const editLeadSchema: Schema = Joi.object({
  _id: Joi.string().optional(),
  ...leadSchema,
}).unknown(false); // this will remove any unexpected keys
