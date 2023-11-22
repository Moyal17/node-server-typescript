import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

export const validateBody = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const options = {
      stripUnknown: true,
    };
    const { error } = schema.validate(req.body, options);
    if (error) {
      console.error(`validationMiddleware | ${error.details[0].message} `);
      return res.status(400).send({ message: error.details[0].message });
    }
    next();
  };
};

export const validateParams = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.details[0].message, error });
    }
    next();
  };
};

export const validateQuery = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const options = {
      stripUnknown: true,
    };
    const { error } = schema.validate(req.query, options);
    if (error) {
      return res.status(400).json({ message: error.details[0].message, error });
    }
    next();
  };
};
