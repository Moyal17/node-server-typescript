import Joi, { Schema } from 'joi';

export const collectionSchema = {
  key: Joi.string().min(2).required(),
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
  language: Joi.string().max(2).optional(),
  order: Joi.number().max(1000).optional(),
  template: Joi.string().optional(),
  link: {
    label: Joi.string().optional(),
    href: Joi.string().optional(),
  },
  seo: {
    title: Joi.string().optional(),
    description: Joi.string().optional(),
  },
  media: Joi.string().optional(),
  items: Joi.array().items(Joi.string()).optional(),
  isDraft: Joi.boolean().optional(),
  isRemoved: Joi.boolean().optional(),
};

export const createCollectionSchema: Schema = Joi.object({
  itemCollection: Joi.object(collectionSchema).required(),
  pageId: Joi.string().required(),
});

export const editCollectionSchema: Schema = Joi.object({
  _id: Joi.string().required(),
  ...collectionSchema,
}).unknown(false); // this will remove any unexpected keys

export const bulkCollectionsSchema: Schema = Joi.object({
  itemCollection: Joi.array().items(Joi.object(collectionSchema)).required(),
  pageId: Joi.string().required(),
});
