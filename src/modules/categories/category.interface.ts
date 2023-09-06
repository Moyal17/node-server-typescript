import mongoose, { Document } from 'mongoose';
import { categoryGroup } from './dto';

interface ISeo {
  title?: string;
  description?: string;
}

interface ICategory extends Document {
  group?: string | categoryGroup;
  public_id?: string; // Optional because it's not required in the schema
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

