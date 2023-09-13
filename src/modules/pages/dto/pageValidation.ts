import Joi, { Schema } from 'joi';

export const pageSchema = {
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
  language: Joi.string().max(2).optional(),
  order: Joi.number().max(1000).optional(),
  media: Joi.string().optional(),
  seo: {
    title: Joi.string().optional(),
    description: Joi.string().optional(),
  },
  itemCollection: Joi.array().items(Joi.string()).optional(),
  isDraft: Joi.boolean().optional(),
};
export const createPageSchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  ...pageSchema,
}).unknown(true);

export const editPageSchema: Schema = Joi.object({
  _id: Joi.string().required(),
  ...pageSchema,
}).unknown(false); // this will remove any unexpected keys
