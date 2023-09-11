import mongoose, { Document } from 'mongoose';

interface IItem extends Document {
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  template?: string;
  media?: mongoose.Types.ObjectId;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
}
export default IItem;
