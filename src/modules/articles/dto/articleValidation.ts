import Joi, { Schema } from 'joi';
export const articleSchema = {
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
  author: Joi.string().optional(),
  language: Joi.string().max(2).optional(),
  order: Joi.number().max(1000).optional(),
  media: Joi.string().optional(),
  category: Joi.array().items(Joi.string()).optional(),
  isDraft: Joi.boolean().optional(),
};
export const createArticleSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  ...articleSchema,
}).unknown(true);

export const editArticleSchema: Schema = Joi.object({
  _id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).required(),
  ...articleSchema,
}).unknown(false);
