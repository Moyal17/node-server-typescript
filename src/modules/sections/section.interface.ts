import mongoose from 'mongoose';
import { LessonObject } from '../lessons/dto';

interface ISection {
  _id: mongoose.Types.ObjectId | string;
  courseId: mongoose.Types.ObjectId | string;
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  duration?: number;
  isDraft?: boolean;
  isRemovable?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
  lessons?: Partial<LessonObject>[];
}
export default ISection;
