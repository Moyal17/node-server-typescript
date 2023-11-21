import Joi, { Schema } from 'joi';

const SectionSchema = {
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).allow(null).optional(),
  order: Joi.number().min(1).max(250).required(),
  duration: Joi.number().allow(null).optional(),
};
export const createSectionSchema: Schema = Joi.object(SectionSchema).unknown(true);
export const editSectionSchema: Schema = Joi.object({
  _id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).required(),
  ...SectionSchema,
}).unknown(false); // this will remove any unexpected keys
