import Joi, { Schema } from 'joi';

export const createLectureSchema: Schema = Joi.object({
  sectionId: Joi.string().required(),
  uri: Joi.string().min(2).required(),
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().optional(),
  price: Joi.number().optional(),
}).unknown(true);

export const editLectureSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
}).unknown(false); // this will remove any unexpected keys
