import mongoose from 'mongoose';

interface IItem {
  _id?: mongoose.Types.ObjectId | string;
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  template?: string;
  icon?: string;
  link?: {
    label?: string;
    href?: string;
  };
  media?: mongoose.Types.ObjectId;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
}
export default IItem;
