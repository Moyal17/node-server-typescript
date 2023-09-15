import mongoose from 'mongoose';

interface ICollection {
  _id: mongoose.Types.ObjectId | string;
  key?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  link?: {
    label?: string;
    href?: string;
  };
  order?: number;
  media?: mongoose.Types.ObjectId | string;
  items?: mongoose.Types.ObjectId[] | string[];
  isDraft?: boolean;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
}
export default ICollection;
