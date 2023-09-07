import mongoose, { Document } from 'mongoose';

interface IItem extends Document {
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  media?: mongoose.Types.ObjectId;
  isRemoved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export default IItem;
