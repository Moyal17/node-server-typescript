import Joi, { Schema } from 'joi';
import { LessonTypeEnum } from './lesson.types';
const isRegex = new RegExp('^[0-9a-fA-F]{24}$');
export const lessonSchema = {
  sectionId: Joi.string().pattern(isRegex).required(),
  courseId: Joi.string().pattern(isRegex).required(),
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().allow(null).optional(),
  content: Joi.string().allow(null).optional(),
  template: Joi.string().allow(null).optional(),
  order: Joi.number().min(1).optional(),
  duration: Joi.number().min(1).allow(null).optional(),
  type: Joi.string().valid(...Object.values(LessonTypeEnum)),
  media: Joi.string().allow(null).optional(),
  attachments: Joi.array().items(Joi.string()).allow(null).optional(),
  rating: Joi.number().optional(),
  numberOfRatings: Joi.number().optional(),
  publishedAt: Joi.string().allow(null).optional(),
};

export const editLessonSchema: Schema = Joi.object({
  _id: Joi.string().pattern(isRegex).required(),
  // This regex is for MongoDB ObjectIDs, adjust if you're using another type of ID
  ...lessonSchema,
}).unknown(false); // this will remove any unexpected keys

export const createLessonSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  ...lessonSchema,
}).unknown(false);

export const createLessonsSchema: Schema = Joi.object({
  lessons: Joi.array()
    .items(Joi.object({ ...lessonSchema }))
    .required(),
});
