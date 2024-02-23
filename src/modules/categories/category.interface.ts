import mongoose from 'mongoose';
import { categoryGroupEnum } from './dto';
import { AllowNullProperty, ISeo } from '../shared/types';

interface ICategory {
  _id?: mongoose.Types.ObjectId | string;
  group: string | categoryGroupEnum;
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
type NullableICategory = AllowNullProperty<ICategory>;
export default NullableICategory;
