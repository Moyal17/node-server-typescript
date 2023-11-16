import { CategoryObject } from '../../categories/dto';
import { MediaObject } from '../../media/dto';
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
  category: string[] | CategoryObject[];
  sections?: string[] | mongoose.Types.ObjectId[];
  media?: string | MediaObject;
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

export const allFields =
  'uri title subtitle content template order duration category sections media price currency rating numberOfRatings audienceFit objectives isPublic isBestSeller isDraft isRemoved publishedAt updatedAt createdAt';
export const basicFields =
  'uri title subtitle content template order duration category media price audienceFit objectives rating isPublic isBestSeller publishedAt';
export const minimalFields = 'uri title subtitle isBestSeller publishedAt audienceFit objectives';
