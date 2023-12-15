import Joi, { Schema } from 'joi';
import { categoryGroupEnum } from './category.types';

export const categorySchema = {
  group: Joi.string().optional(),
  language: Joi.string().min(2).max(2).optional(),
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
};

export const createCategorySchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  ...categorySchema,
}).unknown(false);

export const editCategorySchema: Schema = Joi.object({
  _id: Joi.string().optional(),
  ...categorySchema,
}).unknown(false); // this will remove any unexpected keys

export const createCategoriesSchema: Schema = Joi.object({
  categories: Joi.array()
    .items(Joi.object({ ...categorySchema }))
    .required(),
});

export const validateGroupName = Joi.object({
  group: Joi.array()
    .items(Joi.string().valid(...Object.values(categoryGroupEnum)))
    .required(),
});
