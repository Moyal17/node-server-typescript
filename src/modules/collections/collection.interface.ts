import mongoose, { Document } from 'mongoose';

interface ICollection extends Document {
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  media?: mongoose.Types.ObjectId;
  items?: mongoose.Types.ObjectId[];
  isDraft?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export default ICollection;
