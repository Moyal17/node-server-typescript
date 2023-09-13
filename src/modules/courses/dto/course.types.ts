import { categoryObject } from '../../categories/dto';
import mongoose from 'mongoose';

export type CourseObject = {
  _id: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  category: string[] | categoryObject[];
  sections?: string[] | mongoose.Types.ObjectId[];
  thumbnail?: string;
  source?: string;
  price?: number;
  currency?: string;
  rating?: number;
  numberOfRatings?: number;
  isBestSeller?: boolean;
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
};
