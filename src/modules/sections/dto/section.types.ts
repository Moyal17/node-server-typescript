import mongoose from 'mongoose';

export type SectionObject = {
  _id?: mongoose.Types.ObjectId | string;
  courseId?: mongoose.Types.ObjectId | string;
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  duration?: number;
  isDraft?: boolean;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: string;
};
