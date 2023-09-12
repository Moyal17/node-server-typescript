import mongoose, { Document } from 'mongoose';

interface ISection extends Document {
  courseId: mongoose.Types.ObjectId;
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  duration?: number;
  lectures?: mongoose.Types.ObjectId[];
  isDraft?: boolean;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
}
export default ISection;
