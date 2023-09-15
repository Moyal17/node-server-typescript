import { Schema } from 'joi';

export const bulkValidation = (data: any[], schema: Schema) => {
  if (data && data.length > 0) {
    let isValid = true;
    data.forEach((item: any) => {
      const { error } = schema.validate(item);
      if (error) {
        console.error(`validationMiddleware | ${error.details[0].message}, item: ${item.uri || item.title || ''}`);
        isValid = false;
      }
    });
    return isValid;
  }
  return null;
};
