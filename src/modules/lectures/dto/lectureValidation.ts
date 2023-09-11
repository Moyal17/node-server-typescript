import Joi, { Schema } from 'joi';

export const createLectureSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  title: Joi.string().min(2).required(),
  price: Joi.number().min(1).optional(),
});

export const editLectureSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
}).unknown(false); // this will remove any unexpected keys
