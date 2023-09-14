import Joi, { Schema } from 'joi';
import { sourceTypes } from './media.types';

export const generatePreSignedUrl: Schema = Joi.object({
  fileName: Joi.string().min(2).required(),
  folder: Joi.string().required(),
  contentType: Joi.string().required(),
}).unknown(false); // this will remove any unexpected keys

const mediaObjectSchema = Joi.object({
  name: Joi.string().optional(),
  type: Joi.string().optional(),
  sourceType: Joi.string().valid(sourceTypes).optional(),
  thumbnail: Joi.string().optional(),
  source: Joi.string().optional(),
  sourceId: Joi.string().optional(),
  sourceOrigin: Joi.string().optional(),
  extension: Joi.string().optional(),
  duration: Joi.number().optional(),
  format: Joi.string().optional(),
  size: Joi.number().optional(),
  searchKeywords: Joi.array().items(Joi.string()).optional(),
});

export const createMediaSchema: Schema = Joi.object({
  completedUploads: Joi.array().items(mediaObjectSchema).required(),
});

export const editMediaSchema: Schema = Joi.object({
  title: Joi.string().min(2).required(),
  description: Joi.string().max(500).allow(null),
}).unknown(false); // this will remove any unexpected keys
