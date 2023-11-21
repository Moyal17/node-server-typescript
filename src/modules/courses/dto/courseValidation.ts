import Joi, { Schema } from 'joi';

export const courseSchema = {
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().allow(null).optional(),
  content: Joi.string().allow(null).optional(),
  template: Joi.string().allow(null).optional(),
  order: Joi.number().min(1).allow(null).optional(),
  duration: Joi.number().min(1).allow(null).optional(),
  category: Joi.array().items(Joi.string()).optional(),
  media: Joi.string().allow(null).optional(),
  attachments: Joi.array().items(Joi.string()).allow(null).optional(),
  publishedAt: Joi.string().allow(null).optional(),
  instructorName: Joi.string().allow(null).optional(),
  instructorLocation: Joi.string().allow(null).optional(),
  instructorAvatar: Joi.string().allow(null).optional(),
  audienceFit: Joi.array().items(Joi.string()).allow(null).optional(),
  objectives: Joi.array().items(Joi.string()).allow(null).optional(),
};

export const createCourseSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  ...courseSchema,
}).unknown(false);
export const editCourseSchema: Schema = Joi.object({
  _id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).required(),
  // This regex is for MongoDB ObjectIDs, adjust if you're using another type of ID
  ...courseSchema,
}).unknown(false);
