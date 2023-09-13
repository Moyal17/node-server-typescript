import Joi, { Schema } from 'joi';

export const courseSchema = {
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().optional(),
  content: Joi.string().optional(),
  template: Joi.string().optional(),
  order: Joi.number().min(1).optional(),
  duration: Joi.number().min(1).optional(),
  category: Joi.array().items(Joi.string()).optional(),
  thumbnail: Joi.string().optional(),
  source: Joi.string().optional(),
  price: Joi.number().min(1).optional(),
  currency: Joi.string().optional(),
  rating: Joi.number().min(1).optional(),
  numberOfRatings: Joi.number().min(1).optional(),
  isBestSeller: Joi.boolean().optional(),
};

export const createCourseSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  ...courseSchema,
}).unknown(true);
export const editCourseSchema: Schema = Joi.object({
  _id: Joi.string().required(),
  ...courseSchema,
}).unknown(false);
