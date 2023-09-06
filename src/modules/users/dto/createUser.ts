import Joi, { Schema, ValidationResult } from 'joi';

export const createUserSchema: Schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

export const validateCreateUser = (data: any): ValidationResult => {
  return createUserSchema.validate(data);
};