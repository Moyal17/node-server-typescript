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
