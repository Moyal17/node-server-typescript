import Joi, { Schema } from 'joi';

export const signUpSchema: Schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).unknown(false); // this will remove any unexpected keys

export const logInSchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).unknown(false); // this will remove any unexpected keys
