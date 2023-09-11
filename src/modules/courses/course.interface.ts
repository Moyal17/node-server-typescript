import mongoose, { Document } from 'mongoose';

interface ICourse extends Document {
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  category: mongoose.Types.ObjectId[];
  itemCollection: mongoose.Types.ObjectId[];
  thumbnail?: mongoose.Types.ObjectId;
  previewVideo?: mongoose.Types.ObjectId;
  price?: number;
  currency?: string;
  rating?: number;
  numberOfRatings?: number;
  isBestSeller?: boolean;
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}
export default ICourse;
