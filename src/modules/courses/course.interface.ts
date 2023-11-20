import mongoose from 'mongoose';

interface ICourse {
  _id: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  category: mongoose.Types.ObjectId[];
  sections?: mongoose.Types.ObjectId[];
  media?: mongoose.Types.ObjectId;
  attachments?: mongoose.Types.ObjectId[];
  price?: number;
  currency?: string;
  rating?: number;
  numberOfRatings?: number;
  isPublic?: boolean;
  isBestSeller?: boolean;
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}
export default ICourse;
