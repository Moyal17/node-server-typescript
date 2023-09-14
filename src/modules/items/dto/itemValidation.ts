import Joi, { Schema } from 'joi';

export const itemSchema = {
  title: Joi.string().min(2).required(),
  subtitle: Joi.string().max(250).optional(),
  content: Joi.string().optional(),
  order: Joi.number().max(1000).optional(),
  template: Joi.string().optional(),
  link: {
    label: Joi.string().optional(),
    href: Joi.string().optional(),
  },
  media: Joi.string().optional(),
  isRemoved: Joi.boolean().optional(),
};

export const createItemSchema: Schema = Joi.object({
  ...itemSchema,
});

export const editItemSchema: Schema = Joi.object({
  _id: Joi.string().required(),
  ...itemSchema,
}).unknown(false); // this will remove any unexpected keys
