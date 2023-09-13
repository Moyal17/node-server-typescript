import Joi, { Schema } from 'joi';

export const categorySchema: Schema = Joi.object({
  _id: Joi.string().optional(),
  group: Joi.array().items(Joi.string()).optional(),
  uri: Joi.string().min(2).required(),
  language: Joi.string().min(2).max(2).required(),
  title: Joi.string().min(2).required(),
  description: Joi.string().optional(),
  subtitle: Joi.string().max(500).optional(),
  order: Joi.number().max(100).optional(),
  media: Joi.string().optional(),
  seo: {
    title: Joi.string().optional(),
    description: Joi.string().optional(),
  },
  searchKeywords: Joi.array().items(Joi.string()).optional(),
  isFilter: Joi.boolean().optional(),
  isShow: Joi.boolean().optional(),
});

export const createCategorySchema: Schema = categorySchema;

export const editCategorySchema: Schema = Joi.object({
  title: Joi.string().min(2).required(),
  description: Joi.string().max(500).allow(null),
}).unknown(false); // this will remove any unexpected keys
