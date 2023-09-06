import Joi, { Schema } from 'joi';

export const createCategorySchema: Schema = Joi.object({
  uri: Joi.string().min(2).required(),
  language: Joi.string().min(2).max(2).required(),
  title: Joi.string().min(2).required(),
  description: Joi.string().max(500).allow(null),
});

export const editCategorySchema: Schema = Joi.object({
  title: Joi.string().min(2).required(),
  description: Joi.string().max(500).allow(null),
}).unknown(false); // this will remove any unexpected keys

export const validateId = Joi.object({
  id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).required(),
  // This regex is for MongoDB ObjectIDs, adjust if you're using another type of ID
});
