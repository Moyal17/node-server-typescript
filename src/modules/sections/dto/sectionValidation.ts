import Joi, { Schema } from 'joi';

export const createSectionSchema: Schema = Joi.object({
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
});

export const editSectionSchema: Schema = Joi.object({
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
}).unknown(false); // this will remove any unexpected keys
