import { CategoryObject } from '../../categories/dto';
import { MediaObject } from '../../media/dto';
import mongoose from 'mongoose';
import Joi from "joi";

export type CourseObject = {
  _id: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  category?: string[] | CategoryObject[];
  sections?: string[] | mongoose.Types.ObjectId[];
  media?: string | MediaObject;
  attachments?: string[] | mongoose.Types.ObjectId[];
  price?: number;
  currency?: string;
  rating?: number;
  audienceFit?: string[];
  objectives?: string[];
  numberOfRatings?: number;
  instructor?: {
    avatar?: string | MediaObject;
    name?: string;
    location?: string;
  };
  isBestSeller?: boolean;
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
};

export type CourseReqBody = {
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  category?: string[];
  media?: string;
  attachments?: string[];
  publishedAt?: string;
  instructorName?: string;
  instructorLocation?: string;
  instructorAvatar?: string;
  audienceFit?: string[];
  objectives?: string[];
};

export const allFields =
  'uri title subtitle content template order duration category sections media price currency rating numberOfRatings audienceFit objectives instructor isPublic isBestSeller isDraft isRemoved publishedAt updatedAt createdAt';

export const adminBasicFields = 'uri title order duration category instructor isPublic publishedAt';
export const basicFields =
  'uri title subtitle content order duration category media attachments price audienceFit objectives instructor isPublic publishedAt';
export const minimalFields = 'uri title subtitle isBestSeller publishedAt audienceFit objectives';
