import Joi, { Schema } from 'joi';

export const createCollectionSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  language: Joi.string().min(2).max(2).optional(),
});

export const editCollectionSchema: Schema = Joi.object({
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
}).unknown(false); // this will remove any unexpected keys
