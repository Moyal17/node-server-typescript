import mongoose from 'mongoose';
import { AllowNullProperty } from '../shared/types';

interface ICollection {
  _id: mongoose.Types.ObjectId | string;
  key?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  link?: {
    label?: string | null;
    href?: string | null;
  };
  order?: number;
  media?: mongoose.Types.ObjectId | string;
  items?: mongoose.Types.ObjectId[];
  isDraft?: boolean;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
}

type NullableICollection = AllowNullProperty<ICollection>;
export default NullableICollection;
