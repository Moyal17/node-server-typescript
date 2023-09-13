import mongoose from 'mongoose';
import { categoryGroup } from './dto';

interface ISeo {
  title?: string;
  description?: string;
}

interface ICategory {
  _id?: mongoose.Types.ObjectId | string;
  group?: string | categoryGroup;
  uri: string;
  language?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  order?: number;
  media?: mongoose.Types.ObjectId; // Reference to the Media document
  seo?: ISeo;
  searchKeywords?: string[];
  isFilter?: boolean;
  isShow?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export default ICategory;
