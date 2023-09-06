import Joi, { Schema } from 'joi';

export const createUserSchema: Schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const editUserSchema: Schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
}).unknown(false); // this will remove any unexpected keys

export const validateId = Joi.object({
  id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).required(),
  // This regex is for MongoDB ObjectIDs, adjust if you're using another type of ID
});
