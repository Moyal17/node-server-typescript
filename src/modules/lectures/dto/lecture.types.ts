import { CategoryObject } from '../../categories/dto';
import mongoose from 'mongoose';

export type LectureObject = {
  _id?: string | mongoose.Types.ObjectId;
  sectionId?: string | mongoose.Types.ObjectId;
  uri?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  type?: string;
  category?: string[] | CategoryObject[];
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
