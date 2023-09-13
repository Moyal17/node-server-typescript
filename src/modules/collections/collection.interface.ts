import mongoose from 'mongoose';

interface ICollection {
  _id?: mongoose.Types.ObjectId | string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  media?: mongoose.Types.ObjectId;
  items?: mongoose.Types.ObjectId[];
  isDraft?: boolean;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
}
export default ICollection;
