import Joi, { Schema } from 'joi';
import { MediaTypeEnum, sourceTypes } from './media.types';

export const generatePreSignedUrl: Schema = Joi.object({
  fileName: Joi.string().min(2).required(),
  // folder: Joi.string().required(),
  contentType: Joi.string().required(),
}).unknown(false); // this will remove any unexpected keys

const mediaObjectSchema = Joi.object({
  name: Joi.string().optional(),
  mediaType: Joi.string().valid(MediaTypeEnum).optional(),
  sourceType: Joi.string().valid(sourceTypes).optional(),
  thumbnail: Joi.string().optional(),
  source: Joi.string().optional(),
  duration: Joi.number().optional(),
  type: Joi.string(),
  size: Joi.number(),
  searchKeywords: Joi.array().items(Joi.string()).optional(),
});

const mediaCreationSchema = Joi.object({
  id: Joi.string().optional(),
  name: Joi.string().required(),
  type: Joi.string().required(),
  uploadURL: Joi.string().required(),
  size: Joi.number().min(1).required(),
  duration: Joi.number().optional(),
  height: Joi.number().optional(),
  width: Joi.number().optional(),
}).unknown(false);

export const createMediaSchema: Schema = Joi.object({
  completedUploads: Joi.array().items(mediaCreationSchema).required(),
});

export const editMediaSchema: Schema = Joi.object({
  name: Joi.string().min(2).required(),
  description: Joi.string().max(500).allow(null),
}).unknown(false); // this will remove any unexpected keys
