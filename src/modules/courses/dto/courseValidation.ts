import Joi, { Schema } from 'joi';

export const createCourseSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  title: Joi.string().min(2).required(),
  price: Joi.number().min(1).optional(),
});

export const editCourseSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
}).unknown(false); // this will remove any unexpected keys
