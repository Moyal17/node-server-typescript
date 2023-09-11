import mongoose, { Document } from 'mongoose';

interface ICollection extends Document {
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
