import Joi, { Schema } from 'joi';

export const createLectureSchema: Schema = Joi.object({
  sectionId: Joi.string().required(),
  uri: Joi.string().min(2).required(),
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().optional(),
  content: Joi.string().optional(),
  template: Joi.string().optional(),
  order: Joi.number().optional(),
  duration: Joi.number().optional(),
  type: Joi.string().optional(),
  // media: Joi.string().optional(),
  price: Joi.number().optional(),
  currency: Joi.string().optional(),
  rating: Joi.number().optional(),
  numberOfRatings: Joi.number().optional(),
  isBestSeller: Joi.boolean().optional(),
  isDraft: Joi.boolean().optional(),
  isRemoved: Joi.boolean().optional(),
  publishedAt: Joi.string().optional(),
  updatedAt: Joi.string().optional(),
  createdAt: Joi.string().optional(),
}).unknown(true);

export const editLectureSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
}).unknown(false); // this will remove any unexpected keys

export const createLecturesSchema: Schema = Joi.object({
  lectures: Joi.array().items(createLectureSchema).required(),
});
