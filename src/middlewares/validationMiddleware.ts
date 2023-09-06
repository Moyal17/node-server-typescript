import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

export const validationMiddleware = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.error('validationMiddleware | error.details: ', error.details);
      return res.status(400).send(error.details[0].message);
    }
    next();
  };
};
