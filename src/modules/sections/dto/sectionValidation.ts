import Joi, { Schema } from 'joi';

const SectionSchema = {
  courseId: Joi.string().required(),
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
  order: Joi.number().max(250).optional(),
  duration: Joi.number().max(10000).optional(),
  isDraft: Joi.boolean().optional().default(true),
  isRemovable: Joi.boolean().optional().default(true),
  isRemoved: Joi.boolean().optional().default(false),
};
export const createSectionSchema: Schema = Joi.object(SectionSchema).unknown(true);
export const editSectionSchema: Schema = Joi.object({
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
  order: Joi.number().max(250).optional(),
  duration: Joi.number().max(10000).optional(),
  isDraft: Joi.boolean().optional().default(true),
  isRemoved: Joi.boolean().optional().default(false),
}).unknown(false); // this will remove any unexpected keys
