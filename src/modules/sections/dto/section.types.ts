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

export const allFields = 'courseId title subtitle content order duration isDraft isRemovable isRemoved publishedAt updatedAt createdAt';
export const basicFields = 'courseId title subtitle order duration';
