import mongoose from 'mongoose';
import { AllowNullProperty } from '../shared/types';

interface IItem {
  _id?: mongoose.Types.ObjectId | string;
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  template?: string;
  icon?: string;
  link?: {
    label?: string | null;
    href?: string | null;
  };
  media?: mongoose.Types.ObjectId;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
}
type NullableIItem = AllowNullProperty<IItem>;
export default NullableIItem;
