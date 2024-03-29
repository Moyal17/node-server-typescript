import Joi, { Schema } from 'joi';
export const articleSchema = {
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
  author: Joi.string().optional(),
  authorName: Joi.string().allow(null).optional(),
  authorProfession: Joi.string().allow(null).optional(),
  authorAvatar: Joi.string().allow(null).optional(),
  language: Joi.string().max(2).optional(),
  media: Joi.string().allow(null).optional(),
  category: Joi.array().items(Joi.string()).optional(),
  isDraft: Joi.boolean().optional(),
};
export const createArticleSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  ...articleSchema,
}).unknown(true);

export const createArticlesSchema: Schema = Joi.object({
  articles: Joi.array()
    .items(Joi.object({ ...articleSchema }))
    .required(),
});

export const editArticleSchema: Schema = Joi.object({
  _id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).required(),
  ...articleSchema,
}).unknown(true);
